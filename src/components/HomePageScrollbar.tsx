import BodyPart from "./BodyPart";
import { SetBodyPartType } from "../utils/tsTypes";
import Slider from "react-slick";
import { responsiveSettings } from "../utils/sliderSettings";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

  const HorizontalScrollbar = ({data, bodyPart, setBodyPart}: {data: string[]; bodyPart: string; setBodyPart: SetBodyPartType}) => {

  return (
    <div className="home-page-slider">
      <Slider {...responsiveSettings(data.length, 280, true)}>
        
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
}

export default HorizontalScrollbar