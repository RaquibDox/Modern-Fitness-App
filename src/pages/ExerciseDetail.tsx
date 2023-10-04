import { useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'

import { ExerciseType } from '../utils/tsTypes'
import { fetchData, exerciseOptions, youtubeOptions } from '../utils/fetchData'
import Detail from '../components/Exercise-details-components/Detail'
import ExerciseVideos from '../components/Exercise-details-components/ExerciseVideos'
import SimilarExercises from '../components/Exercise-details-components/SimilarExercises'
import Loader from '../components/Loader'

const ExerciseDetail = () => {

  const [exerciseDetail, setExerciseDetail] = useState<ExerciseType>({
    bodyPart: "",
    equipment: "",
    gifUrl: "",
    id: "",
    name: "",
    target: ""
  });
  const [exerciseVideos, setExerciseVideos] = useState([]);
  const [targetMuscle, setTargetMuscle] = useState('');
  const [equipment, setEquipment] = useState('[]');

  const [isLoading, setIsLoading] = useState(false);

  const {id} = useParams();

  window.scrollTo({top: 0, behavior: 'smooth'});

  useEffect(() => {
    console.log(id);
    
    (async () => {

      window.scrollTo({top: 0, behavior: 'smooth'});
      
      const exerciseDbUrl = 'https://exercisedb.p.rapidapi.com';
      const youtubeSearchUrl = 'https://youtube-search-and-download.p.rapidapi.com';

      const exerciseDetailData = await fetchData(`${exerciseDbUrl}/exercises/exercise/${id}`, exerciseOptions);
      setExerciseDetail(exerciseDetailData);

      const exerciseVideoData = await fetchData(`${youtubeSearchUrl}/search?query=${exerciseDetailData.name} exercise`, youtubeOptions);
      setExerciseVideos(exerciseVideoData.contents);

      setTargetMuscle(exerciseDetailData.target);

      setEquipment(exerciseDetailData.equipment);
      
    })()
  }, [id])

  useEffect(() =>{
    setIsLoading(true);
    
    return () => {setTimeout(() => { setIsLoading(false) }, 100)};
  },[exerciseDetail])

  return (
    isLoading ?
      <div className='flex items-center h-screen'>
        <Loader />
      </div>
      :
      <div>
        <Detail exerciseDetail={exerciseDetail}/>
        <ExerciseVideos exerciseVideos={exerciseVideos} name={exerciseDetail.name}/>
        <SimilarExercises targetMuscle={targetMuscle} equipment={equipment}/>
      </div>
  )
}

export default ExerciseDetail