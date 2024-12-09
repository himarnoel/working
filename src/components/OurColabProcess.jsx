import React from 'react'

const OurColabProcess = ({proc}) => {
  return (
    <section className='py-[120px] lg:py-[160px] xl:px-[54px] gap-[48px] xl:gap-[80px] flex flex-col justify-center items-center w-full bg-grayThree'>
        <div className='w-full xl:max-w-[1320px] 2xl:w-full mx-auto py-[120px] px-[76px] xl:rounded-[40px] bg-blue h-full xl:min-h-[2248px] gap-[40px] lg:gap-[64px] flex flex-col justify-start items-center'>
          <div className='w-[328px] lg:w-[641px] flex flex-col justify-center items-center text-center gap-[12px]'>
            <h1 className={`w-[287px] lg:w-[673px] gap-[16px] flex justify-center items-center text-center text-white font-bold leading-[35px] lg:leading-[70px] text-[1.75rem] lg:text-[3.5rem] font-instrument`}>Our structured and collaborative Process</h1>
            <p className='w-[328px] lg:w-full text-graySeventeen font-normal font-instrument leading-[21px] lg:leading-[24px] text-[.875rem] lg:text-[1rem]'>
              Our extensive experience has taught us that building a robust backend requires time and collaborative effort from the entire project team. Developing a server-side solution involves more than just writing code; it encompasses several essential stages:
            </p>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 justify-items-center place-items-center gap-[40px] lg:gap-y-[40px] lg:gap-x-[24px] max-w-[1232px] mx-auto'>
            {
                proc.map((process) => (
                  <div key={process.id} className='w-full xl:w-[508px] lg:h-[400px] rounded-[16px] py-[40px] px-[16px] lg:px-[36px] flex flex-col justify-between items-start bg-graySix'>
                    <h1 className='text-[1.5rem] lg:text-[3rem] text-greenTwo leading-[36px] lg:leading-[72px] font-bold'>{process.n}</h1>
                    <div className='w-full gap-[30px] lg:gap-[16px] flex flex-col justify-center items-start'>
                      <h2 className='gap-[14px] text-blue font-semibold leading-[30px] lg:leading-[36px] text-[1.25rem] lg:text-[1.5rem] font-instrument'>{process.name}</h2>
                      <p className='font-normal text-[.875rem] lg:text-[1rem] leading-[22.4px] lg:leading-[25.6px]'>{process.desc}</p>
                    </div>
                  </div>
                ))
              }
          </div>
            
        </div>
    </section>
  )
}

export default OurColabProcess