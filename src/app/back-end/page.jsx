'use client'

import React, { useState } from 'react'
import OurServices from '../home/OurServices'
import { benefitsBE, FaqsBE, processBE, servicesBackend, techBackend, whyBackend } from '@/raw-data/data'
import LongCard from '@/components/LongCard'
import ServicesCard from '@/components/ServicesCard'
import WhyGeneral from '@/components/WhyGeneral'
import why from '../../../public/assets/back-end/why.svg';
import { whyFrontend } from '@/raw-data/data';
import TechnologiesHero from '@/components/TechnologiesHero';
import be from '../../../public/assets/back-end/be.svg';
import OurTechnologiesGeneral from '@/components/OurTechnologiesGeneral'
import KeyBenefitsGeneral from '@/components/KeyBenefitsGeneral'
import FAQGeneral from '@/components/FAQGeneral'
import PartnerWithElara from '@/components/PartnerWithElara'
import MoreTechnologies from '@/components/MoreTechnologies'
import OurColabProcess from '@/components/OurColabProcess'

const page = () => {
    const [services, setServices] = useState(servicesBackend);
    const [header, setHeader] = useState((
      <>
      Why Choose<br className='lg:hidden'/> Elara Solutions for<br className='lg:hidden'/> Backend Development?
      </>
    ));
    const [img, setImg] = useState(why);
    const [whyContent, setWhyContent] = useState(whyBackend);
    const [title, setTitle] = useState('Backend Technologies');
    const [desc, setDesc] = useState('At Elara Solutions, we specialise in delivering robust backend development services that power your applications and ensure smooth functionality. Our experienced team utilises a variety of programming languages and frameworks to build scalable, secure, and high-performance backend solutions tailored to your unique business needs. Whether you require API development, database management, or custom server-side solutions, we have the expertise to help you succeed.'); 

    const [heroImg, setHeroImg] = useState(be);
    const [tech, setTech] = useState(techBackend);
    const [techTitle, setTechTitle] = useState('Our Backend Development Technologies');
    const [benefits, setBenefits] = useState(benefitsBE);
    const [faqs, setFaqs] = useState(FaqsBE);
    const [faqTitle, setFaqTitle] = useState((
        <>
          FAQ for Backend <br/>Development
        </>
    ));
    const [proc, setProc] = useState(processBE);

  return (
    <main>
        <TechnologiesHero title={title} desc={desc} heroImg={heroImg} />
        <WhyGeneral header={header} img={img} whyContent={whyContent}/>
        <section className='py-[80px] lg:py-[120px] px-[24px] lg:px-[100px] flex flex-col justify-center items-center gap-[96px] bg-white'>
          <div className='max-w-[1296px] mx-auto gap-[56px] flex flex-col justify-center items-center'>
            <h1 className='w-[314px] lg:w-[742px] font-bold leading-[35px] lg:leading-[70px] text-[1.75rem] lg:text-[3.5rem] font-instrument text-blue text-center'>Our Backend Development Services</h1>
            <ServicesCard services={services} />
          </div>
        </section>
        <OurTechnologiesGeneral tech={tech} techTitle={techTitle} />
        <OurColabProcess proc={proc}/>
        <KeyBenefitsGeneral benefits={benefits} />
        <FAQGeneral faqs={faqs} faqTitle={faqTitle} />
        <PartnerWithElara/>
        <MoreTechnologies/>
    </main>
  )
}

export default page