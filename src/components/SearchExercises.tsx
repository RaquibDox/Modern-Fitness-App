import React, { useEffect, useState } from 'react'
import HomePageScrollbar from './HomePageScrollbar';
import { ExerciseType, ParentProps } from '../utils/tsTypes';

import { useAppSelector } from '../store/store';
import { getAllExercises } from '../features/exercise/exerciseSlice';
import { getBodyParts } from '../features/bodypart/bodyPartSlice';


const SearchExercises: React.FC<ParentProps> = ({setExercises, bodyPart, setBodyPart }) => {
  const [search, setSearch] = useState<string>('');
  const [bodyParts, setBodyParts] = useState<string[]>([]);

  // console.log("🚀 ~ file: fetchData.tsx:9 ~ export  exerciseOptions.headers.'X-RapidAPI-Key':", exerciseOptions.headers)

  const bodyPartsData: string[] = useAppSelector(getBodyParts);
  useEffect(() => {
      setBodyParts(['all', ...bodyPartsData]);
  },[bodyPartsData]);

  const exercisesData: ExerciseType[] = useAppSelector(getAllExercises);
  const handleSearch = () => {
    if(search){
      
      const searchedExercises = exercisesData.filter((exercise: ExerciseType) => 
        exercise.name.toLowerCase().includes(search)
        || exercise.equipment.toLowerCase().includes(search)
        || exercise.bodyPart.toLowerCase().includes(search)
        || exercise.target.toLowerCase().includes(search)
      );
      
      setSearch('');
      setExercises(searchedExercises);
      
    }
  }

  return (
    <div className='flex flex-col justify-center items-center mt-10 p-5 font-sans'>
      <p className="font-bold text-3xl lg:text-5xl mb-[50px] text-center">Awesome Exercises You <br/>
      Should Know</p>
      <div>
        <input 
        className='px-4 h-[56px] text-xl desktop:text-2xl font-semibold rounded-s-lg w-[350px] sm:w-[540px] desktop:w-[800px] bg-white border-2 outline-none'
        type="text" 
        value={search}
        onChange={(e) => {setSearch(e.target.value.toLowerCase())}}
        placeholder='Search Exercises'
        />
        <button className='m-0 search-btn bg-accent-light-color-1 text-white w-[100px] sm:w-[175px] text-lg sm:text-xl h-[56px] rounded-e-lg border-none outline-none'
        onClick={handleSearch}>Search</button>
      </div>
      <div className='relative w-full p-5'>
        <HomePageScrollbar 
          data={bodyParts}
          bodyPart={bodyPart}
          setBodyPart={setBodyPart}
        />
      </div>
    </div>
  )
}

export default SearchExercises