import ButtonLink from '@/components/buttons/ButtonLink';
import NextImage from '@/components/NextImage';

export default function Auth() {
  return (
    <main className='flex min-h-screen items-center justify-center bg-cream-2'>
      <div className='flex flex-col items-center justify-center gap-5 md:gap-10'>
        <div className='rounded-[49px] bg-pink-4 px-12 pb-7 pt-5'>
          <NextImage
            src='/logo.svg'
            alt='logo'
            width={418}
            height={85}
            className='w-[200px] md:w-[318px]'
          />
        </div>
        <div className='flex flex-col items-center justify-center'>
          <h1 className='font-poppins text-5xl font-bold leading-[75px] text-brown-1'>
            Register as:
          </h1>
          <div className='mt-10 flex flex-col gap-8 md:mt-20 lg:flex-row lg:gap-16'>
            <ButtonLink href='/auth/register/restaurant' className='h-[82px]'>
              Restaurant
            </ButtonLink>
            <ButtonLink href='/auth/register/customer' className='h-[82px]'>
              Customer
            </ButtonLink>
          </div>
        </div>
      </div>
    </main>
  );
}