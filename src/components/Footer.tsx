// import React from 'react'

import Logo from '../assets/images/Logo-1.png'

const Footer = () => {
  return (
    <div className='mt-[80px] bg-secondary-light-color'>
      <div className='flex flex-col gap-[40px] items-center justify-center px-10 pt-6'>
        <img src={Logo} alt="logo" className='w-[200px] h-[40px] mb-8'/>
      </div>
    </div>
  )
}

export default Footer