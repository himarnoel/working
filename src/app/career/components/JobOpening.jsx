import Link from 'next/link'
import React from 'react'

const JobOpening = () => {
  return (
    <section className='pt-[120px] pb-[160px] px-[64px] gap-[64px] flex flex-col justify-center items-center'>
        <h1 className='text-blue font-bold leading-[67.2px] text-[3.5rem] font-instrument'>Job Openings</h1>
        <div className='max-w-[1312px] mx-auto gap-[32px] lg:h-[936px] flex flex-col justify-center items-center'>
            <div className='w-full h-[210px] rounded-[8px] gap-[32px] p-[32px] flex flex-col justify-center items-start bg-white border border-graySixteen'>
                <div className='w-full flex flex-col justify-start items-start gap-[24px]'>
                    <div className='w-full flex flex-col md:flex-row justify-between items-center'>
                        <div className='flex justify-start items-center gap-[16px]'>
                            <h1 className='text-blue font-bold leading-[33.6px] text-[1.5rem] font-instrument'>Job Title</h1>
                            <div className='w-[96px] h-[29px] border border-greenTwo bg-greenTwo/[16%] py-[4px] flex justify-center items-center gap-[10px] rounded-[4px] text-greenTwo text-[.875rem] leading-[21px] font-normal font-instrument'>Department</div>
                        </div>
                        <Link className='gap-[8px] font-instrument flex justify-center items-center h-[24px] w-[112px] font-normal text-base text-greenTwo' href={`/career`}>Apply Now</Link>
                    </div>
                    <p className='text-blueTwo font-normal text-base font-instrument'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. 
                    </p>
                </div>
                <div className='gap-[24px] flex justify-center items-start w-[302px]'>
                    <div className='gap-[12px] flex justify-center items-center'>
                        <p>Location</p>
                    </div>
                    <div className='gap-[12px] flex justify-center items-center'>
                        <p>Contract Type</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default JobOpening