const Home = () => {
  return (
    <main className="bg-[#121212]">
      <section className="h-screen grid grid-cols-2 gap-2">
        <div className="relative pl-16">
          <div className="ml-16 absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter  blur-sm animate-blob"></div>
          <div className="absolute top-0 right-10 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-sm  animate-blob animation-delay-2000"></div>
          <div className="ml-[5rem] absolute bottom-[8rem] left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-sm animate-blob animation-delay-4000"></div>
          <div className="absolute top-0">
            <section className="py-10 ">
              <h1 className="text-white text-6xl font-inter cursor-pointer">
                Be Incredible. <br />{" "}
                <span className="text-transparent bg-gradient-to-r from-emerald-500 to-blue-500 bg-clip-text hover:bg-gradient-to-r hover:from-indigo-500 hover:to-blue-500">
                  Gain Experience
                </span>
                <br />
                <span className="w-fit">
                  Get Ahead, Faster
                  <img
                    src="images/wavvy.png"
                    alt="wiggly lines"
                    className="w-[500px]"
                  />
                </span>
              </h1>
            </section>
            <section className="text-white w-[500px]">
              <p className="font-plex text-xl">
                Step into the shoes of real professionals with our premium role
                simulation platform.
                <br />
                Master in-demand skills through immersive experiences that
                replicate the actual workplace.
              </p>
            </section>
            <section className="pt-10">
              <button className="px-16 py-5 bg-emerald-500 text-white font-inter font-bold rounded-lg hover:bg-emerald-700 duration-200">
                Get Started
              </button>
            </section>
          </div>
        </div>
        <img
          src="images/g.jpg"
          alt=""
          className="absolute right-0 top-0 z-[100] h-screen lg:w-[50%] object-cover"
        />
      </section>


      <section className="grid grid-cols-5 gap-2 px-16 pb-16">
        <section className="col-span-3 h-80 text-white bg-black rounded-xl px-10 py-5 flex flex-col">
          <h3 className="text-6xl font-plex">Career Growth <br /> for <span className="text-emerald-500">Everyone</span></h3>
          <button className="mt-auto w-fit py-3 px-16 bg-emerald-500 rounded-[30px] font-bold font-plex hover:bg-emerald-700 duration-300">Features</button>
        </section>
        <section className="col-span-2 h-80 bg-white rounded-xl overflow-hidden relative">
          <img src="images/grid-pic.jpg" alt="pic" className="object-cover h-full"/>
          <button className="absolute bottom-0 ml-10 mb-5 px-14 py-2 bg-white font-plex font-bold text-black rounded-[30px]">Find Out More</button>
        </section>
        <section className="col-span-2 h-64 bg-[#dcdcdc] rounded-xl pl-10 pr-5 py-5">
          <h3 className="text-4xl font-plex font-bold italic">Learn By Doing</h3>
          <p className="text-xl mt-3">Hone and master critical skills in a safe, risk-free environment. Improve your decision-making, problem-solving, and communication abilities.</p>
        </section>
        <section className="col-span-3 h-64 bg-emerald-500 rounded-xl px-10 py-5 relative">
          <h3 className="text-4xl font-bold font-plex"><span className="underline underline-offset-1 decoration-white">Explore</span> Different <span className="bg-white">Career Paths</span></h3>
          <p className="text-xl mt-3">Test-drive different professions and discover your true passion. Uncover your ideal career path before committing to a specific role, saving you valuable time and energy.</p>
          <img src="icons/briefcase.svg" alt="briefcase" className="w-[80px] absolute right-[-1em] rotate-12"/>
        </section>
      </section>

    </main>
  );
};

export default Home;
