'use client'

import React, { useState } from 'react'
import OurServices from '../home/OurServices'
import { benefitsFE, Faqs, servicesFrontend, techFrontend } from '@/raw-data/data'
import LongCard from '@/components/LongCard'
import ServicesCard from '@/components/ServicesCard'
import WhyGeneral from '@/components/WhyGeneral'
import why from '../../../public/assets/front-end/why.svg';
import { whyFrontend } from '@/raw-data/data';
import TechnologiesHero from '@/components/TechnologiesHero';
import fe from '../../../public/assets/front-end/technologies.svg';
import OurTechnologiesGeneral from '@/components/OurTechnologiesGeneral'
import KeyBenefitsGeneral from '@/components/KeyBenefitsGeneral'
import FAQGeneral from '@/components/FAQGeneral'
import PartnerWithElara from '@/components/PartnerWithElara'
import MoreTechnologies from '@/components/MoreTechnologies'

const page = () => {
    const [services, setServices] = useState(servicesFrontend);
    const [header, setHeader] = useState((
      <>
      Why Choose<br className='lg:hidden'/> Elara Solutions for<br className='lg:hidden'/> Frontend Development?
      </>
    ));
    const [img, setImg] = useState(why);
    const [whyContent, setWhyContent] = useState(whyFrontend);
    const [title, setTitle] = useState('Front-end Technologies');
    const [desc, setDesc] = useState('At Elara Solutions, our front-end development expertise encompasses a wide array of frameworks and libraries, enabling us to create dynamic, responsive, and high-performing web applications tailored to your specific needs. By leveraging these powerful tools, we ensure that our development processes are efficient, scalable, and aligned with modern best practices.'); 

    const [heroImg, setHeroImg] = useState(fe);
    const [tech, setTech] = useState(techFrontend);
    const [techTitle, setTechTitle] = useState('Our Frontend Technologies');
    const [benefits, setBenefits] = useState(benefitsFE);
    const [faqs, setFaqs] = useState(Faqs);
  return (
    <main>
        <TechnologiesHero title={title} desc={desc} heroImg={heroImg} />
        <WhyGeneral header={header} img={img} whyContent={whyContent}/>
        <section className='py-[80px] lg:py-[120px] px-[24px] lg:px-[100px] flex flex-col justify-center items-center gap-[96px] bg-white'>
          <div className='max-w-[1296px] mx-auto gap-[56px] flex flex-col justify-center items-center'>
            <h1 className='w-[314px] lg:w-[742px] font-bold leading-[35px] lg:leading-[70px] text-[1.75rem] lg:text-[3.5rem] font-instrument text-blue text-center'>Our Frontend Development Services</h1>
            <LongCard services={services} />
            <ServicesCard services={services} />
          </div>
        </section>
        <OurTechnologiesGeneral tech={tech} techTitle={techTitle} />
        <KeyBenefitsGeneral benefits={benefits} />
        <FAQGeneral faqs={faqs}/>
        <PartnerWithElara/>
        <MoreTechnologies/>
    </main>
  )
}

export default page