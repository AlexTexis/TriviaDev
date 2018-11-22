import React from 'react'
import '../../../css/points.css'
const Points = (props)=>{
  return (
    props.points &&
    <section className="point-container">
      <span className="item-point">{`Nivel Actual : ${props.nivel}`}</span>
      <span className="item-point">{`Preguntas Resueltas : ${props.resolveQuest}`}</span> 
    </section>
  )
}
 

export default Points