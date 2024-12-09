import React from 'react'

const KeyBenefitsGeneral = ({benefits}) => {
  return (
    <main className='w-full bg-grayThree min-h-screenc py-[160px] px-[74px]'>
        <div className='max-w-[1125px] relative lg:h-[1280px] mx-auto gap-[10px] flex flex-col lg:flex-row justify-center items-start'>
            <div className='relative top-[250px] left-0 w-[300px] bg-greenTwo h-[320px] rounded-[16px] flex justify-center items-center mx-7'></div>
            <div className='h-[1280px] bg-grayFive w-[1.6px] relative flex justify-center items-center'>
                <div className='absolute h-[280px] top-[250px] w-[1.6px] bg-greenThree'></div>
            </div>
            <div className='w-[698px] gap-[96px] flex flex-col justify-start items-start mx-3'>
                <h1 className='gap-[12px] w-[253px] text-blue font-bold leading-[70.4px] text-[4rem]'>Key Benefits</h1>
                <div className='w-[698px] gap-[120px] flex flex-col justify-start items-center'>
                    {
                        benefits.slice(0,1).map((benefit) => (
                            <div key={benefit.id} className='flex flex-col justify-center items-start gap-[24px] font-instrument'>
                                <h1 className='font-medium text-blue text-[2rem] leading-[41.6px]'>{benefit.name}</h1>
                                <p className='font-normal text-grayThirteen text-[1rem] leading-[25.6px]'>{benefit.desc}</p>
                            </div>
                        ))
                    }
                   {
                    benefits.slice(1,).map((b) => (
                        <div key={b.id} className='flex flex-col justify-center items-start gap-[24px] font-instrument'>
                            <h1 className='font-medium text-grayTwelve text-[2rem] leading-[41.6px]'>{b.name}</h1>
                            <p className='font-normal text-grayTwelve text-[1rem] leading-[25.6px]'>{b.desc}</p>
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