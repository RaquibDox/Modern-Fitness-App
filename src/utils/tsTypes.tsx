export type ExerciseType = {
    bodyPart: string,
    equipment: string,
    gifUrl: string,
    id: string,
    name: string,
    target: string
  }

  export type SetBodyPartType = (part: string) => void;
  export type SetExercisesType = (newItems: ExerciseType[]) => void;
  
  export type ParentProps = {
    setExercises: SetExercisesType,
    bodyPart: string,
    setBodyPart: SetBodyPartType
  }

  export type ParentPropsExercises = {
    exercises: ExerciseType[],
    setExercises: SetExercisesType,
    bodyPart: string
  }

  export type fetchOptionsType = {
    method: string,
    headers: {
      'X-RapidAPI-Key': string,
      'X-RapidAPI-Host': string
    }
  }

  type LazyLoadTypes = "ondemand" | "progressive" | "anticipated";

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
  
  export type ExercisesStateType = {
    exercises: ExerciseType[],
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


