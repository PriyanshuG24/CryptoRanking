import React from 'react'
import spinner from './Fidget-spinner.gif'
function Spinner() {
  return (
    <div className='flex items-center justify-center mt-24'> 
        <img src={spinner} alt="spinner" width={"100px"} height={"100px"} />
    </div>
  )
}

export default Spinner
