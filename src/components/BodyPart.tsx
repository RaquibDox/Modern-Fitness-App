import React from 'react'
import Icon from '../assets/icons/gym.png'

import { useAppDispatch } from '../store/store';
import { useAppSelector } from '../store/store';
import { changeBodyPart } from '../features/bodypart/bodyPartSlice';
import { getBodyPart } from '../features/bodypart/bodyPartSlice';

const BodyPart = ({item}: {item: string}) => {
  
  const dispatch = useAppDispatch();
  const storedBodyPart = useAppSelector(getBodyPart)

  return (
    <div
      onClick={() => {
        dispatch(changeBodyPart({bodyPart: item}))
        window.scrollTo({top: 1800, left: 100, behavior: 'smooth'});
      }}
      className={`bodyPart-card flex flex-col content-center items-center p-10 w-[270px] h-[270px] cursor-pointer gap-[47px] bg-gray-300 ${storedBodyPart == item ? 'border-t-4 border-accent-light-color-1 rounded-bl-3xl' : ''}`}
    >
      <img src={Icon} alt="dumbbell" className='w-10 h-10 m-4'/>
      <p className='text-2xl font-bold text-font-light-color capitalize'>
        {item}
      </p>
    </div>
  )
}

export default BodyPart