import { useEffect, useState } from 'react'
import { exerciseOptions, fetchData } from '../utils/fetchData';
import HorizontalScrollbar from './HorizontalScrollbar';

const SearchExercises = () => {
  const [search, setSearch] = useState<string>('');
  const [exercises, setExercises] = useState([]);
  const [bodyParts, setBodyParts] = useState<string[]>([]);

  // console.log("🚀 ~ file: fetchData.tsx:9 ~ export  exerciseOptions.headers.'X-RapidAPI-Key':", exerciseOptions.headers)

  type exerciseType = {
    bodyPart: string,
    equipment: string,
    gifUrn: string,
    id: string,
    name: string,
    target: string
  }

  useEffect(() => {
    const fetchExercisesData = async () => {
      const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions);

      setBodyParts(['all', ...bodyPartsData]);
    }

    fetchExercisesData();
  },[]);

  const handleSearch = async () => {
    if(search){
      const exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);

      // console.log(exercisesData);

      const searchedExercises = exercisesData.filter((exercise: exerciseType) => exercise.name.toLowerCase().includes(search)
      || exercise.equipment.toLowerCase().includes(search)
      || exercise.bodyPart.toLowerCase().includes(search)
      || exercise.target.toLowerCase().includes(search)
      );
      
      setSearch('');
      setExercises(searchedExercises);

      console.log(exercises);
      
    }
  }

  return (
    <div className='flex flex-col justify-center items-center mt-10 p-5 font-sans'>
      <p className="font-blod text-3xl lg:text-5xl mb-[50px] text-center">Awesome Exercises You <br/>
      Should Know</p>
      <div>
        <input 
        className='px-4 h-[56px] text-xl desktop:text-2xl font-semibold rounded-s-lg w-[350px] sm:w-[540px] desktop:w-[800px] bg-white border-2 outline-none'
        type="text" 
        value={search}
        onChange={(e) => {setSearch(e.target.value.toLowerCase())}}
        placeholder='Search Exercises'
        />
        <button className='m-0 search-btn bg-acent-light-color-1 text-white w-[100px] sm:w-[175px] text-lg sm:text-xl h-[56px] rounded-e-lg border-none outline-none'
        onClick={handleSearch}>Search</button>
      </div>
      <div className='relative w-full p-5'>
        <HorizontalScrollbar data={bodyParts} />
      </div>
    </div>
  )
}

export default SearchExercises