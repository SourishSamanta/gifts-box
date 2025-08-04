import React from 'react'
import Hero from '../components/Hero'
import Options from '../components/Options'
import BestSellers from '../components/BestSellers'
import About from '../components/About'
import WhyChooseUs from '../components/WhyChooseUs'
import HowItWorks from '../components/HowItWorks'

const LandingPage = () => {
  return (
    <main className=''>
        <Hero />
        <Options />
        <BestSellers />
        <About />
        <WhyChooseUs />
        <HowItWorks />
    </main>
  )
}

export default LandingPage