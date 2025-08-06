import React from 'react'
import basket from '/assets/basket.png'
const Hero = () => {
  return (
    <section className=' w-full h-screen bg-[url(/assets/bg.png)] bg-cover bg-center flex items-center justify-center'>
        <div className='relative flex flex-col items-center justify-center gap-10'>
          <img src={basket} className=' -mb-20 z-20 h-[13vh]' alt="" />
          <h1 className=' text-8xl cherry'>Gifts That <br /> Speak You</h1>
          <button className=' px-5 py-3 bg-amber-500 rounded-md text-white'>Shop Now</button>
        </div>
    </section>
  )
}

export default Hero