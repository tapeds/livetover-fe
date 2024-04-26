import NextImage from '@/components/NextImage';

export default function Card() {
  return (
    <div className='w-[290px] rounded-lg bg-pink-4'>
      <NextImage src='/cardbg.png' alt='cardbg' width={290} height={163} />
      <div className='flex flex-col gap-2 px-4 pb-5 pt-6 font-poppins text-brown-1'>
        <h6 className='text-2xl font-semibold'>Nama Menu</h6>
        <p className='text-sx'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sed risus
          ac turpis viverra rutrum.
        </p>
        <button className='w-full rounded-lg bg-brown-1 py-2 text-white'>
          Pesan
        </button>
      </div>
    </div>
  );
}
