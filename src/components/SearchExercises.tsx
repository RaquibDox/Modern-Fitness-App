import { useState } from 'react'

const SearchExercises = () => {
  const [search, setSearch] = useState<string>('');

  const handleSearch = async () => {
    if(search){
      console.log("hi");
      // const exercisesData = await fetchData();
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
    </div>
  )
}

export default SearchExercises