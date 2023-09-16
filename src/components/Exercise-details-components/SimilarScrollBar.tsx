import ExerciseCard from "../ExerciseCard";
import Slider from "react-slick";
import { responsiveSettings } from "../../utils/sliderSettings";

import { ExerciseType } from "../../utils/tsTypes";
import { useMemo } from "react";

  const SimilarScrollBar = ({data}: {data: ExerciseType[]}) => {

    const calculateRespSettings = useMemo(() => {
      return responsiveSettings(data.length, 500, false)
    },[data.length])

  return (
    <div className= "details-slider">
      <Slider {...calculateRespSettings}>
        
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