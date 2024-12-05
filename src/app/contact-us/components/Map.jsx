import Image from 'next/image'
import React from 'react'
import map from '../../../../public/assets/contact-us/map.svg';

const Map = () => {
  return (
    <section className='bg-white w-full lg:h-[744px] py-[80px] px-[120px] flex justify-center items-center'>
        <Image width={1216} height={488} className='object-cover' src={map} alt='Elara Solutions Location'></Image>
    </section>
  )
}

export default Map