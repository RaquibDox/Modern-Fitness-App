import { SliderSettingsType } from "./tsTypes";

export function responsiveSettings(totalSlides: number, width: number, dotsVisible: boolean): SliderSettingsType{

    const maxSlides = 10;

    return {
      dots: dotsVisible,
      infinite: false,
      lazyLoad: "progressive",
      speed: 500,
      slidesToShow: slideToShowValue(maxSlides, totalSlides),
      slidesToScroll: slideToScrollValue(maxSlides, totalSlides),
      responsive: autoBreakpoint(width, totalSlides, maxSlides)
    }
  }

  function slideToShowValue(value: number, totalSlides: number) {
    if(value > totalSlides){
      return totalSlides;
    }
    else{
      return value;
    }
  }

  function slideToScrollValue(value: number, totalSlides: number) {
    if(value > totalSlides){
      return Math.ceil((totalSlides) / 3);
    }
    else{
      return Math.ceil((value) / 3);
    }
  }

  function autoBreakpoint(width: number, totalSlides: number, maxSlides: number) {
    const adjustedWidth = width + 20;
    const arr = [];
    for(let i = 1; i <= maxSlides; i++){
      arr.push({
        breakpoint: (adjustedWidth * (i + 1)),
        settings: {
          slidesToShow: slideToShowValue(Math.max(i), totalSlides),
          slidesToScroll: slideToScrollValue(Math.max(i), totalSlides),
        }
      })
    }
    return arr;
  }