import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Dhilip T — Full-Stack & Flutter Developer',
  description:
    'Dhilip T is a full-stack and Flutter developer designing intelligent product systems, mobile experiences, and reliable engineering solutions.',
  keywords: ['Dhilip T', 'Full-Stack Developer', 'Flutter Developer', 'Product Engineer', 'Portfolio'],
  icons: {
    icon: '/icon.svg',
  },
  openGraph: {
    title: 'Dhilip T — Full-Stack & Flutter Developer',
    description: 'Full-Stack Development · Flutter · Product Engineering',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dhilip T — Full-Stack & Flutter Developer',
    description: 'Full-Stack Development · Flutter · Product Engineering',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
