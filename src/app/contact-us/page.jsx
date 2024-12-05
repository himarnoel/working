import React from 'react'
import ContactUsHero from './components/ContactUsHero'
import ContactUs from '@/components/ContactUs'
import Map from './components/Map'

const page = () => {
  return (
    <main>
        <ContactUsHero/>
        <ContactUs/>
        <Map/>
    </main>
  )
}

export default page