import Image from 'next/image'
import React from 'react'

const OurServices = () => {
  return (
    <section className='bg-white py-[120px] px-[24px] xl:px-[100px]'>
        <div className='flex flex-col justify-center items-center gap-[96px] max-w-[1296px] mx-auto'>
            <h1 className='w-[755px] text-center text-blue font-bold text-[3.5rem] leading-[70px]'>Our Frontend Development Services</h1>
            <div className='w-full flex flex-col justify-center items-center gap-[56px]'>
                <div></div>
                <div className='grid grid-cols-1 md:grid-cols-2 justify-items-center place-items-center gap-y-[56px] gap-x-[16px]'>
                    <div className='w-full xl:w-[640px] bg-grayTen rounded-[24px] h-[660px] p-[16px] flex flex-col justify-center items-start gap-[16px]'>
                        <h1>Websites and Web Portals</h1>
                        <p></p>
                        <Image></Image>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default OurServices