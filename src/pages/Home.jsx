import React from 'react'

const Home = () => {
  return (
    <main className='bg-[#121212] h-screen grid grid-cols-2 gap-2'>
        <div>
          <section className='py-10 pl-16'>
              <h1 className='text-white text-6xl font-inter cursor-pointer'>Be Incredible. <br /> <span className='text-transparent bg-gradient-to-r from-emerald-500 to-blue-500 bg-clip-text hover:bg-gradient-to-r hover:from-indigo-500 hover:to-blue-500'>Gain Experience</span>  <br /> <span className='w-fit'>Get Ahead, Faster<img src="images/wavvy.png" alt="wiggly lines" className='w-[500px]'/></span></h1>
          </section>
          <section className='pl-16 text-white w-[500px]'>
            <p className="font-plex text-xl">Step into the shoes of real professionals with our premium role simulation platform.<br />Master in-demand skills through immersive experiences that replicate the actual workplace.</p>
          </section>
          {/* <section className='px-16 py-5 w-[500px] gap-5'>
            <div className='h-[3rem] w-full grid grid-cols-3 border-[1px] border-white rounded-[20px]'>
              <input type="email" className='col-span-2 text-white bg-[#121212] p-2 rounded-[22px] outline-0 font-inter' placeholder="Enter Your Email"/>
              <button className='text-black bg-white rounded-[18px] font-inter'>Login</button>
            </div>
          </section> */}
          <section className='pl-16 pt-10'>
            <button className='px-16 py-5 bg-emerald-500 text-white font-inter rounded-lg'>Get Started</button>
          </section>
        </div>
          <img src="images/g.jpg" alt="" className='absolute right-0 top-0 z-[100] h-screen lg:w-[50%] object-cover'/>

    </main>
  )
}

export default Home