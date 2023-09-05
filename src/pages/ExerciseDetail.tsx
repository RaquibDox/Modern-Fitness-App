/* eslint-disable @typescript-eslint/no-unused-vars */
import React,{ useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'

import { ExerciseDetailsType } from '../utils/tsTypes'
import { fetchData, exerciseOptions, youtubeOptions } from '../utils/fetchData'
import Detail from '../components/Detail'
import ExerciseVideos from '../components/ExerciseVideos'
import SimilarExercises from '../components/SimilarExercises'

const ExerciseDetail = () => {

  const [exerciseDetail, setExerciseDetail] = useState<ExerciseDetailsType>({
    bodyPart: "",
    equipment: "",
    gifUrl: "",
    id: "",
    name: "",
    target: ""
  });
  const [exerciseVideos, setExerciseVideos] = useState([]);
  const [targetMuscleExercises, setTargetMuscleExercises] = useState([]);
  const [equipmentExercises, setEquipmentExercises] = useState([]);

  const {id} = useParams();

  useEffect(() => {
    (async () => {
      console.log(id);
      
      const exerciseDbUrl = 'https://exercisedb.p.rapidapi.com';
      const youtubeSearchUrl = 'https://youtube-search-and-download.p.rapidapi.com';

      const exerciseDetailData = await fetchData(`${exerciseDbUrl}/exercises/exercise/${id}`, exerciseOptions);
      // const exerciseDetailData = { bodyPart: "waist", equipment: "body weight", id: "0001", name: "3/4 sit-up", target: "abs" };
      setExerciseDetail(exerciseDetailData);
      // console.log(exerciseDetailData);

      const exerciseVideoData = await fetchData(`${youtubeSearchUrl}/search?query=${exerciseDetailData.name} exercise`, youtubeOptions);
      // console.log("video data : ",exerciseVideoData);    
      setExerciseVideos(exerciseVideoData.contents);

      const targetMuscleExercisesData = await fetchData(`${exerciseDbUrl}/exercises/target/${exerciseDetailData.target}`, exerciseOptions);
      setTargetMuscleExercises(targetMuscleExercisesData)
      console.log("🚀 ~ file: ExerciseDetail.tsx:43 ~ targetMuscleExercisesData:", targetMuscleExercisesData)
      
      const equipmentExercisesData = await fetchData(`${exerciseDbUrl}/exercises/equipment/${exerciseDetailData.equipment}`, exerciseOptions);
      setEquipmentExercises(equipmentExercisesData)
      console.log("🚀 ~ file: ExerciseDetail.tsx:47 ~ equipmentMuscleExercisesData:", equipmentExercisesData)
      
    })()
  }, [id])
  

  return (
    <div>
      <Detail exerciseDetail={exerciseDetail}/>
      <ExerciseVideos exerciseVideos={exerciseVideos} name={exerciseDetail.name}/>
      <SimilarExercises targetMuscleExercises={targetMuscleExercises} equipmentExercises={equipmentExercises}/>
    </div>
  )
}

export default ExerciseDetail