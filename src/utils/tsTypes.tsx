export type ExerciseType = {
    bodyPart: string,
    equipment: string,
    gifUrl: string,
    id: string,
    name: string,
    target: string
  }

  export type fetchOptionsType = {
    method: string,
    params: {limit: string},
    headers: {
      'X-RapidAPI-Key': string,
      'X-RapidAPI-Host': string
    }
  }

  export type fetchYoutubeOptionsType = {
    method: string,
    headers: {
      'X-RapidAPI-Key': string,
      'X-RapidAPI-Host': string
    }
  }

  export type LazyLoadTypes = "ondemand" | "progressive" | "anticipated";

  export type SliderSettingsType = {dots: boolean, infinite: boolean, lazyLoad: LazyLoadTypes | undefined, speed: number, slidesToShow: number, slidesToScroll: number, responsive: { breakpoint: number, settings: { slidesToShow: number, slidesToScroll: number } }[] };

  type ThumbnailType =  {
    height: number, 
    url: string, 
    width: number
  }[]

  export type VideoType = {
    video: {
      channelId: string,
      channelName: string,
      description: string,
      lengthText: string,
      publishedTimeText: string,
      thumbnails: ThumbnailType,
      title: string,
      videoId: string,
      viewCountText: string
    }
  }

  // redux store types
  
  export type ExercisesStateType = {
    exercises: ExerciseType[],
    filteredExercises: ExerciseType[],
    status: "idle" | "loading" | "succeeded" | "failed",
    error : null | string
  }

  export type StateType = {
    exercises: ExercisesStateType
  }

  export type BodyPartInitialType = {
    bodyParts: string[],
    bodyPart: string,
    status: "idle" | "loading" | "succeeded" | "failed",
    error : null | string
  }

  export type BodyPartStateType = {
    bodyParts: BodyPartInitialType
  }

  export type SearchInitialType = {
    searchTerms: string[],
    status: "idle" | "loading" | "succeeded" | "failed",
    error : null | string
  }

  export type SearchStateType = {
    searchTerms: SearchInitialType
  }


