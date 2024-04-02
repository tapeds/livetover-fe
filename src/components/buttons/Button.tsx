import * as React from 'react';

import clsxm from '@/lib/clsxm';
import { ButtonProps } from '@/types/button';

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, className }, ref) => {
    return (
      <button
        ref={ref}
        className={clsxm(
          'rounded-2xl bg-brown-1 px-16 py-2 font-poppins text-3xl font-semibold text-white md:px-32',
          className,
        )}
      >
        {children}
      </button>
    );
  },
);

export default Button;
