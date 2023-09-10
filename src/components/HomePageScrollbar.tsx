import BodyPart from "./BodyPart";
import { SetBodyPartType } from "../utils/tsTypes";
import Slider from "react-slick";
import { responsiveSettings } from "../utils/sliderSettings";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import { memo, useMemo } from "react";

  const HorizontalScrollbar = memo(({data, bodyPart, setBodyPart}: {data: string[]; bodyPart: string; setBodyPart: SetBodyPartType}) => {

  const calculateRespSettings = useMemo(() => {
      return responsiveSettings(data.length, 500, false)
  },[data.length])


  return (
    <div className="home-page-slider">
      <Slider {...calculateRespSettings}>
        
        {data.map((item: string) => (
              <div
                key={item}
                title={item}
              >
                <BodyPart 
                  item={item}
                  bodyPart={bodyPart}
                  setBodyPart={setBodyPart}
                />
              </div>
            ))
        }
      </Slider>
    </div>
  )
});

export default HorizontalScrollbar