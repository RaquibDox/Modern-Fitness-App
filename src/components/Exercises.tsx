/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, useEffect} from 'react'
import ReactPaginate from 'react-paginate'
import { ParentPropsExercises, ExerciseType } from '../utils/tsTypes'
import ExerciseCard from './ExerciseCard'

import Loader from './Loader'

import { useAppSelector } from '../store/store'
import { getAllExercises } from '../features/exercise/exerciseSlice'
import { getBodyPart } from '../features/bodypart/bodyPartSlice'

const Exercises: React.FC<ParentPropsExercises> = ({exercises, setExercises}) => {

  const itemsPerPage = 8;//it changes the number of items per page for the react paginate

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

  const exercisesData: ExerciseType[] = useAppSelector(getAllExercises);
  const bodyPart: string = useAppSelector(getBodyPart);
  useEffect(() => {
    (() => {
      let  exercisesToShow = [];

      if(bodyPart === 'all'){
        exercisesToShow = exercisesData;
      } else {
        exercisesToShow = exercisesData.filter((exercise: ExerciseType) => exercise.bodyPart.toLowerCase().includes(bodyPart));
      }

      setExercises(exercisesToShow);
    })()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [bodyPart, exercisesData]);

  return (
    <>
      <Items currentItems={currentItems} />
      <ReactPaginate
        breakLabel="..."
        nextLabel=">>"
        nextClassName="next"
        onPageChange={handlePageClick}
        pageRangeDisplayed={2}
        pageCount={pageCount}
        previousLabel="<<"
        previousClassName="previous"
        renderOnZeroPageCount={null}
        containerClassName="pagination"
        pageLinkClassName="page-num"
        previousLinkClassName="page-num"
        nextLinkClassName="page-num"
        activeLinkClassName="active"
        marginPagesDisplayed={1}
      />
    </>
  )
}

function Items({ currentItems }: {currentItems: ExerciseType[]}) {
  return (
    <>
      {currentItems.length !== 0 ?
      
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

      :

      <Loader />
          }
    </>
  );
}

export default Exercises