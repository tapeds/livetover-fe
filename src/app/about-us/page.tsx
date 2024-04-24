import NextImage from '@/components/NextImage';
import Layout from '@/layouts/Layout';

export default function AboutUs() {
  return (
    <Layout withFooter>
      <main className='relative flex min-h-screen items-center justify-center overflow-hidden bg-green-1'>
        <div className='flex flex-col items-center justify-end gap-10 px-10 py-20 md:gap-6 md:px-24'>
          <h1 className='text-center font-poppins text-4xl font-bold md:px-24 md:text-[80px] md:leading-[120px]'>
            Tentang Kami
          </h1>
          <div className='max-w-[1030px] rounded-[18px] bg-cream-2 px-5 pb-10 pt-8 md:px-28 md:pb-16 md:pt-12'>
            <NextImage
              src='/logo.svg'
              alt='logo'
              width={185}
              height={37}
              className='float-left mr-5'
            />
            <p className='mt-2 font-poppins text-base font-medium text-brown-1 md:text-2xl'>
              merupakan aplikasi yang menghubungkan restoran yang menghasilkan
              surplus makanan sehingga menghasilkan makanan sisa lalu
              menghubungkan restoran-restoran ini dengan mereka yang
              membutuhkan. Ide ini berawal dari sekelompok mahasiswa yang
              prihatin dengan isu pemborosan makanan. Melalui observasi, mereka
              menyadari makanan layak konsumsi sering terbuang dikarenakan
              dengan sistem restoran atau tempat makan itu sendiri. Dengan
              memanfaatkan teknologi, dapat diciptakan platform digital untuk
              menjual makanan sisa dengan mudah, aman, dan murah.
            </p>
          </div>
        </div>
        <NextImage
          src='/about-us/smile.png'
          alt='smile'
          width={145}
          height={145}
          className='absolute bottom-[3%] left-[5%] w-[80px] md:bottom-[10%] md:w-[145px] min-[1400px]:left-[10%]'
        />
        <NextImage
          src='/about-us/portal.png'
          alt='portal'
          width={138}
          height={138}
          className='absolute left-[5%] top-[5%] w-[80px] max-[420px]:top-2 sm:left-[10%] sm:top-[10%] md:w-[138px] min-[1400px]:left-[20%]'
        />
        <NextImage
          src='/about-us/portal2.png'
          alt='portal'
          width={138}
          height={138}
          className='absolute right-[5%] top-[5%] w-[80px] max-[420px]:top-2 sm:right-[10%] sm:top-[10%] md:w-[138px] min-[1400px]:right-[20%]'
        />
      </main>
    </Layout>
  );
}
