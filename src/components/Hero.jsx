import React from 'react'

const Hero = () => {
  return (
    <section className=' w-full h-screen bg-[url(/assets/bg.png)] bg-cover bg-center flex items-center justify-center'>
        <div className=' flex flex-col items-center justify-center gap-10'>
          <h1 className=' text-8xl'>Gifts That <br /> Speak You</h1>
          <button className=' px-5 py-3 bg-amber-500 rounded-md text-white'>Shop Now</button>
        </div>
    </section>
  )
}

export default Hero