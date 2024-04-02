import { ReactNode } from 'react';

import clsxm from '@/lib/clsxm';

import UnstyledLink from './UnstyledLink';

type ButtonProps = {
  children: ReactNode;
  className?: string;
  href: string;
};

export default function ButtonLink({ children, className, href }: ButtonProps) {
  return (
    <UnstyledLink href={href}>
      <button
        className={clsxm(
          'bg-brown-1 font-poppins rounded-2xl px-16 py-2 text-3xl font-semibold text-white md:px-32',
          className,
        )}
      >
        {children}
      </button>
    </UnstyledLink>
  );
}
