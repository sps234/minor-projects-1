import './App.css'
import Counter from './components/Counter'
import { useState } from 'react'
import Login from './components/Login'
import Paragraph from './components/Paragraph'
import Card from './components/Card'
import Ui from './components/Ui'
import PwdGenereator from './components/PwdGenereator'
import ContextHook from './components/ContextHook'

function App() {
  
  const [ occupation, setOccupation ] = useState('SWE')  


  
  return (
    <>
      {/* <Counter name={ 'sam' } hobbies = { [ 'listening music', 'watching movies'] } occupation={occupation} setOccupation = { setOccupation }  /> */}

      {/* <Login user= { true }/> */}

      {/* <Paragraph/> */}

      {/* <Card />
      <Card name="Penny"/> */}

      {/* <Ui/> */}

      <PwdGenereator/>

      {/* <ContextHook/> */}

    </>
  )
}

export default App
