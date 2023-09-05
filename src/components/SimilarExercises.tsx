import React from 'react'
import SimilarScrollBar from './SimilarScrollBar'
import Loader from './Loader'

import { ExerciseType } from '../utils/tsTypes'

const SimilarExercises = ({targetMuscleExercises, equipmentExercises}: {targetMuscleExercises: ExerciseType[], equipmentExercises: ExerciseType[]}) => {
  return (
    <div className='mt-0 lg:mt-[100px] font-sans'>
      <h2 className='text-3xl sm:text-4xl font-semibold ml-8'>Exercises that target the same muscle group</h2>
      <div className='w-screen'>
        {targetMuscleExercises.length ? <SimilarScrollBar data={targetMuscleExercises}/> : <Loader />}
      </div>
      <h2 className='text-3xl sm:text-4xl font-semibold ml-8'>Exercises that uses the same equipment</h2>
      <div className='w-screen'>
        {equipmentExercises.length ? <SimilarScrollBar data={equipmentExercises}/> : <Loader />}
      </div>
    </div>
  )
}

export default SimilarExercises