'use client';

import React from 'react';
import Link from 'next/link';
import clsxm from '../lib/clsxm';
import { useState } from 'react';
import NextImage from './NextImage';
import { CgMenu, CgClose, CgProfile } from 'react-icons/cg';

export function Navbar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleShowNav = () => {
    setIsOpen(!isOpen);
  };

  const closeNav = () => {
    setIsOpen(false);
  };

  return (
    <>
      <header className='sticky top-0 z-[100] w-full bg-cream-2 text-brown-1'>
        <div className='layout flex h-16 flex-row items-center justify-between px-2 md:h-20 lg:px-14'>
          <button>
            <div className='align-center flex flex-row items-center justify-center gap-3'>
              <CgProfile className='text-5xl text-brown-1' />
              <h1 className='hidden justify-center font-lemonMilk text-[18px] font-medium lg:block'>
                {' '}
                Your Name
              </h1>
            </div>
          </button>

          <Link href='/' className='flex flex-row items-center gap-2 md:gap-4'>
            <NextImage
              src='/logo.svg'
              alt='logo'
              width={186}
              height={38}
              className='max-w-full'
            />
          </Link>

          {/* Navbar Desktop */}
          <nav className='hidden lg:block'>
            <ul className='flex flex-row items-center justify-between gap-6 text-base '>
              <li>
                <Link href=''>
                  <h1 className='font-lemonMilk text-[18px] font-medium '>
                    Tentang Kami
                  </h1>
                </Link>
              </li>

              <li>
                <Link href=''>
                  <h1 className='font-lemonMilk text-[18px] font-medium'>
                    Today&#x27;s Offers
                  </h1>
                </Link>
              </li>

              <li>
                <Link href=''>
                  <h1 className='font-lemonMilk text-[18px] font-medium'>
                    Home
                  </h1>
                </Link>
              </li>
            </ul>
          </nav>

          {!isOpen && (
            <button className='right-3 block lg:hidden' onClick={toggleShowNav}>
              <CgMenu className='text-4xl text-brown-1' />
            </button>
          )}
        </div>

        {/* Mobile Nav */}
        <div
          className={clsxm(
            'fixed left-0 top-0 flex flex-col items-center gap-12',
            'h-screen w-full bg-cream-2 px-4 pb-24 pt-10 lg:hidden',
            'transition duration-300 ease-in-out',
            isOpen ? 'translate-x-0' : '-translate-x-full',
          )}
        >
          <Link href='/' className='flex flex-row items-center gap-2 md:gap-4'>
            <NextImage
              src='/logo.svg'
              alt='logo'
              width={186}
              height={38}
              className='max-w-full'
            />
          </Link>

          <nav className='w-full flex-1'>
            <ul className='space-y-4'>
              <div className='w-full space-y-4 p-2.5 text-base'>
                <li>
                  <Link href='' onClick={closeNav}>
                    <h1 className='font-lemonMilk text-[18px] font-medium '>
                      Tentang Kami
                    </h1>
                  </Link>
                </li>

                <li>
                  <Link href='' onClick={closeNav}>
                    <h1 className='font-lemonMilk text-[18px] font-medium'>
                      Today&#x27;s Offers
                    </h1>
                  </Link>
                </li>

                <li>
                  <Link href='' onClick={closeNav}>
                    <h1 className='font-lemonMilk text-[18px] font-medium'>
                      Home
                    </h1>
                  </Link>
                </li>
              </div>
            </ul>
          </nav>

          <button
            className='rounded-full border border-brown-1 bg-brown-1 p-2 hover:bg-brown-2'
            onClick={toggleShowNav}
          >
            <CgClose className='text-5xl text-cream-2' />
          </button>
        </div>
      </header>
    </>
  );
}

export default Navbar;
