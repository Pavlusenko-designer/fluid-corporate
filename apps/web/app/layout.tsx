import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Fluid Corporate',
  description: 'Production-ready corporate website powered by Next.js and Sanity',
  openGraph: {
    type: 'website',
    locale: 'en_US',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white text-brand-900">{children}</body>
    </html>
  );
}
