import React from 'react'
import './Box.css'

const Box = ({value , key , onClick }) => {
  return (
    <div  >
        <button key={key} className={`box ${ value === "X" ? "X" : "O" }`} onClick={onClick} >{value}</button>
    </div>
  )
}

export default Box;