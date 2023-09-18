import {useEffect, useState} from 'react'
import { Link } from "react-router-dom"
import { useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  
  const [inHome, setInHome] = useState(true);

  useEffect(()=>{
    
    if(location.pathname == "/")
    setInHome(true);
    else
    setInHome(false)

  },[location.pathname])

  return (
    <>
        <div className="flex justify-normal gap-10 sm:gap-32 py-3 sm:py-5 px-5 sticky top-0 bg-secondary-light-color w-full z-[1000]">
            <Link to="/">
                <img src='../assets/images/Logo.png' alt="logo" className="w-12 h-12 mx-5 my-0"/>
            </Link>
            <div className="flex gap-10 text-base items-center">
                <Link to="/" className={`no-underline text-font-light-color ${inHome ? `border-b-4 border-accent-light-color-2` : ``}`}>Home</Link>
                <a href="#exercises" className={`no-underline text-font-light-color ${!inHome ? `border-b-4 border-accent-light-color-2` : ``}`}>Exercises</a>
            </div>
        </div>
    </>
  )
}

export default Navbar