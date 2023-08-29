import React from 'react'
import { ExerciseType } from '../utils/tsTypes'
import { Link } from 'react-router-dom';

const ExerciseCard = ({exercise}: {exercise: ExerciseType}) => {
    
  return (
    <Link to={`/exercise/${exercise.id}`}
    className='exercise-card'
    >
        <img src={exercise.gifUrl} alt={exercise.name} loading='lazy'/>
        <div className='flex flex-row'>
            <button className='ml-5 px-2 py-1 text-white bg-secondary-light-color text-sm rounded-2xl capitalize font-sans'>
              {exercise.bodyPart}
            </button>
            <button className='ml-5 px-2 py-1 text-white bg-accent-light-color-3 text-sm rounded-2xl capitalize font-sans'>
              {exercise.target}
            </button>
        </div>
        <p className='ml-5 text-font-light-color font-bold mt-3 pb-3 capitalize text-xl font-sans'>
          {exercise.name}
        </p>
    </Link>
  )
}

export default ExerciseCard