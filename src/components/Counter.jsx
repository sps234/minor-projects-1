import React, { useEffect, useState } from 'react'

function Counter( props ) {
    const [ count, setCount] = useState(0)
    const [ render, setRender] = useState(0)

    // props.occupation = 'Web Developer'  // gives error as props are read only

    function addValue() {

      

        // counter = counter + 1 

        
        // setCount( count + 1 )   
        // setCount( count + 1 )   
        // setCount( count + 1 )   
        // setCount( count + 1 )   // increase +1

        
        setCount( ( prevCount ) => prevCount + 1 )
        setCount( ( prevCount ) => prevCount + 1 )
        setCount( ( prevCount ) => prevCount + 1 )
        setCount( ( prevCount ) => prevCount + 1 )   // increase +4
        
        console.log( count );      
    }

    useEffect( () => {  
        let timer = setTimeout( ( ) => {
          setRender(  render + 1 )
        }, 2000 );

        return () => { clearTimeout( timer ) }

    },[] )
    

  return (
     
    <div className='bg-green-700 h-screen text-center text-white'>
        <h2>  hi ! I am {props.name} . I am an {props.occupation} . My hobbies are { props.hobbies[0] } and { props.hobbies[1] }. </h2>
        
        <button onClick={ () => { props.setOccupation('Web Developer') } }> Change Occupation </button>

        <h2> click on counter to increase count : { count } </h2>
        <button className='bg-yellow-500 text-white rounded p-2 m-2' onClick={ addValue }> Increment </button>
        <button className='bg-yellow-500 text-white rounded p-2 m-2' onClick={ () => {setCount( count - 1 ) } }> Decrement </button>
        <p> I have rendered {render} times.</p>
    </div>
  )
}

export default Counter