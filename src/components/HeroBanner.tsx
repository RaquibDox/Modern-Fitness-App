// import React from 'react'

import HeroBannerImage from '../assets/images/banner.png'

const HeroBanner = () => {
  return (
    <div className="mt-16 lg:mt-52 sm:ml-12 relative p-5 font-sans">
      <p className="text-acent-light-color-1 font-semibold text-2xl">
        Fitness Club
      </p>
      <p className="my-2 sm:my-3 font-bold text-4xl lg:text-5xl  lg:leading-[54px]">
        Sweat, Smile <br/> and Repeat
      </p>
      <p className="text-xl desktop:text-2xl mb-6">
        Cheack out the most effective exercises
      </p>
      <a href="#exercises">
        <button  className="button button--warning" >Explore Exercises</button>
      </a>
      <p className='font-semibold text-font-acent-light-color opacity-10 hidden desktop:block text-[200px] -z-50'>
        Exercise
      </p>
      <img src={HeroBannerImage} alt='banner' className="hero-banner-img"/>
    </div>
  )
}

export default HeroBanner