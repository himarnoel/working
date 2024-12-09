import React from 'react'
import team from '../../public/assets/front-end/team.svg';
// import colar from '../../public/assets/front-end/colar.svg';
import Image from 'next/image';

const KeyBenefitsGeneral = ({benefits}) => {
  return (
    <main className='w-full bg-grayThree min-h-screenc py-[80px] lg:py-[160px] px-[24px] lg:px-[74px]'>
        <div className='max-w-[1125px] relative lg:h-[1280px] mx-auto gap-[96px] lg:gap-[10px] flex flex-col md:flex-row justify-start lg:justify-center items-start'>
            <h1 className='flex md:hidden gap-[12px] w-[253px] text-blue font-bold leading-[70.4px] text-[4rem]'>Key Benefits</h1>
            <div className='md:relative md:top-[250px] md:left-0 w-[240px] lg:w-[300px] bg-greenTwo h-[240px] lg:h-[320px] rounded-[16px] flex justify-center items-center lg:mx-7'>
                <Image src={team} alt='Team Icon' className='w-[156px] xl:w-[208px] h-[129px] xl:h-[172px] object-cover'></Image>
            </div>
            <div className='h-[1000px] lg:h-[1280px] bg-grayFive w-[1.6px] relative hidden md:flex justify-center items-center'>
                <div className='absolute h-[280px] top-[250px] w-[1.6px] bg-greenThree'></div>
            </div>
            <div className='w-[328px] sm:w-full md:w-[498px] xl:w-[698px] gap-[96px] flex flex-col justify-start items-start lg:mx-3'>
                <h1 className='hidden md:flex gap-[12px] w-[253px] text-blue font-bold leading-[70.4px] text-[4rem]'>Key Benefits</h1>
                <div className='w-[328px] sm:w-full md:w-[498px] xl:w-[698px] gap-[40px] lg:gap-[120px] flex flex-col justify-start items-center'>
                    {
                        benefits.slice(0,1).map((benefit) => (
                            <div key={benefit.id} className='flex flex-col justify-center items-start gap-[12px] lg:gap-[24px] font-instrument'>  
                                <div className='w-[50.4px] h-[50.4px] bg-greenTwo flex md:hidden justify-center items-center rounded-[5.76px]'>
                                    {/* <Image src={colar} alt='Colar Icon' className='object-cover w-[21.6px] h-[21.6px]'></Image> */}
                                </div>
                                <h1 className='font-instrument font-medium text-blue text-[1.5rem] lg:text-[2rem] leading-[31.2px] lg:leading-[41.6px]'>{benefit.name}</h1>
                                <p className='font-instrument font-normal text-grayThirteen text-[.875rem] lg:text-[1rem] leading-[22.4px] lg:leading-[25.6px]'>{benefit.desc}</p>
                            </div>
                        ))
                    }
                    {
                        benefits.slice(1,).map((b) => (
                            <div key={b.id} className='flex flex-col justify-center items-start gap-[12px] lg:gap-[24px] font-instrument'>
                                <div className='w-[50.4px] h-[50.4px] bg-greenTwo flex md:hidden justify-center items-center rounded-[5.76px]'>
                                    {/* <Image src={colar} alt='Colar Icon' className='object-cover w-[21.6px] h-[21.6px]'></Image> */}
                                </div>
                                <h1 className='font-instrument font-medium text-blue text-[1.5rem] lg:text-[2rem] leading-[31.2px] lg:leading-[41.6px]'>{b.name}</h1>
                                <p className='font-instrument font-normal text-grayThirteen text-[.875rem] lg:text-[1rem] leading-[22.4px] lg:leading-[25.6px]'>{b.desc}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    </main>
  )
}

export default KeyBenefitsGeneral