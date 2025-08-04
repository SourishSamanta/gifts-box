import React from 'react'

const Options = () => {
  return (
    <section className=' w-full min-h-screen'>
      <div className='w-full min-h-[50vh]  flex items-center justify-center gap-10'>

        <div className=' w-[25%] h-[338px] rounded-3xl text-white text-3xl bg-orange-400  flex items-center justify-center'>
          Kids
        </div>

        <div className=' w-[25%] h-[338px] rounded-3xl text-white text-3xl bg-green-400 flex items-center justify-center'>
          Adults
        </div>

        <div className=' w-[25%] h-[338px] rounded-3xl text-white text-3xl bg-blue-400 flex items-center justify-center'>
          Corporate
        </div>

      </div>

      <div className=' banner w-full min-h-[50vh] bg-violet-300 flex items-center justify-center'>
        <h2 className=' text-5xl text-white text-center w-1/2'>
          From birthdays to weddings, anniversaries
to corporate events — We craft customised gifts that leave a lasting impression.
        </h2>
      </div>
    </section>
  )
}

export default Options