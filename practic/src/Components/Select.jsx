import React from 'react'
import "../css/Select.css"

export default function Select({change}) {
  return (
    <div>
        <select name='color' className='select' onChange={change}  >
            <option value="blue" id='1' >Blue</option>
            <option value="green" id='2' >Green</option>
            <option value="red" id='3'>Red</option>
            <option value="yellow" id='4'>Yellow</option>
        </select>
    </div>
  )
}
