// import React from 'react'
import { Link } from "react-router-dom"

import Logo from '../assets/images/Logo.png'

const Navbar = () => {
  return (
    <>
        <Link to="/">
            <img src={Logo}/>
        </Link>
    </>
  )
}

export default Navbar