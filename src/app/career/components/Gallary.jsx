import Image from 'next/image'
import React from 'react'

import gallary from '../../../../public/assets/career/gallary.svg';
import one from '../../../../public/assets/career/res-gallary/one.svg';
import two from '../../../../public/assets/career/res-gallary/two.svg';
import three from '../../../../public/assets/career/res-gallary/three.svg';
import four from '../../../../public/assets/career/res-gallary/four.svg';

const Gallary = () => {
  return (
    <section className='max-w-[1312px] mx-auto h-[1322px] py-[112px] px-[64px] bg-white gap-[32px] flex flex-col justify-center items-center'>
        <Image className='hidden md:flex object-cover' src={gallary} alt='Image Gallary'></Image>
        <div className='relative oveflow-hidden flex md:hidden'>
          <Image className='flex md:hidden object-cover rounded-[8px] relative z-10' width={326.4} height={326.4} src={one} alt='Gallary Image'></Image>
          <div className='flex md:hidden absolute bg-grayThree rounded-[8px] w-full h-full z-[3px]'></div>
        </div>
        <div className='relative oveflow-hidden flex md:hidden'>
          <Image className='flex md:hidden object-cover rounded-[8px] relative z-10' width={326.4} height={326.4} src={two} alt='Gallary Image'></Image>
          <div className='flex md:hidden absolute bg-grayThree rounded-[8px] w-full h-full z-[3px]'></div>
        </div>
        <div className='relative oveflow-hidden flex md:hidden'>
          <Image className='flex md:hidden object-cover rounded-[8px] relative z-10' width={326.4} height={326.4} src={three} alt='Gallary Image'></Image>
          <div className='flex md:hidden absolute bg-grayThree rounded-[8px] w-full h-full z-[3px]'></div>
        </div>
        <div className='relative oveflow-hidden flex md:hidden'>
          <Image className='flex md:hidden object-cover rounded-[8px] relative z-10' width={326.4} height={326.4} src={four} alt='Gallary Image'></Image>
          <div className='flex md:hidden absolute bg-grayThree rounded-[8px] w-full h-full z-[3px]'></div>
        </div>
    </section>
  )
}

export default Gallary