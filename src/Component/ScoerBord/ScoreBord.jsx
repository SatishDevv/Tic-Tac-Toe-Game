import React from 'react'
import './ScoreBord.css'

const ScoreBord = ({xScore , OScore , tie ,Playing}) => {
  return (
    <div className='scorebord'>
        <span className={`x-score ${Playing === true ? "xplay" : ""}`} > X:- {xScore} </span>
        <span className={`O-score ${Playing === false ? "oplay" : ""}`} > O:- {OScore} </span>
        <span className='tie-score' > Tie:- {tie} </span>

    </div>
  )
}

export default ScoreBord