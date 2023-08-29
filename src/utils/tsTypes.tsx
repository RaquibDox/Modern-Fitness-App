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


