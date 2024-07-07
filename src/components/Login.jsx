import React from 'react'

function Login( props ) {
    const { user } = props
  return (
    
    <>
    { user ? <button> Logout </button> : <button> login </button> }
    </>
   
  )
}

export default Login