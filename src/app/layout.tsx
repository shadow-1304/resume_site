import type { Metadata } from 'next';
import { Inter, Geist, Geist_Mono, Playfair_Display } from 'next/font/google';
import './globals.css';
import SmoothScroll from '@/components/SmoothScroll';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const fontSerif = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-serif',
  display: 'swap',
});

const geist = Geist({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
});

const geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Parth Prajapati | Cyber Security Graduate',
  description: 'Portfolio of Parth Prajapati, Cyber Security Graduate specializing in network infrastructure security, systems administration, Linux ecosystems, AI automation scripting, and Retrieval-Augmented Generation (RAG) concepts.',
  keywords: [
    'Parth Prajapati',
    'Cyber Security',
    'Network Security',
    'AI Automation',
    'RAG',
    'Retrieval Augmented Generation',
    'Linux System Administration',
    'Systems Administration',
    'Gujarat University'
  ],
  authors: [{ name: 'Parth Prajapati' }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${fontSerif.variable} ${geist.variable} ${geistMono.variable} scroll-smooth`}
    >
      <body className="bg-background text-text-primary antialiased overflow-x-hidden">
        <div className="scanline" />
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
