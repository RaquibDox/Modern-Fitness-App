import React from 'react'
import Exercises from "../components/home-page-components/Exercises"
import HeroBanner from "../components/home-page-components/HeroBanner"
import SearchExercises from "../components/home-page-components/SearchExercises"

const Home: React.FC = () => {

  return (
    <>
      <div>
        <HeroBanner />
        <SearchExercises />
        <Exercises  />
      </div>
    </>
  )
}

export default Home