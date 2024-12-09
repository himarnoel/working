import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import img from '../../public/partner.svg';

const PartnerWithElara = () => {
  return (
    <section className='py-[40px] lg:py-[128px] gap-[10px] lg:gap-[80px] w-full min-h-screen bg-grayThree flex justify-center items-center px-[74px]'>
        <div className='max-w-[1280px] xl:h-[688px] mx-auto py-[40px] lg:py-[10px] px-[24px] lg:px-[80px] rounded-[16px] lg:rounded-[24px] bg-blue flex flex-col lg:flex-row justify-between items-start lg:items-center gap-[64px] lg:gap-20'>
            <div className='flex flex-col justify-center items-start gap-[16px] lg:gap-[32px] lg:w-[448px]'>
                <h1 className='text-gray font-normal leading-[29.76px] lg:leading-[49.6px] text-[1.5rem] lg:text-[2.5rem] font-bevan w-[204px]'>Partner with Elara Solutions</h1>
                <p className='leading-[22.4px] lg:leading-[25.6px] font-normal text-[.875rem] lg:text-[1rem] text-grayFifteen font-instrument'>Elevate your applications with our expert backend development services at Elara Solutions. Our dedicated team is committed to delivering innovative, reliable, and scalable backend solutions that drive your business forward.</p>
                <Link className='border border-white bg-graySixteen w-[158px] lg:w-[192px] h-[46px] rounded-lg py-[12px] lg:py-[13px] flex justify-center items-center gap-[8px] lg:gap-[10px] text-blue text-[.875rem] lg:text-[1rem] leading-[18.2px] lg:leading-[19.52px] font-normal font-instrument' href={`/contact-us`}>Contact us</Link>
            </div>
            <Image width={528} height={496} className='object-cover w-[264px] md:w-[528px] h-[248px] md:h-[496px] flex justify-center items-center' src={img} alt='Partner With Elara'></Image>
        </div>
    </section>
  )
}

export default PartnerWithElara