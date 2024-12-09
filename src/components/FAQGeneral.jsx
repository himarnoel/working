'use client'

import React, { useState } from 'react';
import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
} from "@chakra-ui/accordion";
import { IoAddCircleOutline } from 'react-icons/io5';
import { FiMinusCircle } from "react-icons/fi";

const FAQGeneral = ({ faqs }) => {
  const [expandedItem, setExpandedItem] = useState(null);

  const toggleItem = (id) => {
    setExpandedItem(expandedItem === id ? null : id);
  };

  return (
    <section className='bg-white w-full min-h-screen py-[120px] gap-[64px] flex flex-col justify-center items-center lg:px-[74px]'>
      <div className='w-full lg:max-w-[1280px] mx-auto flex flex-col justify-start items-center gap-[64px]'>
        <div className='flex flex-col justify-center items-center gap-[20px] text-center'>
          <h1 className='font-semibold leading-[50px] text-[2.5rem] text-blue'>
            Frequently asked questions For<br /> Frontend Development
          </h1>
          <p className='text-blueThree text-[1.125rem] leading-[30px]'>
            Everything you need to know about the product and billing.
          </p>
        </div>

        <div className='w-full lg:w-[880px] flex justify-center items-center gap-[16px]'>
          <Accordion allowMultiple={false} allowToggle={true} className="flex flex-col justify-center items-center gap-[64px] lg:gap-3 w-full">
            {faqs.map((faq) => (
              <AccordionItem
                key={faq.id}
                className="py-[32px] px-[16px] lg:p-[32px] border border-graySix bg-gray rounded-lg w-full min-h-[120px] lg:min-h-[96px]"
                isExpanded={expandedItem === faq.id}
              >
                <div className='flex flex-col justify-center items-start gap-[24px]'>
                  <AccordionButton
                    className="flex justify-between items-center gap-4"
                    onClick={() => toggleItem(faq.id)}
                  >
                    <h1 className="text-blue text-left text-[1rem] lg:text-[1.25rem] font-semibold font-instrument leading-[20.8px] lg:leading-[30px]">
                      {faq.name}
                    </h1>
                    <div className={expandedItem === faq.id ? 'duration-200' : ''}>
                      {expandedItem === faq.id ? (
                        <FiMinusCircle
                          size={26}
                          className='text-brightPurple cursor-pointer text-grayFourteen'
                        />
                      ) : (
                        <IoAddCircleOutline
                          size={26}
                          className='text-brightPurple cursor-pointer text-greenTwo'
                        />
                      )}
                    </div>
                  </AccordionButton>
                  <AccordionPanel className="min-h-[198px] flex flex-col justify-start items-start gap-[20px] lg:gap-[24px]">
                    <p className='text-[.875rem] lg:text-[1.125rem] text-blueTwo leading-[19.6px] lg:leading-[28px] font-normal font-instrument'>
                      {faq.desc}
                    </p>
                    <ul className="list-disc pl-5">
                      {faq.list && Array.isArray(faq.list) && faq.list.map((f, index) => (
                        <li className='text-[.875rem] lg:text-[1.125rem] text-blueTwo leading-[19.6px] lg:leading-[28px] font-normal font-instrument' key={index}>
                          {f}
                        </li>
                      ))}
                    </ul>
                    <p className='text-[.875rem] lg:text-[1.125rem] text-blueTwo leading-[19.6px] lg:leading-[28px] font-normal font-instrument'>
                      {faq.descTwo}
                    </p>
                  </AccordionPanel>
                </div>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQGeneral;
