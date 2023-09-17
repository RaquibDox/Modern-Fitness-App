import React, { useState } from 'react'

import { useAppDispatch } from '../../store/store';
import { filterExercises } from '../../features/exercise/exerciseSlice';


const SearchExercises = () => {
  const [search, setSearch] = useState<string>('');

  const dispatch = useAppDispatch()

  const handleSearch = () => {
    
    if(search){
      dispatch(filterExercises({search: search}));     
      setSearch('');
      window.scrollTo({top: 1800, left: 100, behavior: 'smooth'});
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
        <button className='m-0 search-btn bg-accent-light-color-1 text-white w-[90px] sm:w-[175px] text-lg sm:text-xl h-[46px] sm:h-[56px] rounded-e-lg border-none outline-none font-semibold hover:bg-[#fc4846]'
        onClick={handleSearch}>Search</button>
      </div>
    </div>
  )
}

export default SearchExercises