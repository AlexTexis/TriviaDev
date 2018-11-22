import React from 'react'
import '../../css/start.css'
const Start = (props)=>{
  return ( 
     !props.start?
     <div className="start-container" >
      <h1 className="title">TriviaDevs</h1>
      <button className="btn-go" onClick={props.handleStart}>Lets Go!</button>
    </div>
     :
    null
  )
}

export default Start