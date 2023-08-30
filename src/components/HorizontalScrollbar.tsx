// import React, { ReactNode } from 'react'

import BodyPart from "./BodyPart";
import { SetBodyPartType } from "../utils/tsTypes";
import Slider from "react-slick";
import { responsiveSettings } from "../utils/sliderSettings";

// const HorizontalScrollbar = ({data}: {data: string[] | {value?: string, id?: string}[]}) => {
  const HorizontalScrollbar = ({data, bodyPart, setBodyPart}: {data: string[]; bodyPart: string; setBodyPart: SetBodyPartType }) => {

  return (
    <Slider {...responsiveSettings(data.length)}>
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
    </Slider>
  )
}

export default HorizontalScrollbar