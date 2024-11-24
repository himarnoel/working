import React from 'react'
import { IoArrowForwardOutline } from 'react-icons/io5'


const TechnologiesMenu = () => {
    return (
      <div className='p-[24px] flex flex-col justify-start items-start gap-[40px] max-h-[calc(100vh-72px)] overflow-y-scroll'>
          <div className='flex flex-col justify-center items-start gap-[16px]'>
              <h2 className='flex justify-start gap-[20px] text-green text-[1.125rem] leading-[22.5px] font-semibold iSemiBold items-center'>
                  Frontend
                  <IoArrowForwardOutline />
              </h2>
              <ul className='flex flex-col justify-center items-start gap-[8px] text-white'>
                  <li className='text-[.875rem] leading-[22.4px] font-normal iLight'>Javascript</li>
                  <li className='text-[.875rem] leading-[22.4px] font-normal iLight'>Typescript</li>
                  <li className='text-[.875rem] leading-[22.4px] font-normal iLight'>React Js</li>
                  <li className='text-[.875rem] leading-[22.4px] font-normal iLight'>Angular</li>
                  <li className='text-[.875rem] leading-[22.4px] font-normal iLight'>Vue</li>
              </ul>
          </div>
          <div className='flex flex-col justify-center items-start gap-[16px]'>
              <h2 className='flex justify-start gap-[20px] text-green text-[1.125rem] leading-[22.5px] font-semibold iSemiBold items-center'>
                  Backend
                  <IoArrowForwardOutline />
              </h2>
              <ul className='flex flex-col justify-center items-start gap-[8px] text-white'>
                  <li className='text-[.875rem] leading-[22.4px] font-normal iLight'>Java</li>
                  <li className='text-[.875rem] leading-[22.4px] font-normal iLight'>.NET</li>
                  <li className='text-[.875rem] leading-[22.4px] font-normal iLight'>PHP</li>
                  <li className='text-[.875rem] leading-[22.4px] font-normal iLight'>Python</li>
                  <li className='text-[.875rem] leading-[22.4px] font-normal iLight'>Ruby</li>
                  <li className='text-[.875rem] leading-[22.4px] font-normal iLight'>Node.js</li>
                  <li className='text-[.875rem] leading-[22.4px] font-normal iLight'>Scala</li>
                  <li className='text-[.875rem] leading-[22.4px] font-normal iLight'>Golang</li>
                  <li className='text-[.875rem] leading-[22.4px] font-normal iLight'>C/C++</li>
              </ul>
          </div>
        <div className='flex flex-col justify-center items-start gap-[16px]'>
            <h2 className='flex justify-start gap-[20px] text-green text-[1.125rem] leading-[22.5px] font-semibold iSemiBold items-center'>
                Mobile
                <IoArrowForwardOutline />
            </h2>
            <ul className='flex flex-col justify-center items-start gap-[8px] text-white'>
                <li className='text-[.875rem] leading-[22.4px] font-normal iLight'>Android</li>
                <li className='text-[.875rem] leading-[22.4px] font-normal iLight'>IOS</li>
                <li className='text-[.875rem] leading-[22.4px] font-normal iLight'>Flutter</li>
                <li className='text-[.875rem] leading-[22.4px] font-normal iLight'>Xamarine</li>
                <li className='text-[.875rem] leading-[22.4px] font-normal iLight'>React Native</li>
                <li className='text-[.875rem] leading-[22.4px] font-normal iLight'>Unity</li>
                <li className='text-[.875rem] leading-[22.4px] font-normal iLight'>Ionic</li>
                <li className='text-[.875rem] leading-[22.4px] font-normal iLight'>Swift</li>
                <li className='text-[.875rem] leading-[22.4px] font-normal iLight'>Kotlin</li>
            </ul>
        </div>
        <div className='flex flex-col justify-center items-start gap-[16px]'>
            <h2 className='flex justify-start gap-[20px] text-green text-[1.125rem] leading-[22.5px] font-semibold iSemiBold items-center'>
                Cloud
                <IoArrowForwardOutline />
            </h2>
            <ul className='flex flex-col justify-center items-start gap-[8px] text-white'>
                <li className='text-[.875rem] leading-[22.4px] font-normal iLight'>AWS</li>
                <li className='text-[.875rem] leading-[22.4px] font-normal iLight'>Azure</li>
                <li className='text-[.875rem] leading-[22.4px] font-normal iLight'>GCP</li>
            </ul>
        </div>
        <div className='flex flex-col justify-center items-start gap-[16px]'>
            <h2 className='flex justify-start gap-[20px] text-green text-[1.125rem] leading-[22.5px] font-semibold iSemiBold items-center'>
                Data
                <IoArrowForwardOutline />
            </h2>
            <ul className='flex flex-col justify-center items-start gap-[8px] text-white'>
                <li className='text-[.875rem] leading-[22.4px] font-normal iLight'>Snowflake Data Cloud</li>
                <li className='text-[.875rem] leading-[22.4px] font-normal iLight'>AWS Cloud</li>
                <li className='text-[.875rem] leading-[22.4px] font-normal iLight'>Microsoft Intelligent Data Platform</li>
                <li className='text-[.875rem] leading-[22.4px] font-normal iLight'>Microsoft Azure Cloud</li>
                <li className='text-[.875rem] leading-[22.4px] font-normal iLight'>Oracle</li>
            </ul>
        </div>
        <div className='flex flex-col justify-center items-start gap-[16px]'>
            <h2 className='flex justify-start gap-[20px] text-green text-[1.125rem] leading-[22.5px] font-semibold iSemiBold items-center'>
                Security
                <IoArrowForwardOutline />
            </h2>
            <ul className='flex flex-col justify-center items-start gap-[8px] text-white'>
                <li className='text-[.875rem] leading-[22.4px] font-normal iLight'>Application Security</li>
                <li className='text-[.875rem] leading-[22.4px] font-normal iLight'>Network Security</li>
                <li className='text-[.875rem] leading-[22.4px] font-normal iLight'>Cloud Security</li>
                <li className='text-[.875rem] leading-[22.4px] font-normal iLight'>Data Security & Encryption</li>
                <li className='text-[.875rem] leading-[22.4px] font-normal iLight'>Identity & Access Mgt. (IAM)</li>
                <li className='text-[.875rem] leading-[22.4px] font-normal iLight'>Compliance & Risk mgt.</li>
                <li className='text-[.875rem] leading-[22.4px] font-normal iLight'>Endpoint Security</li>
            </ul>
        </div>
      </div>
    )
  }

export default TechnologiesMenu