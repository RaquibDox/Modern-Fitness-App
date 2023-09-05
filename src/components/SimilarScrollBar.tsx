import ExerciseCard from "./ExerciseCard";
import Slider from "react-slick";
import { responsiveSettings } from "../utils/sliderSettings";

import { ExerciseType } from "../utils/tsTypes";

// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// const HorizontalScrollbar = ({data}: {data: string[] | {value?: string, id?: string}[]}) => {
  const SimilarScrollBar = ({data}: {data: ExerciseType[]}) => {

  return (
    <div className= "details-slider">
      <Slider {...responsiveSettings(data.length, 500, false)}>
        
            {data.map((item: ExerciseType) => (
              <div
                key={item.id}
                itemID={item.id}
                title={item.name}
              >
              <ExerciseCard key={item.id} exercise={item}/>
              </div>
            ))}

      </Slider>
    </div>
  )
}

export default SimilarScrollBar