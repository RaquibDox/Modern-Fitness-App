import React from 'react'

type exerciseType = {
  bodyPart: string,
  equipment: string,
  gifUrn: string,
  id: string,
  name: string,
  target: string
}

type ParentProps = {
  setExercises: (newItems: exerciseType[]) => void,
  bodyPart: string,
  setBodyPart: (part: string) => void
}

const Exercises: React.FC<ParentProps> = ({setExercises, bodyPart, setBodyPart }) => {
  return (
    <div>Exercises</div>
  )
}

export default Exercises