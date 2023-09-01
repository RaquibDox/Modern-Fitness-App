import React from 'react'
import { ExerciseDetailsType } from '../utils/tsTypes'
import BodyPartImage from '../assets/icons/body-part.png'
import TargetImage from '../assets/icons/target.png'
import EquipmentImage from '../assets/icons/equipment.png'

// import demoGif from '../assets/demo.gif'

const Detail = ({exerciseDetail}: {exerciseDetail: ExerciseDetailsType }) => {
  const { bodyPart, equipment, gifUrl, name, target} = exerciseDetail;

  const InfoButtons = () => {

    const extraDetail = [
      {
        icon: BodyPartImage,
        name: bodyPart
      },
      {
        icon: TargetImage,
        name: target
      },
      {
        icon: EquipmentImage,
        name: equipment
      }
    ]
  
    return (
      <div className='flex flex-col sm:gap-4 gap-2'>
      {extraDetail.map((item) => (
      <div key={item.name} className='flex gap-2 sm:gap-6 items-center'>
        <button className='m-0 bg-button-light-color rounded-[50%] sm:w-[80px] sm:h-[80px] w-12 h-12'>
          <img src={item.icon} alt={bodyPart} className='block m-auto sm:w-[50px] sm:h-[50px] w-8 h-8'/>
        </button>
        <h3 className='m-0 text-xl sm:text-3xl capitalize'>
          {item.name}
        </h3>
      </div>
    ))}
    </div>
    )
  }

  return (
    <div className='flex gap-[60px] flex-col lg:flex-row p-5 items-center font-sans'>
      
      <img src={gifUrl} alt={name} loading='lazy' className='detail-image'/>

      <div className='flex flex-col gap-4 sm:gap-6 items-center m-4'>
        <div className='flex flex-col gap-5 lg:gap-9'>
          <h2 className='text-3xl sm:text-4xl font-semibold capitalize'>
            {name}
          </h2>
          <p className='text-xl sm:text-2xl'>
            {`Exercises keep you strong. ${name.charAt(0).toUpperCase() + name.slice(1)} is one of the best exercises to target your ${target}. It will help you improve your mood and gain energy`}
          </p>
        </div>
        
        <InfoButtons />
      </div>
    </div>
  )
}

export default Detail