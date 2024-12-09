 "use client"
import React from 'react'
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import "@splidejs/react-splide/css";
import Image from 'next/image';

import cev from '../../../public/assets/home/companies/ceviant.svg';
import sig from '../../../public/assets/home/companies/sig-bank.svg';
import acc from '../../../public/assets/home/companies/access.svg';
import spa from '../../../public/assets/home/companies/sparkle.svg';

const CompanySlider = () => {
  return (
    <div className='w-full bg-graySeven h-[130px] py-[20px] flex justify-between items-center gap-[20px]'>
        <Splide
          extensions={{ AutoScroll }}
          options={{
            type: "loop",
            gap: "20px",

            pauseOnHover: false,
            pauseOnFocus: false,
            perPage: 4.5,
            arrows: false,
            pagination: false,
            autoScroll: { pauseOnHover: false, speed: 1 },
          }}
          className="flex items-center justify-center w-full h-[90px] gap-20"
          aria-label="Company Slider"
        >
            <SplideSlide className="w-[286.39px] h-[90px] flex items-center justify-center">
                <Image width={197.92} height={50} className='flex justify-center items-center object-cover' src={cev} alt="Ceviant"></Image>
            </SplideSlide>
            <SplideSlide className="w-[286.39px] h-[90px] flex items-center justify-center">
                <Image width={197.92} height={50} className='flex justify-center items-center object-cover' src={sig} alt="Signature Bank"></Image>
            </SplideSlide>
            <SplideSlide className="w-[286.39px] h-[90px] flex items-center justify-center">
                <Image width={197.92} height={50} className='flex justify-center items-center object-cover' src={acc} alt="Access Bank"></Image>
            </SplideSlide>
            <SplideSlide className="w-[286.39px] h-[90px] flex items-center justify-center">
                <Image width={197.92} height={50} className='flex justify-center items-center object-cover' src={spa} alt="Sparkle"></Image>
            </SplideSlide>
        </Splide>
    </div>
  )
}

export default CompanySlider