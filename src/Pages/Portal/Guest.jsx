import React from 'react'
import { Outlet } from 'react-router-dom'

import "../../styles/Guest/main.css"

import "../../styles/Guest/login.css"
const Guest = () => {
  return (
    <div className=''>
  

        <Outlet/>

  
      
    </div>
  )
}

export default Guest
