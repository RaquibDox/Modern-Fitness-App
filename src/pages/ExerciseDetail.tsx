/* eslint-disable @typescript-eslint/no-unused-vars */
import React,{ useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'

import { fetchData, exerciseOptions } from '../utils/fetchData'
import Detail from '../components/Detail'
import ExerciseVideos from '../components/ExerciseVideos'
import SimilarExercises from '../components/SimilarExercises'

const ExerciseDetail = () => {
  return (
    <div>
      <Detail />
      <ExerciseVideos />
      <SimilarExercises />
    </div>
  )
}

export default ExerciseDetail