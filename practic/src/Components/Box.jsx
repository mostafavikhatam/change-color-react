import React from 'react'
import "../css/Box.css"

export default function Box({ali}) {
  return (
    <div>
        <div className='box' style={{backgroundColor:ali}}></div>
    </div>
  )
}
