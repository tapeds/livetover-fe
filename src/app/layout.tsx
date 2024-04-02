import './globals.css';

import type { Metadata } from 'next';

import clsxm from '@/lib/clsxm';
import { LemonMilk, poppins } from '@/lib/font';

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={clsxm(poppins.variable, LemonMilk.variable)}>
        {children}
      </body>
    </html>
  );
}