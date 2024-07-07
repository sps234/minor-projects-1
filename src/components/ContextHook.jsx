// 07/07/24 

import React, { createContext, useContext, useState } from 'react'

    const UserContext = createContext()

function ContextHook() {
    
    const [user, setUser] = useState('Sam')

  return (
    <>
    <UserContext.Provider value={ [ user, setUser ] }>
    <h1>ContextHook</h1>
    <p> hi ! { user } </p>
        <ComponentA />
    </UserContext.Provider>
    </>
  )
}

function ComponentA() {
  return (
    <>
    <h1>ComponentA</h1>
    <ComponentB />
    </>

  )
}

function ComponentB() {
    return (
        <>
        <h1>ComponentB</h1>
        <ComponentC />
        </>
    )
    }

function ComponentC() {

    const [ user, setUser ]  = useContext(UserContext)

    

    return (
        <>
        <div className=''>

        <h1> ComponentC</h1>
        <p> hello ! { user } again </p> 
        <button className='bg-green-500 p-2 rounded' onClick={ () => setUser('Aman') } > Change </button>  
            
        </div>     
        </>
    )
}

export default ContextHook