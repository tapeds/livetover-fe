import './globals.css';

import type { Metadata } from 'next';

import Providers from '@/app/providers';
import clsxm from '@/lib/clsxm';
import { LemonMilk, poppins } from '@/lib/font';

export const metadata: Metadata = {
  title: {
    default: 'Livetover',
    template: '%s | Livetover',
  },
  description: 'No food left behind! with Livetover',
  twitter: {
    card: 'summary_large_image',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={clsxm(poppins.variable, LemonMilk.variable)}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
