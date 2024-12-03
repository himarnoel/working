import React from 'react'
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import "@splidejs/react-splide/css";
import Image from 'next/image';
import { technologies } from '@/raw-data/data';
import Link from 'next/link';
import { BsArrowUpRight } from 'react-icons/bs';


const OurTechnologies = () => {
  return (
    <section className='overflow-x-hidden w-full xl:h-[800px] bg-grayFive flex flex-col justify-center items-center gap-[79px] py-[100px] lg:py-0'>
        <div className='flex flex-col justify-center items-center text-center gap-[24px] w-[328px] md:w-[812px] font-instrument'>
            <h2 className='uppercase text-greenTwo font-semibold text-[1.125rem] md:text-[1rem] leading-[12px]'>our technologies</h2>
            <h1 className='text-[1.5rem] md:text-[2rem] leading-[31.2px] md:leading-[41.6px] font-semibold text-blue'>Discover our solutions to empower your business to scale efficiently and operate seamlessly in a digital-first world.</h1>
        </div>
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

export default OurTechnologies