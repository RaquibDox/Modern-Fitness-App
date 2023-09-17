import BodyPart from "./BodyPart";
import Slider from "react-slick";
import { responsiveSettings } from "../../utils/sliderSettings";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import { useEffect, useMemo, useState } from "react";
import { getBodyParts } from "../../features/bodypart/bodyPartSlice";
import { useAppSelector } from "../../store/store";

  const HomePageScrollbar = () => {

  const [bodyParts, setBodyParts] = useState<string[]>([]);

  const bodyPartsData: string[] = useAppSelector(getBodyParts);
  useEffect(() => {
      setBodyParts(['all', ...bodyPartsData]);
  },[bodyPartsData]);


  const calculateRespSettings = useMemo(() => {
      return responsiveSettings(bodyParts.length, 280, true)
  },[bodyParts.length])

  return (
    <div className="home-page-slider w-[95vw] p-5 m-auto">
      <Slider {...calculateRespSettings}>
        
        {bodyParts.map((item: string) => (
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
};

export default HomePageScrollbar