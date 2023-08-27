// import React, { ReactNode } from 'react'

import BodyPart from "./BodyPart";
import { SetBodyPartType } from "../utils/tsTypes";

// const HorizontalScrollbar = ({data}: {data: string[] | {value?: string, id?: string}[]}) => {
  const HorizontalScrollbar = ({data, bodyPart, setBodyPart}: {data: string[]; bodyPart: string; setBodyPart: SetBodyPartType }) => {

  console.log(data);
  
  return (
    <div>
      {data.map((item: string) => (
        <div
          key={item}
          // itemId={item.id || item}
          title={item}
        >
          <BodyPart 
            item={item}
            bodyPart={bodyPart}
            setBodyPart={setBodyPart}
          />
        </div>
      ))}
    </div>
  )
}

export default HorizontalScrollbar