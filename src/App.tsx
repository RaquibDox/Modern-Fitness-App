import {useEffect} from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import ExerciseDetail from './pages/ExerciseDetail'
import Footer from './components/Footer'

// import { useDispatch } from 'react-redux'
import { useAppDispatch } from './store/store'
import { fetchExercises } from './features/exercise/exerciseSlice'
import { fetchBodyPart } from './features/bodypart/bodyPartSlice'

const App = () => {

  const dispatch = useAppDispatch();

  useEffect(() =>{
    dispatch(fetchExercises());
    dispatch(fetchBodyPart());
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/exercise/:id" element={<ExerciseDetail />} />
      </Routes>
      <Footer />
      </>
  )
}

export default App
