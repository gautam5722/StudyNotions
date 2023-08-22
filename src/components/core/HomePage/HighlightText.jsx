import React from 'react'

 const HighlightText = ({text}) => {      //passing the props for fetching text or highlight iteams
  return (
    <span className='font-bold text-caribbeangreen-100'>
        
        {"  "}            {/* for space  */}
        {text}
    </span>
  )
}
export default HighlightText;