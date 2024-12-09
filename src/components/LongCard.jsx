import Image from 'next/image'
import React from 'react'

const LongCard = ({services}) => {
  return (
    <>
        {
            services.slice(0,1).map((service, index) => (
                <div key={index} className='w-[340px] md:w-full xl:w-full h-[480px] lg:h-[640px] rounded-[16px] xl:rounded-[40px] bg-grayTen gap-10 flex flex-col md:flex-row justify-between items-center py-[24px] xl:py-[36px] px-[24px] xl:px-[50px]'>
                    <div className='w-full md:w-[314px] xl:w-[514px] gap-[16px] flex flex-col justify-center items-start'>
                        <h1 className='text-blue font-semibold leading-[31.2px] lg:leading-[41.6px] text-[1.5rem] lg:text-[2rem] font-instrument'>{service.name}</h1>
                        <p className='text-blueTwo font-normal text-[.875rem] lg:text-[1rem] leading-[19.6px] lg:leading-[28.8px]'>{service.desc}</p>
                    </div>
                    <div className='relative'>
                        <div className='absolute w-full h-full bg-blue rounded-[8px] lg:rounded-[16px]'></div>
                        <Image src={service.img} alt={service.name} className='relative w-[300px] md:w-[600px] h-[200px] md:h-full lg:h-[480px] rounded-[8px] lg:rounded-[16px] object-cover'></Image>
                    </div>
                </div>
            ))
        }
    </>
  )
}

export default LongCard