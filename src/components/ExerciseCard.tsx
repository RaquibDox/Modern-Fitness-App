import React, {memo} from 'react'
import { ExerciseType } from '../utils/tsTypes'
import { Link } from 'react-router-dom';

const ExerciseCard = memo(({exercise}: {exercise: ExerciseType}) => {
  // console.log(exercise.gifUrl);
  
  return (
    <Link to={`/exercise/${exercise.id}`}
    className='exercise-card h-[445px] exercise-card-w bg-white border-t-4 border-solid border-accent-light-color-1 rounded-bl-3xl no-underline flex justify-center flex-col pb-[10px] scale-100 duration-300 ease-in-out'
    >
        <img src={exercise.gifUrl} alt={exercise.name} loading='lazy' className='h-[326px] relative -top-3 opacity-100'/>
        <div className='flex flex-row'>
            <button className='ml-5 px-2 py-1 text-white bg-secondary-light-color text-sm rounded-2xl capitalize font-sans'>
              {exercise.bodyPart}
            </button>
            <button className='ml-5 px-2 py-1 text-white bg-accent-light-color-3 text-sm rounded-2xl capitalize font-sans'>
              {exercise.target}
            </button>
        </div>
        <h2 className='ml-5 text-black font-bold mt-3 pb-3 capitalize text-xl font-sans text-ellipsis line-clamp-2'>
          {exercise.name}
        </h2>
    </Link>
  )
});

export default ExerciseCard