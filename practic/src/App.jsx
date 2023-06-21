import { useState } from 'react'
import Select from './Components/Select'
import Box from './Components/Box'
import "../src/css/App.css"

function App() {
  const [color , setColor] = useState("")
  const changehandler = (e) =>{
    setColor(e.target.value)

    
  }


  return (
    <>
    <div className='container'>
      <Select change={changehandler} />
      <Box ali={color}/>
    </div>
  
    </>
  )
}

export default App
