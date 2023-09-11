import React, { useEffect, useState } from 'react'
import HomePageScrollbar from './HomePageScrollbar';
import { ParentProps } from '../utils/tsTypes';

import { useAppSelector } from '../store/store';
import { useAppDispatch } from '../store/store';
import { getBodyParts } from '../features/bodypart/bodyPartSlice';
import { filterExercises } from '../features/exercise/exerciseSlice';


const SearchExercises: React.FC<ParentProps> = () => {
  const [search, setSearch] = useState<string>('');
  const [bodyParts, setBodyParts] = useState<string[]>([]);

  const dispatch = useAppDispatch()

  const bodyPartsData: string[] = useAppSelector(getBodyParts);
  useEffect(() => {
      setBodyParts(['all', ...bodyPartsData]);
  },[bodyPartsData]);

  const handleSearch = () => {
    
    if(search){
      dispatch(filterExercises({search: search}));     
      setSearch('');
    }
  }

  return (
    <div className='flex flex-col justify-center items-center mt-10 p-5 font-sans'>
      <p className="font-bold text-3xl lg:text-5xl mb-[50px] text-center">Awesome Exercises You <br/>
      Should Know</p>
      <div className='flex flex-nowrap'>
        <input 
        className='px-4 h-[46px] sm:h-[56px] text-lg sm:text-xl desktop:text-2xl font-semibold rounded-s-lg w-[60vw] bg-white border-2 outline-none'
        type="text" 
        value={search}
        onChange={(e) => {setSearch(e.target.value.toLowerCase())}}
        placeholder='Search Exercises'
        />
        <button className='m-0 search-btn bg-accent-light-color-1 text-white w-[90px] sm:w-[175px] text-lg sm:text-xl h-[46px] sm:h-[56px] rounded-e-lg border-none outline-none font-semibold'
        onClick={handleSearch}>Search</button>
      </div>
      <div className='relative w-full p-5'>
        <HomePageScrollbar 
          data={bodyParts}
        />
      </div>
    </div>
  )
}

export default SearchExercises