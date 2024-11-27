import Image from 'next/image';
import React from 'react'
import { GoArrowLeft } from "react-icons/go";
import city from '../../../../public/assets/case-studies/city.svg';
import Link from 'next/link';
import { SlPaperPlane } from "react-icons/sl";
import { cases } from '@/raw-data/data';
import { MdOutlineArrowOutward } from 'react-icons/md';


const page = () => {
  return (
    <section className='bg-grayThree w-full pt-[120px] min-h-screen'>
        <div className='max-w-[1200px] mx-auto px-6 flex flex-col gap-[56px] pb-[200px] md:pb-[400px]'>
            <div className='w-full xl:w-[913px] flex flex-col justify-center items-start gap-[10px]'>
                <Link href={`/case-studies`} className='flex justify-start items-center gap-[8px] font-instrument text-greenTwo leading-[19.2px] text-[1rem] font-medium'>
                    <GoArrowLeft />
                    <p>Back to main casestudy page</p>
                </Link>
                <h1 className='text-blue leading-[52px] font-semibold font-instrument text-[2.5rem]'>Agency Banking: Revolutionising Financial Access Through a Network of Authorised Agents</h1>
                <p className='text-greenTwo leading-[24px] text-[1.125rem] font-semibold font-instrument'>13 Jan 2022 • 10 min read</p>
            </div>
            <div className='max-w-[1140px] mx-auto flex flex-col md:flex-row justify-between items-start gap-[120px]'>
                <div className='flex flex-col justify-center items-start gap-[48px] w-full xl:w-[640px]'>
                    <Image width={640} height={426.67} className='object-cover rounded-2xl' src={city} alt='City Scape'></Image>
                    <div className='flex flex-col justify-center items-start gap-[24px]'>
                        <h1 className='text-greenTwo leading-[38px] font-semibold font-instrument text-[1.875rem]'>Project Overview:</h1>
                        <p className='font-normal leading-[28px] text-[1.125rem] text-blueTwo font-instrument'>
                            Agency Banking is an innovative solution developed to transform access to financial services by bringing essential banking functions closer to individuals and businesses. Agency Banking partners with local businesses and other agents, equipping them with tools to offer essential banking services within their communities. By leveraging the convenience and reach of these authorised agents, Agency Banking enhances financial inclusion, enabling customers to perform transactions without the need for traditional bank branches.
                        </p>
                    </div>

                    <div className='flex flex-col justify-center items-start gap-[16px]'>
                        <h1 className='text-greenTwo leading-[38px] font-semibold font-instrument text-[1.875rem]'>Objective</h1>
                        <p className='font-normal leading-[28px] text-[1.125rem] text-blueTwo font-instrument'>
                            To create a technology-driven model that allows authorised agents to offer essential banking services, especially in underserved areas. Agency Banking was designed to:
                        </p>
                        <ul className='list-disc px-10 w-full'>
                            <li className='text-blueTwo text-[1rem] font-normal font-instrument leading-[38px]'>Expand access to banking services.</li>
                            <li className='text-blueTwo text-[1rem] font-normal font-instrument leading-[38px]'>Facilitate convenient and secure financial transactions.</li>
                            <li className='text-blueTwo text-[1rem] font-normal font-instrument leading-[38px]'>Ensure seamless, inclusive financial solutions.</li>
                        </ul>
                    </div>

                    <div className='flex flex-col justify-center items-start gap-[16px]'>
                        <h1 className='text-greenTwo leading-[38px] font-semibold font-instrument text-[1.875rem]'>Solution</h1>
                        <p className='font-normal leading-[28px] text-[1.125rem] text-blueTwo font-instrument'>
                            Agency Banking operates through a robust, multi-functional application designed with user convenience and accessibility in mind. The app provides an extended range of banking services, including account opening, money transfers, and bill payments. This approach not only removes barriers to access but also allows customers to complete transactions beyond traditional banking hours, including weekends and public holidays.
                        </p>
                    </div>


                    <div className='flex flex-col justify-center items-start gap-[16px]'>
                        <h1 className='text-greenTwo leading-[38px] font-semibold font-instrument text-[1.875rem]'>Key Features</h1>
                        <div>
                            <ul className='list-decimal'>
                                <li className='font-instrument text-[1.125rem] leading-[28px] font-normal text-blueTwo'>
                                    <span className='font-semibold'>Extended Service Hours:</span> Agency Banking agents provide banking services during weekends and public holidays, offering flexibility for users needing transactions outside of regular hours.
                                </li>
                                <li className='font-instrument text-[1.125rem] leading-[28px] font-normal text-blueTwo'>
                                    <span className='font-semibold'>Account Opening and Verification:</span> Authorised agents can initiate and document account openings directly through the Agency Banking app, with backend support for secure customer verification.
                                </li>
                                <li className='font-instrument text-[1.125rem] leading-[28px] font-normal text-blueTwo'>
                                    <span className='font-semibold'>Money Transfer:</span> Agency Banking enables agents to complete money transfers, verify beneficiaries, and confirm transaction details via mobile or Point-Of-Sale (POS) terminals.
                                </li>
                                <li className='font-instrument text-[1.125rem] leading-[28px] font-normal text-blueTwo'>
                                    <span className='font-semibold'>Money Deposit:</span> Customers can conveniently deposit money through agents using either the app or POS terminals.
                                </li>
                                <li className='font-instrument text-[1.125rem] leading-[28px] font-normal text-blueTwo'>
                                    <span className='font-semibold'>Bill Payment and Airtime Purchase:</span> Agency Banking allows users to pay utility bills and purchase airtime directly from the app.
                                </li>
                                <li className='font-instrument text-[1.125rem] leading-[28px] font-normal text-blueTwo'>
                                    <span className='font-semibold'>Transaction and Commission Tracking:</span> Agents can track transactions and commissions, providing transparency and accountability within the platform.
                                </li>
                                <li className='font-instrument text-[1.125rem] leading-[28px] font-normal text-blueTwo'>
                                    <span className='font-semibold'>Multi-Currency, Multi-Country, and Multi-Language Support </span>

                                    <ul className='list-disc px-2 w-full'>
                                        <li className='font-instrument text-[1.125rem] leading-[28px] font-normal text-blueTwo'>
                                            <span className='font-semibold'>Multi-Currency Support:</span> Users can conduct transactions in various currencies (USD, Euro, GBP), with built-in currency conversion.</li>
                                        <li className='font-instrument text-[1.125rem] leading-[28px] font-normal text-blueTwo'>
                                            <span className='font-semibold'>Multi-Language Support:</span> The app is fully localised to accommodate language preferences, enhancing accessibility for users in non-English speaking regions.
                                        </li>
                                        <li className='font-instrument text-[1.125rem] leading-[28px] font-normal text-blueTwo'>
                                            <span className='font-semibold'>Multi-Country Support:</span> Agency Banking is equipped to integrate the subsidiaries of multinational organisations into one platform, offering seamless services across multiple countries.
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className='flex flex-col justify-center items-start gap-[16px]'>
                        <h1 className='text-greenTwo leading-[38px] font-semibold font-instrument text-[1.875rem]'>Technology Stack</h1>
                        <ul className='list-disc'>
                            <li className='font-instrument text-[1.125rem] leading-[28px] text-blueTwo font-normal'>
                                <span className='font-semibold'>Backend:</span> Designed to handle verification and secure transactions efficiently.
                            </li>
                            <li className='font-instrument text-[1.125rem] leading-[28px] text-blueTwo font-normal'>
                                <span className='font-semibold'>Frontend:</span> Intuitive user interface, optimised for multilingual and multicurrency functionalities.
                            </li>
                            <li className='font-instrument text-[1.125rem] leading-[28px] text-blueTwo font-normal'>
                                <span className='font-semibold'>Mobile Application and POS Integration:</span> Enabling on-the-go banking services.
                            </li>
                            <li className='font-instrument text-[1.125rem] leading-[28px] text-blueTwo font-normal'>
                                <span className='font-semibold'>Database:</span> Handling structured data with complex relationships and ensuring data integrity.
                            </li>
                        </ul>
                    </div>

                    <div className='flex flex-col justify-center items-start gap-[24px]'>
                        <h1 className='text-greenTwo leading-[38px] font-semibold font-instrument text-[1.875rem]'>Outcome</h1>
                        <p className='font-normal leading-[28px] text-[1.125rem] text-blueTwo font-instrument'>
                            Agency Banking successfully extended the reach of financial services, improving access for underserved populations. The app allowed the bank to:
                        </p>
                        <ul className='list-disc px-10 w-full'>
                            <li className='text-blueTwo text-[1rem] font-normal font-instrument leading-[38px]'>Increase customer acquisition in remote areas.</li>
                            <li className='text-blueTwo text-[1rem] font-normal font-instrument leading-[38px]'>Enhance customer satisfaction by offering extended hours and versatile banking options.</li>
                            <li className='text-blueTwo text-[1rem] font-normal font-instrument leading-[38px]'>Strengthen the institution’s market presence in multiple countries through a single, integrated application.</li>
                        </ul>
                    </div>

                    <div className='flex flex-col justify-center items-start gap-[24px]'>
                        <h1 className='text-greenTwo leading-[38px] font-semibold font-instrument text-[1.875rem]'>Value Delivered</h1>
                        <p className='font-normal leading-[28px] text-[1.125rem] text-blueTwo font-instrument'>
                            Through Agency Banking, the bank achieved significant growth in customer engagement and retention. The app empowered users with accessible financial services, fostering a new level of trust and reliability in regions where traditional banking was previously unavailable.
                        </p>
                        <p className='font-normal leading-[28px] text-[1.125rem] text-blueTwo font-instrument'>
                            Agency Banking stands as a model of innovation in financial inclusion, bridging the gap between traditional banking and the evolving needs of diverse communities worldwide.
                        </p>
                    </div>

                    <div className='flex flex-col justify-center items-start gap-[24px]'>
                        <h1 className='text-greenTwo leading-[38px] font-semibold font-instrument text-[1.875rem]'>What Happens Next?</h1>
                        <ul className='list-decimal px-6 w-full'>
                            <li className='text-blueTwo text-[1rem] font-normal font-instrument leading-[28px]'>Upon receiving and processing your request, we’ll promptly reach out to review your project needs and initiate an NDA to ensure confidentiality.</li>
                            <li className='text-blueTwo text-[1rem] font-normal font-instrument leading-[28px]'>Our analysts and developers will then assess your requirements, developing a comprehensive project proposal that includes the scope of work, team allocation, timelines, and cost estimates.</li>
                            <li className='text-blueTwo text-[1rem] font-normal font-instrument leading-[28px]'>We’ll arrange a meeting to discuss the proposal in detail, refining it to align with your expectations.</li>
                            <li className='text-blueTwo text-[1rem] font-normal font-instrument leading-[28px]'>Once we reach an agreement, we’ll sign a contract and commence work on your project without delay.</li>
                        </ul>
                    </div>
                </div>


                <div className='w-full md:w-[384px] flex flex-col justify-center items-center gap-[40px]'>
                    <div className='bg-white border border-grayFour w-[328px] lg:w-[380px] rounded-[20px] p-4 flex flex-col justify-center items-start gap-[24px]'>
                        <h1 className='text-greenTwo leading-[38px] font-semibold font-instrument text-[1.75rem]'>Client</h1>
                        <p className='text-blueTwo leading-6 text-[1rem] font-normal font-instrument'>Our client is a leading multinational financial institution aiming to increase financial inclusion and reach underserved or remote regions.</p>
                        <p className='text-blueTwo leading-6 text-[1rem] font-normal font-instrument'>Due to confidentiality requirements under the NDA, specific client information cannot be disclosed.</p>
                    
                        <div className='flex flex-col justify-center items-start gap-[8px] w-full'>
                            <div className='flex justify-start items-center gap-3 text-blue text-[1rem] leading-[24px] font-instrument'>
                                <span className='font-semibold'>Industry:</span>
                                <p className='font-normal'>Banking</p>
                            </div>
                            <div className='flex justify-start items-center gap-3 text-blue text-[1rem] leading-[24px] font-instrument'>
                                <span className='font-semibold'>Region:</span>
                                <p className='font-normal'>Africa</p>
                            </div>
                            <div className='flex justify-start items-center gap-3 text-blue text-[1rem] leading-[24px] font-instrument'>
                                <span className='font-semibold'>Client Since:</span>
                                <p className='font-normal'>2020</p>
                            </div>
                        </div>
                    </div>

                    <div className='bg-white border border-grayFour rounded-[20px] w-[328px] lg:w-[380px] lg:h-[320px] p-6 flex flex-col justify-center items-start gap-[24px]'>
                        <h1 className='text-greenTwo leading-[38px] font-semibold font-instrument text-[1.75rem]'>Team</h1>
                        <ul className='list-disc px-10 w-full'>
                            <li className='text-blueTwo text-[1rem] font-normal font-instrument leading-[38px]'>Project Manager</li>
                            <li className='text-blueTwo text-[1rem] font-normal font-instrument leading-[38px]'>Back-End Developers</li>
                            <li className='text-blueTwo text-[1rem] font-normal font-instrument leading-[38px]'>Front-End Developers</li>
                            <li className='text-blueTwo text-[1rem] font-normal font-instrument leading-[38px]'>QA Specialists</li>
                            <li className='text-blueTwo text-[1rem] font-normal font-instrument leading-[38px]'>DevOps Engineers</li>
                        </ul>
                    </div>

                    <div className='bg-white border border-grayFour w-[328px] lg:w-[380px] lg:h-[320px] rounded-[20px] p-6 flex flex-col justify-center items-start gap-[24px]'>
                        <h1 className='text-greenTwo leading-[38px] font-semibold font-instrument text-[1.75rem]'>Team</h1>
                        <p className='font-normal font-instrument text-blueTwo text-[1rem] leading-[22.4px]'>
                            Through Agency Banking, the bank achieved significant growth in customer engagement and retention. The app empowered users with accessible financial services, fostering a new level of trust and reliability in regions where traditional banking was previously unavailable.
                        </p>
                    </div>

                    <div className='w-[328px] lg:w-[384px] lg:h-[516px] bg-blue rounded-[16px] pt-[32px] pb-[40px] px-[24px] md:px-[32px] gap-[32px] flex flex-col justify-center items-start'>
                        <div className='bg-white w-[56px] h-[56px] rounded-full flex justify-center items-center'>
                        <SlPaperPlane className='text-greenTwo text-[1.375rem]' />
                        </div>
                        <div className='flex flex-col justify-center items-start gap-[12px]'>
                            <h1 className='font-instrument text-white leading-[32px] font-semibold text-[1.75rem]'>Get in touch</h1>
                            <p className='font-instrument text-[1rem] leading-[24px] font-normal text-gray'>
                                At Elara Solutions, our expertise lies in understanding the distinct needs of each client and delivering solutions that make a measurable impact. Whether you’re looking to scale, innovate, or optimize, we’re here to help you navigate the digital future.
                            </p>
                        </div>
                        <div className='flex flex-col justify-center items-start gap-[16px]'>
                            <p className='font-instrument text-[1rem] leading-[24px] font-normal text-gray'>
                                Ready to see how we can empower your business? Contact us today and let’s build the future together!
                            </p>
                            <button className='w-full lg:w-[320px] h-[48px] rounded-[8px] bg-white border border-white gap-[8px] flex justify-center items-center py-[12px] px-[20px] text-blue font-medium text-[1rem] leading-[24px]'>Contact us</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className='w-full bg-grayFive xl:h-[940px] font-instrument py-[100px] px-6'>
            <div className='max-w-[1280px] mx-auto flex flex-col justify-center items-start gap-[40px] md:gap-[70px]'>
                <div className='gap-[16px] w-full flex flex-col justify-center items-start'>
                    <h2 className='uppercase text-greenTwo text-[.875rem] leading-[12px] font-semibold'>case study</h2>
                    <h1 className='leading-[44px] text-[1.5rem] md:text-[2.5rem] font-semibold'>Featured Case studies</h1>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center place-items-center gap-[8px] w-full'>
                
                {
                    cases.slice(0,3).map((caseItem, index) => (
                        <div key={index} className='bg-white w-[328px] xl:w-[421.33px] h-[516px] pb-[16px] md:pb-[32px] gap-[32px] flex flex-col justify-center items-start rounded-bl-[4px] md:rounded-bl-[16px] rounded-br-[4px] md:rounded-br-[16px]'>
                            <Image width={584} height={280} className='rounded-tl-[4px] md:rounded-tl-[16px] h-[280px] w-full rounded-tr-[4px] md:rounded-tr-[16px] object-cover' src={caseItem.img} alt={caseItem.title}></Image>
                            <div className='px-4 md:px-6 gap-[16px] flex flex-col border border-gray justify-center items-start w-full'>
                                <h1 className='text-blue leading-[23.4px] lg:leading-[31.2px] font-instrument text-[1.125rem] lg:text-[1.45rem] font-semibold'>{caseItem.title}</h1>
                                <p className='text-blueThree leading-[16.8px] lg:leading-[24px] font-instrument text-[.75rem] lg:text-[1rem] font-normal'>{caseItem.text}</p>
                                <Link href={`/case-studies/1`} className='text-greenTwo flex justify-center items-center gap-[8px] leading-[24px] text-[.875rem] lg:text-[1rem] font-medium font-instrument'>
                                    Read post
                                    <MdOutlineArrowOutward />
                                </Link>
                            </div>
                        </div>
                    ))
                }
                </div>
            </div>
        </div>
    </section>
  )
}

export default page