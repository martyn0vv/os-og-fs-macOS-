import { copyFile, mkdir, rm } from 'node:fs/promises';

const root = new URL('../', import.meta.url);
const output = new URL('dist/', root);
await rm(output, { recursive: true, force: true });
await mkdir(new URL('assets/', output), { recursive: true });

for (const file of ['index.html', 'styles.css', 'favicon.svg', 'assets/intro.js', 'assets/intro.css']) {
  await copyFile(new URL(file, root), new URL(file, output));
}

console.log('Built dist/: ready for a web server or double-clicking index.html.');
