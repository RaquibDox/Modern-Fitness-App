import React, {useState} from 'react'

import Exercises from "../components/Exercises"
import HeroBanner from "../components/HeroBanner"
import SearchExercises from "../components/SearchExercises"
import { ExerciseType } from '../utils/tsTypes'

const Home: React.FC = () => {

  const [exercises, setExercises] = useState<ExerciseType[]>([]);

  return (
    <>
      <div>
        <HeroBanner />
        <SearchExercises 
          setExercises={setExercises}
        />
        <Exercises 
          exercises={exercises}
          setExercises={setExercises}
        />
      </div>
    </>
  )
}

export default Home