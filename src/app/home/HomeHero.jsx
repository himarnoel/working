import React from 'react';

const HomeHero = () => {
  return (
    <section className="w-full min-h-screen lg:h-[980px] relative flex justify-center items-start font-instrument">
        <video 
            src="/assets/home/hero.mp4" 
            autoPlay 
            loop 
            muted 
            className="absolute top-0 left-0 w-screen h-full object-cover z-[5px]" 
        />

        <div className='gap-[20px] max-w-[1079px] mx-auto px-[24px] md:px-[44px] relative z-10 mt-[170px] lg:mt-[190px] flex flex-col justify-center items-center'>
            <h1 className='w-[328px] md:w-full lg:w-[991px] flex justify-center items-center text-center gap-[24px] font-bold text-[2.25rem] md:text-[3.5rem] leading-[43.2px] md:leading-[67.2px] text-white'>
                Building Digital Ecosystems: Empowering Global Growth and Innovation
            </h1>
            <p className='w-[328px] md:w-full lg:w-[893px] flex justify-center items-center text-center text-grayThree text-[.875rem] md:text-[1.25rem] font-normal leading-[19.6px] md:leading-[35px] font-manrope'>
                Your partner for cutting-edge IT solutions, tailored to drive transformation and profitability. From IT infrastructure to digital transformation, we help you stay ahead of the curve.
            </p>
            <button className='bg-white py-[17px] md:py-[21px] flex justify-center items-center gap-[10px] w-[238px] h-[56px] rounded-full text-blue text-[.875rem] font-normal leading-[14px]'>Get in Touch</button>
            <p className='text-[1rem] leading-[35px] font-normal text-graySix font-dmSans'>Trusted by 100+ institutions worldwide</p>
        </div>
    </section>
  );
};

export default HomeHero;
