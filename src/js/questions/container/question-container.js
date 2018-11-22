import React,{PureComponent} from 'react'
import QuestionLayout from '../component/questionLayout'

class QuestionContainer extends PureComponent
{
  render()
  {
    return(
      
      this.props.question && 
        <QuestionLayout>
        <div className="questions-container">
          <h1 className="title-question">{this.props.questionTitle}</h1>
        </div>
        <div className="options">
        <span 
         className="option-item"
         onClick={this.props.handleClick}
         data-option={0}>
         A : {this.props.a}
         </span>

        <span 
         className="option-item"
         onClick={this.props.handleClick}
         data-option={1}>
         B : {this.props.b}
         </span>
         
        <span 
         className="option-item"
         onClick={this.props.handleClick}
         data-option={2}>
         C : {this.props.c}
         </span>
       </div>
        </QuestionLayout>
      
    )

  }
}

export default QuestionContainer
