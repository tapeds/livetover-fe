import { Metadata } from 'next';

import LoginForm from '@/app/login/LoginForm';
import NextImage from '@/components/NextImage';

export const metadata: Metadata = {
  title: 'Login Customer',
};

export default function CustomerLogin() {
  return (
    <main className='flex min-h-screen items-center justify-center overflow-hidden bg-cream-2'>
      <div className='relative flex h-screen w-screen basis-1/2 items-center justify-center bg-[url("/images/loginbg.png")] bg-cover max-lg:hidden'>
        <div className='rounded-[49px] bg-cream-2 px-14 pb-7 pt-5 drop-shadow-[0px_4px_2px_rgba(0,0,0,0.1)]'>
          <NextImage src='/logo.svg' alt='logo' width={418} height={85} />
        </div>
        <div className='absolute right-0 h-full w-2 bg-black opacity-30' />
      </div>
      <div className='flex basis-1/2 flex-col items-center justify-center gap-2'>
        <div>
          <div className='relative w-fit'>
            <h1 className='relative z-[5] font-poppins text-[60px] font-bold uppercase leading-[120px] text-brown-1 md:text-[80px]'>
              Login
            </h1>
            <NextImage
              src='/asterisk.png'
              alt='asterisk'
              width={123}
              height={118}
              className='absolute -right-9 top-0 z-0 w-[60px] md:-right-16 md:-top-14 md:w-[123px]'
            />
          </div>
          <LoginForm userRole='konsumen' />
        </div>
      </div>
    </main>
  );
}
