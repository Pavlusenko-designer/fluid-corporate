import type { Metadata } from 'next';
import { Manrope, Sora } from 'next/font/google';
import './globals.css';

const bodyFont = Manrope({
  subsets: ['latin'],
  variable: '--font-body',
  weight: ['400', '500', '600', '700', '800'],
});

const displayFont = Sora({
  subsets: ['latin'],
  variable: '--font-display',
  weight: ['400', '500', '600', '700', '800'],
});

export const metadata: Metadata = {
  title: 'Al Rawaf',
  description: 'Al Rawaf corporate homepage powered by Next.js and Sanity CMS',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    title: 'Al Rawaf',
    description: 'Strategic corporate delivery with premium architecture, engineering, and operational rigor.',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${bodyFont.variable} ${displayFont.variable} font-sans text-[var(--ink-900)]`}>{children}</body>
    </html>
  );
}
