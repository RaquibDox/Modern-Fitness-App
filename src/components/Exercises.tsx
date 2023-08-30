import React, { useState, useEffect } from 'react'
import ReactPaginate from 'react-paginate'
import { ParentPropsExercises, ExerciseType } from '../utils/tsTypes'
import { exerciseOptions, fetchData } from '../utils/fetchData'
import ExerciseCard from './ExerciseCard'
const Exercises: React.FC<ParentPropsExercises> = ({exercises, setExercises, bodyPart}) => {

  const itemsPerPage = 8;

  const [itemOffset, setItemOffset] = useState(0);
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = exercises.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(exercises.length / itemsPerPage);

  const handlePageClick = (event: any) => {
    // console.log(event.selected);  
    window.scrollTo({ top: 1800, behavior: 'smooth'})
    const newOffset = (event.selected * itemsPerPage) % exercises.length;
    setItemOffset(newOffset);
  };

  useEffect(() => {
    (async () => {
      let exercisesData = [];

      if(bodyPart === 'all'){
        exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);
      } else {
        exercisesData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`, exerciseOptions);
      }

      setExercises(exercisesData);
    })()
  }, [bodyPart]);

  return (
    <>
      <Items currentItems={currentItems} />
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
        containerClassName="pagination"
        pageLinkClassName="page-num"
        previousLinkClassName="page-num"
        nextLinkClassName="page-num"
        activeLinkClassName="active"
      />
    </>
  )
}


function Items({ currentItems }: {currentItems: ExerciseType[]}) {
  return (
    <>
      <div id="exercises"
      className='mt-12 lg:mt-[110px] p-5'
      >
        <h3 className='mb-12 font-sans text-4xl font-medium'>
          Showing Results
        </h3>
        <div className='flex flex-row flex-wrap justify-center gap-12 lg:gap-[110px]'>
          {currentItems.map((exercise, index) => (
            <ExerciseCard key={index} exercise={exercise}/>
          ))}
        </div>
      </div>
    </>
  );
}

export default Exercises