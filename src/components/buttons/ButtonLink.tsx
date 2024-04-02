import * as React from 'react';

import UnstyledLink from '@/components/UnstyledLink';
import clsxm from '@/lib/clsxm';

type ButtonProps = {
  children: React.ReactNode;
  className?: string;
  href: string;
} & React.ComponentPropsWithRef<'button'>;

const ButtonLink = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, className, href }: ButtonProps) => {
    return (
      <UnstyledLink href={href}>
        <button
          className={clsxm(
            'rounded-2xl bg-brown-1 px-16 py-2 font-poppins text-3xl font-semibold text-white md:px-32',
            className,
          )}
        >
          {children}
        </button>
      </UnstyledLink>
    );
  },
);

export default ButtonLink;
