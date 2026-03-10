import type { Metadata } from 'next';
import { Playfair_Display, DM_Sans, Cinzel } from 'next/font/google';
import './globals.css';

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['700', '900'],
  style: ['normal', 'italic'],
  variable: '--font-playfair',
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-dmsans',
});

const cinzel = Cinzel({
  subsets: ['latin'],
  weight: ['700', '900'],
  variable: '--font-cinzel',
});

export const metadata: Metadata = {
  title: 'Persahabatan Yang Menyelamatkan Masa Depan',
  description: 'Youth Sharing - Firman Tuhan',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className={`${playfair.variable} ${dmSans.variable} ${cinzel.variable}`}>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
