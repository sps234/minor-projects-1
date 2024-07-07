import e from 'connect-flash'
import React from 'react'
import { useState } from 'react'

function Paragraph() {

    const[ isVisible, setIsVisible ] = useState(true)

    const toggleVisibility = ( event ) => {
        setIsVisible(!isVisible)
        // console.log( event )
    }

  return (
    <>
    <h1> Change UI based on Click </h1>
    { isVisible && (<p> This paragraph will be { !isVisible? 'shown'  : 'hidden' } on click </p>) }
    <button onClick={ toggleVisibility } > { isVisible ? 'Hide' : 'Show' } </button>    
    </>
  )
}

export default Paragraph