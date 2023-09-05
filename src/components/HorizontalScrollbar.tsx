// import React, { ReactNode } from 'react'

import BodyPart from "./BodyPart";
import ExerciseCard from "./ExerciseCard";
import { SetBodyPartType } from "../utils/tsTypes";
import Slider from "react-slick";
import { responsiveSettings } from "../utils/sliderSettings";

// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// const HorizontalScrollbar = ({data}: {data: string[] | {value?: string, id?: string}[]}) => {
  const HorizontalScrollbar = ({data, bodyPart, setBodyPart, isBodyPart}: {data: string[]; bodyPart?: string; setBodyPart?: SetBodyPartType; isBodyPart?: boolean }) => {



  return (
    <div className={isBodyPart ? "home-page-slider" : "details-slider"}>
      <Slider {...responsiveSettings(data.length, isBodyPart? 280:500, isBodyPart? true:false)}>
        {data.map((item: string) => (
          <div
            key={item}
            // itemId={item.id || item}
            title={item}
          >
            {isBodyPart ? <BodyPart 
              item={item}
              bodyPart={bodyPart}
              setBodyPart={setBodyPart}
            />
          :
          <ExerciseCard key={item.id} exercise={item}/>}
          </div>
        ))}
      </Slider>
    </div>
  )
}

export default HorizontalScrollbar