import React from 'react'
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import "@splidejs/react-splide/css";
import Image from 'next/image';
import { technologies } from '@/raw-data/data';
import Link from 'next/link';
import { BsArrowUpRight } from 'react-icons/bs';


const MoreTechnologies = () => {
  return (
    <section className='overflow-x-hidden w-full xl:h-[720px] bg-grayFive flex flex-col justify-center items-start gap-[50px] py-[100px] lg:py-0'>
        <h2 className='gap-[16px] text-left font-bold leading-[52.8px] text-[3rem] text-blue w-full flex justify-start items-start mx-[74px]'>More Technologies</h2>
        <div className='w-full hidden lg:flex justify-center items-center'>
            <Splide
            // extensions={{ AutoScroll }}
            options={{
                type: "loop",
                gap: "16px",

                pauseOnHover: false,
                pauseOnFocus: false,
                perPage: 5.5,
                arrows: false,
                pagination: false,
                autoScroll: { pauseOnHover: false, speed: 0 },
            }}
            className="flex items-center justify-center w-full h-[345px] gap-[16px]"
            aria-label="Technology Slider"
            >
                {
                    technologies.map((technology, index) => (
                        <SplideSlide key={index} className="w-[289px] min-h-[345px] p-[16px] flex flex-col justify-between items-start rounded-[12px] relative overflow-hidden">
                            <div className='flex justify-between items-center w-full relative z-10'>
                                <h1 className='text-gray font-medium leading-[36px] text-[1.75rem] font-manrope w-[171px]'>{technology.name}</h1>
                                <Link href={technology.route} className='absolute top-0 right-0 flex justify-center items-center w-[21.4px] md:w-[39.77px] h-[21.4px] md:h-[39.77px] rounded-full z-10 bg-white'>
                                    <BsArrowUpRight className='text-blue text-[1rem] md:text-[1.25rem]' />
                                </Link>
                            </div>
                            <div
                                style={{ backgroundColor: technology.color }}
                                className="w-full h-full absolute top-0 left-0 rounded-[12px] z-[5px]"
                            ></div>
                            <Image src={technology.img} alt={technology.name} className='absolute top-0 left-0 w-full h-full rounded-[12px] object-cover z-[5px]'></Image>
                            <p className='text-gray w-[241px] relative z-10 font-normal text-[1.125rem] leading-[24px] font-instrument'>{technology.desc}</p>
                        </SplideSlide>
                    ))
                }
            </Splide>
        </div>


        {/* Smaller screens */}
        <div className='w-full flex lg:hidden justify-center items-center'>
            <Splide
            // extensions={{ AutoScroll }}
            options={{
                type: "loop",
                gap: "16px",

                pauseOnHover: false,
                pauseOnFocus: false,
                perPage: 3.5,
                arrows: false,
                pagination: false,
                autoScroll: { pauseOnHover: false, speed: 0 },
            }}
            className="flex items-center justify-center w-full h-[345px] gap-[16px] ml-6"
            aria-label="Technology Slider"
            >
                {
                    technologies.map((technology, index) => (
                        <SplideSlide key={index} className="w-[289px] min-h-[345px] p-[16px] flex flex-col justify-between items-start rounded-[12px] relative">
                            <div className='flex justify-between items-center w-full relative z-10'>
                                <h1 className='text-gray font-medium leading-[36px] text-[1.75rem] font-manrope w-[171px]'>{technology.name}</h1>
                                <Link href={technology.route} className='absolute top-0 right-0 flex justify-center items-center w-[21.4px] md:w-[39.77px] h-[21.4px] md:h-[39.77px] rounded-full z-10 bg-white'>
                                    <BsArrowUpRight className='text-blue text-[1rem] md:text-[1.25rem]' />
                                </Link>
                            </div>
                            <Image src={technology.img} alt={technology.name} className='absolute top-0 left-0 w-full h-full rounded-[12px] object-cover z-[5px]'></Image>
                            <p className='text-gray w-[241px] relative z-10 font-normal text-[1.125rem] leading-[24px] font-instrument'>{technology.desc}</p>
                        </SplideSlide>
                    ))
                }
            </Splide>
        </div>
    </section>
  )
}

export default MoreTechnologies