import {memo} from 'react'
import { ExerciseType } from '../utils/tsTypes'
import { Link } from 'react-router-dom';

const ExerciseCard = memo(({exercise}: {exercise: ExerciseType}) => {
  
  return (
    <Link to={`/exercise/${exercise.id}`}
    className='exercise-card h-[445px] exercise-card-w bg-white border-t-4 border-solid border-accent-light-color-1 rounded-bl-3xl no-underline flex justify-center flex-col pb-[10px] scale-100 duration-300 ease-in-out'
    >
        <img src={exercise.gifUrl} alt={exercise.name} loading='lazy' className='h-[326px] relative -top-3 opacity-100'/>
        <div className='flex flex-row'>
            <button className='px-2 py-1 ml-5 font-sans text-sm text-white capitalize bg-accent-light-color-1 rounded-2xl'>
              {exercise.bodyPart}
            </button>
            <button className='px-2 py-1 ml-5 font-sans text-sm text-white capitalize bg-accent-light-color-3 rounded-2xl'>
              {exercise.target}
            </button>
        </div>
        <h2 className='pb-3 mt-3 ml-5 font-sans text-xl font-bold text-black capitalize text-ellipsis line-clamp-2'>
          {exercise.name}
        </h2>
    </Link>
  )
});

export default ExerciseCard