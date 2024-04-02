import Button from '@/app/auth/components/Button';
import NextImage from '@/components/NextImage';

export default function Auth() {
  return (
    <main className='bg-cream-2 flex min-h-screen items-center justify-center'>
      <div className='flex flex-col items-center justify-center gap-5 md:gap-10'>
        <div className='bg-pink-4 rounded-[49px] px-14 pb-7 pt-5'>
          <NextImage
            src='/logo.svg'
            alt='logo'
            width={418}
            height={85}
            className='w-[200px] md:w-[318]'
          />
        </div>
        <div className='flex flex-col items-center justify-center gap-10 md:gap-20'>
          <h1 className='text-brown-1 font-poppins text-5xl font-bold leading-[75px]'>
            Register as:
          </h1>
          <div className='flex flex-col gap-8 lg:flex-row lg:gap-16'>
            <Button>Restaurant</Button>
            <Button>Customer</Button>
          </div>
        </div>
      </div>
    </main>
  );
}
