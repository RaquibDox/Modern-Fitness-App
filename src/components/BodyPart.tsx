import React from 'react'
import { SetBodyPartType } from '../utils/tsTypes';

const BodyPart = ({item, bodyPart, setBodyPart}: {item: string; bodyPart: string; setBodyPart: SetBodyPartType}) => {
    console.log(item, bodyPart, setBodyPart);
    
  return (
    <div>BodyPart</div>
  )
}

export default BodyPart