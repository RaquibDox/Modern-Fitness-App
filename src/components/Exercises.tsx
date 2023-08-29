import React, { useState, useEffect } from 'react'
import { ParentPropsExercises } from '../utils/tsTypes'
import { exerciseOptions, fetchData } from '../utils/fetchData'
import ExerciseCard from './ExerciseCard'

const Exercises: React.FC<ParentPropsExercises> = ({exercises, setExercises, bodyPart}) => {
  return (
    <div id="exercises"
      className='mt-12 lg:mt-[110px] p-5'
    >
      <h3 className='mb-12 font-sans text-4xl font-medium'>
        Showing Results
      </h3>
      <div className='flex flex-row flex-wrap justify-center gap-12 lg:gap-[110px]'>
        {exercises.map((exercise, index) => (
          <ExerciseCard key={index} exercise={exercise}/>
        ))}
      </div>
    </div>
  )
}

export default Exercises