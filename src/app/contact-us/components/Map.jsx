import Image from 'next/image'
import React from 'react'
import map from '../../../../public/assets/contact-us/map.svg';
import resMap from '../../../../public/assets/contact-us/map-responsive.svg';

const Map = () => {
  return (
    <section className='bg-white w-full lg:h-[744px] py-[80px] px-[120px] flex flex-col justify-center items-center gap-10'>
        <Image width={1216} height={488} className='hidden md:flex object-cover' src={map} alt='Elara Solutions Location'></Image>
        <Image width={375} height={146.4} className='flex md:hidden object-cover' src={resMap} alt='Elara Solutions Location'></Image>
        <div className='flex flex-col md:hidden justify-center items-center gap-[8px] w-[218px]'>
            <div className='w-full flex flex-col justify-center items-center text-center gap-[8px] py-[12px] px-[16px] bg-white border border-gray rounded-lg h-[92px]'>
                <h2 className='text-blueSeven font-semibold text-[.875rem] leading-[19.6px]'>Head - Office</h2>
                <p className='text-blue font-normal text-[.75rem] leading-[18px]'>Elara Solutions GmbH</p>
                <p className='text-blueThree text-[.75rem] font-normal leading-[14.4px]'>Zeller Str. 3c 97082 Würzburgkki </p>
            </div>
            <div className='w-full flex flex-col justify-center items-center text-center gap-[8px] py-[12px] px-[16px] bg-white border border-gray rounded-lg h-[92px]'>
            <h2 className='text-blueSeven font-semibold text-[.875rem] leading-[19.6px]'>Africa - Subsidiary</h2>
            <p className='text-blue font-normal text-[.75rem] leading-[18px]'>Elara Technical Services Ltd No. 1b Jide Sawyerr Drive Lekki Phase 1, Lagos, Nigeria</p>
            </div>
        </div>
    </section>
  )
}

export default Map