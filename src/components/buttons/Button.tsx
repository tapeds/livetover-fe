import * as React from 'react';

import clsxm from '@/lib/clsxm';

type ButtonProps = {
  children: React.ReactNode;
  className?: string;
} & React.ComponentPropsWithRef<'button'>;

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, className }: ButtonProps) => {
    return (
      <button
        className={clsxm(
          'bg-brown-1 font-poppins rounded-2xl px-16 py-2 text-3xl font-semibold text-white md:px-32',
          className,
        )}
      >
        {children}
      </button>
    );
  },
);

export default Button;
