import Image from 'next/image'
import React from 'react'

const WhyGeneral = ({header, img, whyContent}) => {
  return (
    <section className='bg-white py-[80px] lg:py-[120px] px-[24px] lg:px-[100px]'>
        <div className='max-w-[1280px] mx-auto flex flex-col justify-center items-center gap-[40px] lg:gap-[80px]'>
            <h1 className='text-blue font-semibold lg:font-bold leading-[31.2px] lg:leading-[48px] text-[1.5rem] lg:text-[2.5rem] w-[328px] lg:w-[545px] gap-[12px] flex justify-center items-center text-center font-instrument'>{header}</h1>
            <div className='w-full flex flex-col md:flex-row justify-between items-center gap-[40px] lg:gap-[24px]'>
                <Image width={600} height={418} src={img.src} alt='Engineer' className='w-[330px] md:w-[50%] xl:w-[600px] h-[418px] lg:h-[760px] object-cover rounded-[24px] lg:rounded-[13.2px]'></Image>
                <div className='xl:h-[760px] w-[328px] md:w-[50%] xl:w-[640px] flex flex-col justify-between items-center gap-[10px]'>
                    {
                        whyContent.map((wc, index) => (
                            <div key={index} className='bg-gray w-full min-h-[240px] lg:h-[235px] rounded-[16px] py-[24px] lg:py-[50px] px-[16px] lg:px-[24px] flex flex-col justify-start lg:justify-between items-start gap-[10px] lg:gap-[24px]'>
                                <h1 className='font-instrument text-blue font-semibold text-[1.25rem] xl:text-[1.75rem] leading-[26px] lg:leading-[34.16px]'>
                                    {wc.id}. {wc.heading}
                                </h1>
                                <p className='text-blueEight font-normal text-[.875rem] xl:text-[1rem] leading-[19.6px] lg:leading-[25.6px] font-instrument'>{wc.desc}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    </section>
  )
}

export default WhyGeneral