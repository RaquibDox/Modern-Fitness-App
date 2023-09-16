import BodyPart from "./BodyPart";
import Slider from "react-slick";
import { responsiveSettings } from "../../utils/sliderSettings";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import { memo, useMemo } from "react";

  const HomePageScrollbar = memo(({data}: {data: string[]}) => {

  const calculateRespSettings = useMemo(() => {
      return responsiveSettings(data.length, 280, true)
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
                />
              </div>
            ))
        }
      </Slider>
    </div>
  )
});

export default HomePageScrollbar