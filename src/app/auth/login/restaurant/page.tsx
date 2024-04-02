'use client';

import { FormProvider, useForm } from 'react-hook-form';

import Button from '@/components/buttons/Button';
import Input from '@/components/Input';
import NextImage from '@/components/NextImage';

export default function CustomerLogin() {
  const methods = useForm();
  return (
    <main className='bg-cream-2 flex min-h-screen items-center justify-center overflow-hidden'>
      <div className='relative flex h-screen w-screen basis-1/2 items-center justify-center bg-[url("/images/loginbg.png")] bg-cover max-lg:hidden'>
        <div className='bg-cream-2 rounded-[49px] px-14 pb-7 pt-5 drop-shadow-[0px_4px_2px_rgba(0,0,0,0.1)]'>
          <NextImage src='/logo.svg' alt='logo' width={418} height={85} />
        </div>
        <div className='absolute right-0 h-full w-2 bg-black opacity-30' />
      </div>
      <div className='flex basis-1/2 flex-col items-center justify-center gap-2'>
        <div>
          <div className='relative w-fit'>
            <h1 className='font-poppins text-brown-1 relative z-[5] text-[60px] font-bold uppercase leading-[120px] md:text-[80px]'>
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
          <FormProvider {...methods}>
            <form className='flex w-[300px] flex-col gap-6 max-[300px]:w-[200px] sm:w-[400px] min-[1300px]:w-[500px]'>
              <Input id='email' label='Email' />
              <Input id='password' label='Password' />
              <Button>Login</Button>
            </form>
          </FormProvider>
        </div>
      </div>
    </main>
  );
}
