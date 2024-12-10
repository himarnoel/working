import Image from 'next/image'
import React from 'react'

import gallary from '../../../../public/assets/career/gallary.svg';

const Gallary = () => {
  return (
    <section className='max-w-[1312px] mx-auto h-[1322px] py-[112px] px-[64px] bg-white gap-[32px] flex justify-center items-center'>
        <Image className='object-cover' src={gallary} alt='Image Gallary'></Image>
    </section>
  )
}

export default Gallary