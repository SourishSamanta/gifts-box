import React from 'react'
import rainbow from '/assets/rainbow.png'
const Options = () => {
  return (
    <section className=' w-full min-h-screen'>
      <div className='w-full min-h-[50vh]  flex items-center justify-center gap-10'>

        <div className='cherry w-[25%] h-[40vh] rounded-3xl text-white text-3xl bg-[url(/assets/kidsbg.png)] bg-cover  flex items-center justify-center'>
          Kids
        </div>

        <div className='cherry w-[25%] h-[40vh] rounded-3xl text-white text-3xl bg-[url(/assets/adultsbg.png)] bg-cover flex items-center justify-center'>
          Adults
        </div>

        <div className='cherry w-[25%] h-[40vh] rounded-3xl text-white text-3xl bg-[url(/assets/corporatebg.png)] bg-cover flex items-center justify-center'>
          Corporate
        </div>

      </div>

      <div className='relative banner w-full min-h-[50vh] bg-[#A7B6CC] flex items-center justify-center'>
        <img src={rainbow} className=' absolute h-1/3 top-0 right-0 rotate-180' alt="" />
        <img src={rainbow} className=' absolute h-1/3 bottom-0 left-0' alt="" />
        <h2 className=' text-4xl text-white text-center w-2/3'>
          From birthdays to weddings, anniversaries
to corporate events — We craft customised gifts that leave a lasting impression.
        </h2>
      </div>
    </section>
  )
}

export default Options