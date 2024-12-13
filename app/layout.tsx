import './globals.css';
import type { Metadata } from 'next';
import { Providers } from '@/components/providers';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Analytics } from '@/components/analytics';

export const metadata: Metadata = {
  title: 'ReVitalize - Transform Your Vehicle into Electric',
  description: 'Convert your traditional vehicle into electric at 1/3rd the cost of a new EV. Powered by AI, making sustainable mobility accessible for everyone.',
  keywords: 'EV conversion, electric vehicles, sustainable mobility, vehicle transformation, green technology',
  openGraph: {
    title: 'ReVitalize - Transform Your Vehicle into Electric',
    description: 'Convert your traditional vehicle into electric at 1/3rd the cost of a new EV.',
    images: ['/og-image.jpg'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#2E7D32" />
      </head>
      <body>
        <Providers>
          <Header />
          <main>{children}</main>
          <Footer />
          <Analytics />
        </Providers>
      </body>
    </html>
  );
}