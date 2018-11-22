import React from 'react' 
import '../../../css/home.css'
const HomeLayout = (props)=>{
  return (
    <div className="trivia" ref={props.handleRef}>
      {
        props.children
      }

    </div>
  )
}

export default HomeLayout