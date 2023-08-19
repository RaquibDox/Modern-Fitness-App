// import {useState} from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import ExerciseDetail from './pages/ExerciseDetail'
import Footer from './components/Footer'

const App = () => {
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
