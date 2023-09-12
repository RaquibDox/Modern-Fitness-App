// import React from 'react'

const HeroBanner = () => {
  return (
    <div className="mt-16 lg:mt-52 sm:ml-12 relative p-5 font-sans">
      <p className="text-accent-light-color-1 font-semibold text-2xl">
        Fitness Club
      </p>
      <p className="my-2 sm:my-3 font-bold text-4xl lg:text-5xl  lg:leading-[54px]">
        Sweat, Smile <br/> and Repeat
      </p>
      <p className="text-xl desktop:text-2xl mb-6">
        Check out the most effective exercises
      </p>
      <a href="#exercises">
        <button  className="button button--warning" >Explore Exercises</button>
      </a>
      <p className='relative top-[6rem] font-semibold text-font-accent-light-color opacity-10 hidden desktop:block text-[200px] -z-50'>
        Exercise
      </p>
      <img src='../assets/images/banner.png' alt='banner' className="hero-banner-img hidden desktop:block absolute right-10 top-0 w-[700px] h-[900px] mt-[-330px]"/>
    </div>
  )
}

export default HeroBanner