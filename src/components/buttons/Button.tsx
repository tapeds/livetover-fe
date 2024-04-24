import * as React from 'react';
import { ImSpinner2 } from 'react-icons/im';

import clsxm from '@/lib/clsxm';
import { ButtonProps } from '@/types/button';

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, className, isLoading }, ref) => {
    return (
      <button
        ref={ref}
        className={clsxm(
          'flex items-center justify-center rounded-2xl bg-brown-1 px-16 py-2 text-center font-poppins text-3xl font-semibold text-white md:px-32',
          className,
        )}
      >
        {isLoading ? <ImSpinner2 className='animate-spin' /> : children}
      </button>
    );
  },
);

export default Button;
