import React from 'react'
import CareerHero from './components/CareerHero'
import OurValues from './components/OurValues'
import OurBenefits from './components/OurBenefits'
import Gallary from './components/Gallary'
import NurtureTalents from './components/NurtureTalents'
import NoJobs from './components/NoJobs'
import JobOpening from './components/JobOpening'

const page = () => {
  return (
    <main>
        <CareerHero/>
        <OurValues/>
        <OurBenefits/>
        <Gallary/>
        <NurtureTalents/>
        <JobOpening/>
        <NoJobs/>
    </main>
  )
}

export default page