import React from 'react'
import { Outlet } from 'react-router-dom'

import "../../styles/Guest/main.css"
import "../../styles/Guest/admin.css"
import "../../styles/Guest/login.css"
import "../../styles/Guest/singleblog.css"
const Guest = () => {
  return (
    <div className=''>
  

        <Outlet/>

  
      
    </div>
  )
}

export default Guest
