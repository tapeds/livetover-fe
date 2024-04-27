import React from 'react';

export function banner() {
  return (
    <div className='m-0 min-h-24 bg-brown-1 p-0'>
      <div className='flex flex-row  items-center justify-between gap-8 p-10 sm:gap-16 '>
        <h2 className='font-lemonMilk text-base font-medium'>SUSTAINABLE</h2>
        <h2 className='font-lemonMilk text-base font-medium'>
          ZERO FOOD WASTE
        </h2>
        <h2 className='font-lemonMilk text-base font-medium'>NO LEFTOVERS</h2>

        <h2 className='hidden font-lemonMilk text-base  font-medium lg:block'>
          SUSTAINABLE
        </h2>
        <h2 className='hidden font-lemonMilk text-base  font-medium lg:block'>
          ZERO FOOD WASTE
        </h2>
        <h2 className='hidden font-lemonMilk text-base  font-medium lg:block'>
          NO LEFTOVERS
        </h2>

        <h2 className='hidden font-lemonMilk text-base  font-medium lg:block'>
          SUSTAINABLE
        </h2>
      </div>
    </div>
  );
}

export default banner;
