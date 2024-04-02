import { ReactNode } from 'react';

type ButtonProps = {
  children: ReactNode;
};

export default function Button({ children }: ButtonProps) {
  return (
    <button className='bg-brown-1 h-[81px] rounded-2xl px-16 py-4 text-3xl font-semibold text-white md:px-32'>
      {children}
    </button>
  );
}
