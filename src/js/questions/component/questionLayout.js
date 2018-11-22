import React from 'react'
import '../../../css/questions.css'
const QuestionLayout = (props)=>{
  return (  
    <div className="questions">
      {
        props.children
      }
    </div>

  )
}

export default QuestionLayout