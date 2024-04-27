'use client';

import React, { useRef } from 'react';
import Navbar from '@/components/Navbar';
import NextImage from '@/components/NextImage';
import Footer from '@/layouts/Footer';
import Button from '@/components/buttons/Button';
import Card from '@/app/landing/Card';
import Banner from '@/components/Banner';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa6';

import 'swiper/css';
import 'swiper/css/navigation';

function Page() {
  const swiperRef = useRef();

  return (
    <>
      <Navbar />
      <main>
        <section className='flex min-h-screen items-center justify-center bg-cream-2'>
          <div className='m-0 min-h-24 bg-brown-1 p-0'></div>

          <div className='flex flex-col'>
            <div className='flex flex-row'>
              <NextImage
                src='/triangle.svg'
                alt='triangle'
                width={1437}
                height={596}
                className='absolute hidden  max-w-full lg:bottom-0 lg:right-0 lg:top-56 lg:m-0 lg:block lg:p-0'
              />
              <div className=' left-20 top-72 mr-1 flex flex-row items-center justify-center md:absolute'>
                <div>
                  <div className='flex items-center justify-center gap-2'>
                    <div className='flex items-center justify-center gap-2'>
                      <NextImage
                        src='/line.png'
                        alt='line'
                        width={140}
                        height={21}
                        className='max-w-full '
                      />

                      <h3 className='font-lemonMilk text-sm font-medium text-brown-1 sm:text-lg'>
                        with
                      </h3>
                      <NextImage
                        src='/logo.svg'
                        alt='logo'
                        width={103}
                        height={20}
                        className='max-w-full'
                      />
                      <h3 className='font-lemonMilk text-sm font-medium text-brown-1 sm:text-lg'>
                        there will be
                      </h3>
                    </div>
                  </div>

                  <h1 className='font-poppins text-6xl font-bold text-brown-1 sm:text-7xl'>
                    No Food Left
                  </h1>

                  <div className='flex items-center justify-center rounded-full bg-brown-1'>
                    <h1 className='flex items-center justify-center font-poppins text-6xl font-bold text-orange-1 sm:text-7xl'>
                      Behind!
                    </h1>
                  </div>
                </div>

                <div className=' ml-7 hidden flex-row gap-7 sm:block'>
                  <NextImage
                    src='/emoji.png'
                    alt='emoji'
                    width={103}
                    height={20}
                    className='mt-9 max-w-full'
                  />
                </div>
              </div>

              <div className='ml-7 hidden flex-row gap-7 lg:block'>
                <NextImage
                  src='/old.png'
                  alt='thumbsup'
                  width={800}
                  height={600}
                  className='absolute top-12 z-0 max-w-full'
                />
              </div>
            </div>
          </div>
        </section>
        <section>
          <Banner />
        </section>
        <section className='flex min-h-screen w-full items-center justify-center bg-cream-2'>
          <div className='flex w-full flex-col items-center justify-center gap-10 px-20'>
            <h2 className='font-poppins text-7xl font-bold text-[#4E372B]'>
              Today&apos;s Offers
            </h2>
            <div className='w-full px-20'>
              <Swiper
                onSwiper={(swiper) => {
                  // @ts-expect-error swiperRef is not null
                  swiperRef.current = swiper;
                }}
                slidesPerView={4}
                modules={[Navigation]}
                loop
              >
                <SwiperSlide>
                  <Card />
                </SwiperSlide>
                <SwiperSlide>
                  <Card />
                </SwiperSlide>
                <SwiperSlide>
                  <Card />
                </SwiperSlide>
                <SwiperSlide>
                  <Card />
                </SwiperSlide>
                <SwiperSlide>
                  <Card />
                </SwiperSlide>
                <SwiperSlide>
                  <Card />
                </SwiperSlide>
                <div className='flex items-center justify-between'>
                  <div
                    className='rounded-full border-[4px] border-brown-1 p-2 text-xl text-brown-1'
                    //@ts-expect-error swiperRef is not null
                    onClick={() => swiperRef.current.slidePrev()}
                  >
                    <FaArrowLeft />
                  </div>
                  <div
                    className='rounded-full border-[4px] border-brown-1 p-2 text-xl text-brown-1'
                    //@ts-expect-error swiperRef is not null
                    onClick={() => swiperRef.current.slideNext()}
                  >
                    <FaArrowRight />
                  </div>
                </div>
              </Swiper>
            </div>
            <Button className='w-full'>Search More Options</Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Page;
