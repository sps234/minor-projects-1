import React from 'react'
import { useState } from 'react'

function Ui( ) {

    const [ background, setBackground ] = useState('green')

    

    return (
        <>

            <div className='w-screen h-screen' style={{ backgroundColor: background }} >

                <div className='bg-gray-300 ml-2 mr-2 text-center'>
                    <button className=' m-3 rounded pl-2 pr-2 bg-red-500'
                    onClick={ ( ) => setBackground('red') }> Red </button>
                    <button className='bg-green-500 m-3 rounded pl-2 pr-2'
                     onClick={ ( ) => setBackground('green') }> Green </button>
                    <button className='bg-yellow-400 m-3 pl-2 pr-2 rounded' 
                    onClick={ ( ) => setBackground('yellow') } > Yellow </button>
                </div>

            </div>

        </>
    )
}

export default Ui