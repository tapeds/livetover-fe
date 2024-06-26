import NextImage from '@/components/NextImage';
import UnstyledLink from '@/components/UnstyledLink';

export default function Footer() {
  return (
    <footer className='z-[100] w-full bg-brown-1'>
      <div className='flex flex-col divide-y-2 divide-white/20 px-10 py-9 pb-14 md:px-20 lg:px-44'>
        <div className='mb-20 flex flex-col justify-between max-md:gap-10 md:mb-20 md:flex-row'>
          <NextImage
            src='/logowhite.svg'
            alt='logo'
            width={456}
            height={92}
            className='w-[300px] max-[365px]:w-[200px] md:w-[456px]'
          />
          <ul className='flex flex-col gap-4 font-lemonMilk text-base text-typo-white *:leading-6 md:items-end'>
            <li className='font-bold'>QUICK LINKS</li>
            <UnstyledLink href='/'>
              <li>HOME</li>
            </UnstyledLink>
            <UnstyledLink href='/login'>
              <li>LOGIN</li>
            </UnstyledLink>
            <UnstyledLink href='/register'>
              <li>REGISTER</li>
            </UnstyledLink>
          </ul>
        </div>
        <div className='flex items-center justify-center pt-10'>
          <p className='font-lemonMilk text-sm text-typo-white'>© Livetover</p>
        </div>
      </div>
    </footer>
  );
}
