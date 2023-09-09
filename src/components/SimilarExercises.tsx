import React from 'react'
import SimilarScrollBar from './SimilarScrollBar'
import Loader from './Loader'

import { ExerciseType } from '../utils/tsTypes'

import { useAppSelector } from '../store/store';
import { getAllExercises } from '../features/exercise/exerciseSlice';

const SimilarExercises = ({targetMuscle, equipment}: {targetMuscle: string, equipment: string}) => {

  // console.log(targetMuscle, equipment);
  
  const exercisesData: ExerciseType[] = useAppSelector(getAllExercises);

  const targetMuscleExercises = exercisesData.filter((exercise: ExerciseType) => 
  exercise.target.toLowerCase().includes(targetMuscle))

  const equipmentExercises = exercisesData.filter((exercise: ExerciseType) => 
  exercise.equipment.toLowerCase().includes(equipment))
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