import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Operativsystem og filsystem – macOS',
  description: 'Fem systemprogrammer, fem tastatursnarveier og en sammenligning av sju filsystemer.',
  icons: { icon: '/favicon.svg' },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="nb"><body>{children}</body></html>;
}
