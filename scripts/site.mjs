import { createServer } from 'node:http';
import { copyFile, mkdir, readFile, rm } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { join } from 'node:path';

const root = fileURLToPath(new URL('../', import.meta.url));
const files = {
  'index.html': 'text/html; charset=utf-8',
  'styles.css': 'text/css; charset=utf-8',
  'favicon.svg': 'image/svg+xml',
};

if (process.argv[2] === 'build') {
  const output = join(root, 'dist');
  await rm(output, { recursive: true, force: true });
  await mkdir(output, { recursive: true });
  for (const file of Object.keys(files)) {
    await copyFile(join(root, file), join(output, file));
  }
  console.log('Built static site in dist/ (HTML, CSS and favicon).');
} else {
  const port = Number(process.env.PORT || 3000);
  const server = createServer(async (request, response) => {
    const pathname = new URL(request.url, 'http://localhost').pathname;
    const file = pathname === '/' ? 'index.html' : pathname.slice(1);
    if (!Object.hasOwn(files, file)) {
      response.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
      response.end('Fant ikke siden.');
      return;
    }
    if (!['GET', 'HEAD'].includes(request.method)) {
      response.writeHead(405, { Allow: 'GET, HEAD' });
      response.end();
      return;
    }
    try {
      const content = await readFile(join(root, file));
      response.writeHead(200, { 'Content-Type': files[file], 'Cache-Control': 'no-store' });
      response.end(request.method === 'HEAD' ? undefined : content);
    } catch {
      response.writeHead(500, { 'Content-Type': 'text/plain; charset=utf-8' });
      response.end('Kunne ikke åpne filen.');
    }
  });
  server.on('error', (error) => { console.error(error.message); process.exitCode = 1; });
  server.listen(port, '127.0.0.1', () => console.log(`Local: http://localhost:${port}/`));
}
