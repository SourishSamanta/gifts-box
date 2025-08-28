import React from 'react'
import Hero from '../components/Hero'
import Options from '../components/Options'
import BestSellers from '../components/BestSellers'
import About from '../components/About'
import WhyChooseUs from '../components/WhyChooseUs'
import HowItWorks from '../components/HowItWorks'
import PointsToBeNoted from '../components/PointsToBeNoted'
import Footer from '../components/Footer'

const LandingPage = () => {
  return (
    <main className=''>
        <Hero />
        <Options />
        <BestSellers />
        <About />
        <WhyChooseUs />
        <HowItWorks />
        <PointsToBeNoted />
        
    </main>
  )
}

export default LandingPage