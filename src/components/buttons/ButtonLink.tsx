import * as React from 'react';

import UnstyledLink from '@/components/UnstyledLink';
import clsxm from '@/lib/clsxm';
import { ButtonLinkProps } from '@/types/button';

const ButtonLink = React.forwardRef<HTMLButtonElement, ButtonLinkProps>(
  ({ children, className, href }, ref) => {
    return (
      <UnstyledLink href={href}>
        <button
          ref={ref}
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
