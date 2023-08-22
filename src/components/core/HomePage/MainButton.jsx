import React from 'react'
import { Link } from 'react-router-dom'

export const MainButton = ({children , active , linkto}) => {
  return (
    <Link to = {linkto}>

        <div className={`text-center text-[13px] px-6 py-3 rounded-md font-bold
          ${active ? "bg-yellow-50 text-black hover:bg-yellow-25 shadow-yellow-5" : " bg-richblack-800 shadow-yellow-25"}
          hover:scale-95 transition-all duration-200 

        `}>

            {/* button  me jo text hai wo dikhane ke liye ye children liye hai  */}
            {children}         

        </div>
         
    </Link>
  )
}
