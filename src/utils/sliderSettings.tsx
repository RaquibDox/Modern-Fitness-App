export function responsiveSettings(totalSlides: number){

    const controlValue = 6;
    const breakPointControlValue = 200;

    function slideToShowValue(value: number) {
      if(value > totalSlides){
        return totalSlides;
      }
      else{
        return value;
      }
    }

    function slideToScrollValue(value: number) {
      if(value > totalSlides){
        return Math.ceil((totalSlides) / 3);
      }
      else{
        return Math.ceil((value) / 3);
      }
    }

    return {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: slideToShowValue(controlValue),
      slidesToScroll: slideToScrollValue(controlValue),
      responsive: [
        {
          breakpoint: 1470 + breakPointControlValue,
          settings: {
            slidesToShow: slideToShowValue(controlValue-1),
            slidesToScroll: slideToScrollValue(controlValue-1)
          }
        },
        {
          breakpoint: 1270 + breakPointControlValue,
          settings: {
            slidesToShow: slideToShowValue(controlValue-2),
            slidesToScroll: slideToScrollValue(controlValue-2)
          }
        },
        {
          breakpoint: 1070 + breakPointControlValue,
          settings: {
            slidesToShow: slideToShowValue(controlValue-3),
            slidesToScroll: slideToScrollValue(controlValue-3)
          }
        },
        {
          breakpoint: 765 + breakPointControlValue,
          settings: {
            slidesToShow: slideToShowValue(controlValue-4),
            slidesToScroll: slideToScrollValue(controlValue-4),
          }
        },
        {
          breakpoint: 500 + breakPointControlValue,
          settings: {
            slidesToShow: slideToShowValue(controlValue-5),
            slidesToScroll: slideToScrollValue(controlValue-5),
          }
        }
      ]
    }
  }