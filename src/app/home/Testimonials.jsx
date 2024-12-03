import React from 'react'

const Testimonials = () => {
  return (
    <section className='bg-white gap-[96px] py-[120px] px-[46px] flex flex-col justify-center items-center'>
        <div className='w-[328px] md:w-[868px] flex flex-col justify-center items-center text-center gap-[12px] font-instrument'>
            <h2 className='uppercase text-greenTwo text-[.75rem] leading-[12px] font-medium font-instrument'>customers</h2>
            <h1 className='w-[227px] md:w-full text-blue font-normal leading-[39.04px] md:leading-[77.13px] text-[2rem] md:text-[3rem] font-bevan'>Don’t just take our word for it</h1>
            <p className='w-[328px] md:w-[641px] text-blueTwo text-[.875rem] md:text-[1rem] leading-[18.2px] md:leading-[24px] font-normal font-instrument'>
                Hear Directly  from our Customers
            </p>
        </div>

        <div className='w-[1296px] mx-auto gap-[8px] grid grid-cols-1 md:grid-cols-2 lg:flex lg:justify-between lg:items-center justify-items-center min-h-[480px]'>
            <div className='bg-gray w-[360px] h-[480px] rounded-[12px] flex flex-col justify-between items-start px-[20px] py-[45px]'>
                <div className='w-full flex flex-col justify-center items-start gap-[20px]'>
                    <h1 className='text-greenTwo font-bevan font-normal text-[1.125rem] leading-[27px] w-[264px]'>ProTech Solutions turned to SquareUp to automate our workflow</h1>
                    <p className='font-normal leading-[22.5px] text-[0.938rem] text-blueTwo font-instrument'>They delivered an exceptional custom software solution. The system has significantly increased our productivity and reduced manual errors. Elara solutions expertise and professionalism have made them a trusted technology partner.</p>
                </div>
                <div className='flex justify-center items-start gap-[12px] w-[266px] p-[14px]'>
                    {/* <Image></Image> */}
                    <div className='flex flex-col justify-center items-start font-instrument'>
                        <h1 className='text-blue font-instrument text-[1rem] leading-[24px] font-medium'>Laura Adams</h1>
                        <p className='text-blueTwo text-[.875rem] font-normal leading-[21px]'>COO of ProTech Solutions.</p>
                    </div>
                </div>
            </div>
            <div className='bg-gray w-[560px] h-[480px] rounded-[12px] flex flex-col justify-between items-start px-[20px] py-[45px]'>
                <div className='w-full flex flex-col justify-center items-start gap-[20px]'>
                    <h1 className='text-greenTwo font-bevan font-normal text-[1.125rem] leading-[27px] w-[415px]'>Our agency banking solutions have empowered financial institutions to expand their service offerings and improve customer access.</h1>
                    <p className='font-normal leading-[22.5px] text-[0.938rem] text-blueTwo font-instrument w-[480px]'>Through innovative technology and strategic partnerships, we have helped our clients achieve remarkable results in financial inclusion and customer engagement.
                    </p>
                </div>
                <div className='flex justify-center items-start gap-[12px] w-[266px] p-[14px]'>
                    {/* <Image></Image> */}
                    <div className='flex flex-col justify-center items-start font-instrument'>
                        <h1 className='text-blue font-instrument text-[1rem] leading-[24px] font-medium'>John Smith</h1>
                        <p className='text-blueTwo text-[.875rem] font-normal leading-[21px]'>CEO of Chic Boutique</p>
                    </div>
                </div>
            </div>
            <div className='bg-gray w-[360px] h-[480px] rounded-[12px] flex flex-col justify-between items-start px-[20px] py-[45px]'>
                <div className='w-full flex flex-col justify-center items-start gap-[20px]'>
                    <h1 className='text-greenTwo font-bevan font-normal text-[1.125rem] leading-[27px] w-[264px]'>We wanted a mobile app that tracked fitness activities and provided personalized workout plans.</h1>
                    <p className='font-normal leading-[22.5px] text-[0.938rem] text-blueTwo font-instrument'>Elara solutions team developed an intuitive and feature-rich app that has helped our users stay motivated and achieve their fitness goals. We highly recommend Elara solutions for any health and fitness app development needs.</p>
                </div>
                <div className='flex justify-center items-start gap-[12px] w-[266px] p-[14px]'>
                    {/* <Image></Image> */}
                    <div className='flex flex-col justify-center items-start font-instrument'>
                        <h1 className='text-blue font-instrument text-[1rem] leading-[24px] font-medium'>Emily Turner</h1>
                        <p className='text-blueTwo text-[.875rem] font-normal leading-[21px]'>CEO of FitLife Tracker</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Testimonials