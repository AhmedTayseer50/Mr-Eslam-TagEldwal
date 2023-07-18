import React from 'react'
import './FrontPage.css'
import { NavLink } from "react-router-dom";



const FrontPage = () => {
  return (
    <div className='contant'>

      <div className='context'>
        <h1 className='context11'>فكر أفهم</h1>
        <h1 className='succc'>حقق نجاحك</h1>
        <h3 className='success'>معانا النجاح محقق</h3>
        <NavLink to="/Contact">
          <button className="btn"> 
          إحجز دلوقتي 
          </button>
        </NavLink>
      </div>

    </div>
  )
}

export default FrontPage