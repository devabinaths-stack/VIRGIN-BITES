
import type { Metadata, Viewport } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://thevirginbites.com'),

  title: 'The Virgin Bites | Café & Food in Coimbatore',

  description:
    'Discover The Virgin Bites in Coimbatore, Tamil Nadu. Explore our café menu, delicious food, bulk orders and event food stalls. Unadulterated Love.',

  alternates: {
    canonical: '/',
  },

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: 'The Virgin Bites | Café & Food in Coimbatore',
    description:
      'Discover our café menu, delicious food, bulk orders and event food stalls in Coimbatore. Unadulterated Love.',
    url: 'https://thevirginbites.com/',
    siteName: 'The Virgin Bites',
    locale: 'en_IN',
    type: 'website',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
