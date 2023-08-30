/* eslint-disable @typescript-eslint/no-unused-vars */
import React,{ useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'

import { ExerciseDetailsType } from '../utils/tsTypes'
import { fetchData, exerciseOptions } from '../utils/fetchData'
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

  const {id} = useParams();

  useEffect(() => {
    (async () => {
      console.log(id);
      
      const exerciseDbUrl = 'https://exercisedb.p.rapidapi.com';
      const youtubeSearchUrl = 'https://youtube-search-and-download.p.rapidapi.com';

      // const exerciseDetailData = await fetchData(`${exerciseDbUrl}/exercises/exercise/${id}`, exerciseOptions);
      const exerciseDetailData = { bodyPart: "waist", equipment: "body weight", gifUrl: "", id: "0001", name: "3/4 sit-up", target: "abs" }
      setExerciseDetail(exerciseDetailData);
      console.log(exerciseDetailData);
      
    })()
  }, [id])
  

  return (
    <div>
      <Detail exerciseDetail={exerciseDetail}/>
      <ExerciseVideos />
      <SimilarExercises />
    </div>
  )
}

export default ExerciseDetail