// import React from 'react'
import { Link } from "react-router-dom"

import Logo from '../assets/images/Logo.png'

const Navbar = () => {
  return (
    <>
        <div className="flex justify-normal gap-10 sm:gap-32 mt-5 sm:mt-8 px-5">
            <Link to="/">
                <img src={Logo} alt="logo" className="w-12 h-12 mx-5 my-0"/>
            </Link>
            <div className="flex gap-10 text-base items-end">
                <Link to="/" className="no-underline text-font-light-color border-b-4 border-acent-light-color-2">Home</Link>
                <a href="#exercises" className="no-underline text-font-light-color">Exercises</a>
            </div>
        </div>
    </>
  )
}

export default Navbar