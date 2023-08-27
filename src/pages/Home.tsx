import React, {useState} from 'react'

import Exercises from "../components/Exercises"
import HeroBanner from "../components/HeroBanner"
import SearchExercises from "../components/SearchExercises"
import { ExerciseType } from '../utils/tsTypes'

const Home: React.FC = () => {

  const [bodyPart, setBodyPart] = useState('all');
  const [exercises, setExercises] = useState<ExerciseType[]>([]);

  console.warn(exercises);

  return (
    <>
      <div>
        <HeroBanner />
        <SearchExercises 
          setExercises={setExercises}
          bodyPart={bodyPart}
          setBodyPart={setBodyPart}
        />
        <Exercises 
          setExercises={setExercises}
          bodyPart={bodyPart}
          setBodyPart={setBodyPart}
        />
      </div>
    </>
  )
}

export default Home