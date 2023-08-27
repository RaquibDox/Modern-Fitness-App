export type ExerciseType = {
    bodyPart: string,
    equipment: string,
    gifUrn: string,
    id: string,
    name: string,
    target: string
  }

  export type SetBodyPartType = (part: string) => void;
  
  export type ParentProps = {
    setExercises: (newItems: ExerciseType[]) => void,
    bodyPart: string,
    setBodyPart: SetBodyPartType
  }

