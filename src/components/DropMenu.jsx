"use client";   
import ProductsMenu from "./ProductsMenu";
import SelectedMenu from "./SelectedMenu";
import ServicesMenu from "./ServicesMenu";
import TechnologiesMenu from "./TechnologiesMenu";
import React from "react";

const DropMenu = ({ links, selectedLink, currentLink, setCurrentLink, ref }) => {
  console.log("Current", currentLink);
  console.log("Links", links);
  return (
    <nav
    ref={ref}
      className={`${
        links ? "fadein" : "fadeout"
      } bg-blue w-full absolute left-0 right-0 top-[100%] h-[560px] hidden xl:flex p-[50px] justify-center items-start`}
    >
      {currentLink === "Technologies" && <TechnologiesMenu  selectedLink={selectedLink}/>}
      {currentLink === "Services" && <ServicesMenu selectedLink={selectedLink} />}
      {currentLink === "Products" && <ProductsMenu selectedLink={selectedLink} />}
    </nav>
  );
};

export default DropMenu;
