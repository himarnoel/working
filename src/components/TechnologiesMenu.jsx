"use client";   
import Link from "next/link";
import React from "react";
import { IoArrowForwardOutline } from "react-icons/io5";

const TechnologiesMenu = ({ selectedLink }) => {
  return (
    <div className="p-[24px] flex flex-col xl:flex-row justify-start xl:justify-between items-start gap-[40px] xl:gap-[24px] max-h-[calc(100vh-72px)] xl:min-h-[383px] overflow-y-scroll xl:overflow-y-hidden xl:w-[1288px]">
      <div className="flex flex-col justify-center items-start gap-[16px]">
        <Link
          href={`/front-end`}
          onClick={() => selectedLink("")}
          className="flex justify-start gap-[20px] text-green text-[1.125rem] leading-[22.5px] font-semibold font-instrument items-center"
        >
          Frontend
          <IoArrowForwardOutline />
        </Link>
        <ul className="flex flex-col justify-center items-start gap-[8px] xl:gap-[16px] text-white">
          <li className="text-[.875rem] leading-[22.4px] font-normal font-instrument iLight">
            Javascript
          </li>
          <li className="text-[.875rem] leading-[22.4px] font-normal font-instrument iLight">
            Typescript
          </li>
          <li className="text-[.875rem] leading-[22.4px] font-normal font-instrument iLight">
            React Js
          </li>
          <li className="text-[.875rem] leading-[22.4px] font-normal font-instrument iLight">
            Angular
          </li>
          <li className="text-[.875rem] leading-[22.4px] font-normal font-instrument iLight">
            Vue
          </li>
        </ul>
      </div>
      <div className="flex justify-between items-start gap-6">
        <div className="hidden xl:flex bg-gray w-[1px] rounded h-[360px] mt-10"></div>
        <div className="flex flex-col justify-center items-start gap-[16px]">
          <Link
            href={`/back-end`}
            onClick={() => selectedLink("")}
            className="flex justify-start gap-[20px] text-green text-[1.125rem] leading-[22.5px] font-semibold font-instrument items-center"
          >
            Backend
            <IoArrowForwardOutline />
          </Link>
          <ul className="flex flex-col justify-center items-start gap-[8px] xl:gap-[16px] text-white">
            <li className="text-[.875rem] leading-[22.4px] font-normal font-instrument">
              Java
            </li>
            <li className="text-[.875rem] leading-[22.4px] font-normal font-instrument">
              .NET
            </li>
            <li className="text-[.875rem] leading-[22.4px] font-normal font-instrument">
              PHP
            </li>
            <li className="text-[.875rem] leading-[22.4px] font-normal font-instrument">
              Python
            </li>
            <li className="text-[.875rem] leading-[22.4px] font-normal font-instrument">
              Ruby
            </li>
            <li className="text-[.875rem] leading-[22.4px] font-normal font-instrument">
              Node.js
            </li>
            <li className="text-[.875rem] leading-[22.4px] font-normal font-instrument">
              Scala
            </li>
            <li className="text-[.875rem] leading-[22.4px] font-normal font-instrument">
              Golang
            </li>
            <li className="text-[.875rem] leading-[22.4px] font-normal font-instrument">
              C/C++
            </li>
          </ul>
        </div>
      </div>
      <div className="flex justify-between items-start gap-6">
        <div className="hidden xl:flex bg-gray w-[1px] rounded h-[360px] mt-10"></div>
        <div className="flex flex-col justify-center items-start gap-[16px]">
          <h2 className="flex justify-start gap-[20px] text-green text-[1.125rem] leading-[22.5px] font-semibold font-instrument items-center">
            Mobile
            <IoArrowForwardOutline />
          </h2>
          <ul className="flex flex-col justify-center items-start gap-[8px] xl:gap-[16px] text-white">
            <li className="text-[.875rem] leading-[22.4px] font-normal font-instrument">
              Android
            </li>
            <li className="text-[.875rem] leading-[22.4px] font-normal font-instrument">
              IOS
            </li>
            <li className="text-[.875rem] leading-[22.4px] font-normal font-instrument">
              Flutter
            </li>
            <li className="text-[.875rem] leading-[22.4px] font-normal font-instrument">
              Xamarine
            </li>
            <li className="text-[.875rem] leading-[22.4px] font-normal font-instrument">
              React Native
            </li>
            <li className="text-[.875rem] leading-[22.4px] font-normal font-instrument">
              Unity
            </li>
            <li className="text-[.875rem] leading-[22.4px] font-normal font-instrument">
              Ionic
            </li>
            <li className="text-[.875rem] leading-[22.4px] font-normal font-instrument">
              Swift
            </li>
            <li className="text-[.875rem] leading-[22.4px] font-normal font-instrument">
              Kotlin
            </li>
          </ul>
        </div>
      </div>
      <div className="flex justify-between items-start gap-6">
        <div className="hidden xl:flex bg-gray w-[1px] rounded h-[360px] mt-10"></div>
        <div className="flex flex-col justify-center items-start gap-[16px]">
          <h2 className="flex justify-start gap-[20px] text-green text-[1.125rem] leading-[22.5px] font-semibold font-instrument items-center">
            Cloud
            <IoArrowForwardOutline />
          </h2>
          <ul className="flex flex-col justify-center items-start gap-[8px] xl:gap-[16px] text-white">
            <li className="text-[.875rem] leading-[22.4px] font-normal font-instrument">
              AWS
            </li>
            <li className="text-[.875rem] leading-[22.4px] font-normal font-instrument">
              Azure
            </li>
            <li className="text-[.875rem] leading-[22.4px] font-normal font-instrument">
              GCP
            </li>
          </ul>
        </div>
      </div>
      <div className="flex justify-between items-start gap-6">
        <div className="hidden xl:flex bg-gray w-[1px] rounded h-[360px] mt-10"></div>
        <div className="flex flex-col justify-center items-start gap-[16px]">
          <h2 className="flex justify-start gap-[20px] text-green text-[1.125rem] leading-[22.5px] font-semibold font-instrument items-center">
            Data
            <IoArrowForwardOutline />
          </h2>
          <ul className="flex flex-col justify-center items-start gap-[8px] xl:gap-[16px] text-white">
            <li className="text-[.875rem] leading-[22.4px] font-normal font-instrument">
              Snowflake Data Cloud
            </li>
            <li className="text-[.875rem] leading-[22.4px] font-normal font-instrument">
              AWS Cloud
            </li>
            <li className="text-[.875rem] leading-[22.4px] font-normal font-instrument">
              Microsoft Intelligent Data Platform
            </li>
            <li className="text-[.875rem] leading-[22.4px] font-normal font-instrument">
              Microsoft Azure Cloud
            </li>
            <li className="text-[.875rem] leading-[22.4px] font-normal font-instrument">
              Oracle
            </li>
          </ul>
        </div>
      </div>
      <div className="flex justify-between items-start gap-6">
        <div className="hidden xl:flex bg-gray w-[1px] rounded h-[360px]"></div>
        <div className="flex flex-col justify-center items-start gap-[16px]">
          <h2 className="flex justify-start gap-[20px] text-green text-[1.125rem] leading-[22.5px] font-semibold font-instrument items-center">
            Security
            <IoArrowForwardOutline />
          </h2>
          <ul className="flex flex-col justify-center items-start gap-[8px] xl:gap-[16px] text-white">
            <li className="text-[.875rem] leading-[22.4px] font-normal font-instrument">
              Application Security
            </li>
            <li className="text-[.875rem] leading-[22.4px] font-normal font-instrument">
              Network Security
            </li>
            <li className="text-[.875rem] leading-[22.4px] font-normal font-instrument">
              Cloud Security
            </li>
            <li className="text-[.875rem] leading-[22.4px] font-normal font-instrument">
              Data Security & Encryption
            </li>
            <li className="text-[.875rem] leading-[22.4px] font-normal font-instrument">
              Identity & Access Mgt. (IAM)
            </li>
            <li className="text-[.875rem] leading-[22.4px] font-normal font-instrument">
              Compliance & Risk mgt.
            </li>
            <li className="text-[.875rem] leading-[22.4px] font-normal font-instrument">
              Endpoint Security
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TechnologiesMenu;
