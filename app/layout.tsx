import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import GlobalStyle from './global';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Notepad',
  description: 'Markdown editor',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <GlobalStyle />
      <html lang="en">
        <body className={inter.className}>{children}</body>
      </html>
    </>
  );
}
