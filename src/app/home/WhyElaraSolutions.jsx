import Image from 'next/image'
import React from 'react'

import exp from '../../../public/assets/home/why/exp.svg';
import client from '../../../public/assets/home/why/client.svg';
import results from '../../../public/assets/home/why/results.svg';
import colab from '../../../public/assets/home/why/colab.svg';

const WhyElaraSolutions = () => {
  return (
    <section className='bg-white w-full min-h-screen py-[80px] md:py-[120px] px-[46px]'>
        <div className='gap-[56px] flex flex-col justify-center items-center max-w-[1320px] mx-auto'>
            <div className='w-[328px] md:w-full lg:w-[768px] flex flex-col justify-center items-center text-center gap-[12px]'>
                <h2 className='uppercase text-greenTwo text-[.75rem] leading-[12px] font-medium font-instrument'>customers</h2>
                <h1 className='lg:w-[227px] md:w-full xl:w-[768px] text-blue font-normal leading-[39.04px] md:leading-[77.13px] text-[2rem] md:text-[3rem] font-bevan'>Why Choose Elara Solutions?</h1>
                <p className='w-[328px] md:w-[641px] text-blueTwo text-[.875rem] md:text-[1rem] leading-[18.2px] md:leading-[24px] font-normal font-instrument'>
                    Experience excellence in digital craftsmanship with our team of skilled professionals dedicated to delivering exceptional results.
                </p>
            </div>

            <div className='w-full xl:h-[696px] rounded-[16px] md:rounded-[24px] flex flex-col justify-center items-center'>
                <div className='w-full md:h-[348px] flex flex-col md:flex-row justify-center items-center'>
                    <div className='w-[328px] md:w-full lg:w-[660px] h-[320px] md:h-[348px] gap-[24px] lg:gap-[30px] flex flex-col justify-center items-start py-[40px] px-[16px] lg:p-[60px] border border-blueFive bg-blue rounded-tl-[16px] rounded-tr-[16px] md:rounded-tl-[24px] md:rounded-tr-[0px]'>
                        <div className='flex flex-col md:flex-row justify-start items-start md:items-center gap-[14px] w-full'>
                            <div className='bg-blueSix border border-blueFive gap-[10px] p-[20px] rounded-lg w-[70px] h-[70px] flex justify-center items-center'>
                                <Image width={23.06} height={27.34} className='object-cover' src={exp} alt='Expertise'></Image>
                            </div>
                            <h2 className='font-instrument font-semibold leading-[30px] lg:leading-[36px] text-white text-[1.25rem] lg:text-[1.5rem]'>Expertise</h2>
                        </div>
                        <p className='font-instrument font-normal leading-[22.4px] lg:leading-[32px] text-[.875rem] lg:text-[1.25rem] text-neutral-300'>
                            Our team consists of highly skilled professionals who have a deep understanding of the digital landscape. We stay updated with the latest industry trends and best practices to deliver cutting-edge solutions.
                        </p>
                    </div>
                    <div className='w-[328px] md:w-full lg:w-[660px] h-[320px] md:h-[348px] gap-[24px] lg:gap-[30px] flex flex-col justify-center items-start py-[40px] px-[16px] lg:p-[60px] border border-blueFive bg-blue md:rounded-tr-[24px]'>
                        <div className='flex flex-col md:flex-row justify-start items-start md:items-center gap-[14px] w-full'>
                            <div className='bg-blueSix border border-blueFive gap-[10px] p-[20px] rounded-lg w-[70px] h-[70px] flex justify-center items-center'>
                                <Image width={23.06} height={27.34} className='object-cover' src={client} alt='Client-Centric Approach'></Image>
                            </div>
                            <h2 className='font-instrument font-semibold leading-[30px] lg:leading-[36px] text-white text-[1.25rem] lg:text-[1.5rem]'>Client-Centric Approach</h2>
                        </div>
                        <p className='font-instrument font-normal leading-[22.4px] lg:leading-[32px] text-[.875rem] lg:text-[1.25rem] text-neutral-300'>
                            We prioritize our clients and their unique needs. We listen to your ideas, challenges, and goals, and tailor our services to meet your specific requirements. Your success is our success.
                        </p>
                    </div>
                </div>
                <div className='flex flex-col md:flex-row justify-center md:h-[348px] items-center w-full'>
                    <div className='w-[328px] md:w-full lg:w-[660px] h-[320px] md:h-[348px] gap-[24px] lg:gap-[30px] flex flex-col justify-center items-start py-[40px] px-[16px] lg:p-[60px] border border-blueFive bg-blue md:rounded-bl-[24px]'>
                        <div className='flex flex-col md:flex-row justify-start items-start md:items-center gap-[14px] w-full'>
                            <div className='bg-blueSix border border-blueFive gap-[10px] p-[20px] rounded-lg w-[70px] h-[70px] flex justify-center items-center'>
                                <Image width={23.06} height={27.34} className='object-cover' src={results} alt='Result-Driven Solutions'></Image>
                            </div>
                            <h2 className='font-instrument font-semibold leading-[30px] lg:leading-[36px] text-white text-[1.25rem] lg:text-[1.5rem]'>Results-Driven Solutions</h2>
                        </div>
                        <p className='font-instrument font-normal leading-[22.4px] lg:leading-[32px] text-[.875rem] lg:text-[1.25rem] text-neutral-300'>
                            Our primary focus is on delivering results. We combine creativity and technical expertise to create digital products that drive business growth, enhance user experiences, and provide a competitive advantage.    
                        </p>
                    </div>
                    <div className='w-[328px] md:w-full lg:w-[660px] h-[320px] md:h-[348px] gap-[24px] lg:gap-[30px] flex flex-col justify-center items-start py-[40px] px-[16px] lg:p-[60px] border border-blueFive bg-blue rounded-bl-[16px] rounded-br-[16px] md:rounded-br-[24px] md:rounded-bl-[0px]'>
                        <div className='flex flex-col md:flex-row justify-start items-start md:items-center gap-[14px] w-full'>
                            <div className='bg-blueSix border border-blueFive gap-[10px] p-[20px] rounded-lg w-[70px] h-[70px] flex justify-center items-center'>   
                                <Image width={23.06} height={27.34} className='object-cover' src={colab} alt='Collaborative Partnership'></Image>
                            </div>
                            <h2 className='font-instrument font-semibold leading-[30px] lg:leading-[36px] text-white text-[1.25rem] lg:text-[1.5rem]'>Collaborative Partnership</h2>
                        </div>
                        <p className='font-instrument font-normal leading-[22.4px] lg:leading-[32px] text-[.875rem] lg:text-[1.25rem] text-neutral-300'>
                            We value long-term relationships with our clients. We see ourselves as your digital partner, providing ongoing support, maintenance, and updates to ensure your digital products continue to thrive.    
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default WhyElaraSolutions