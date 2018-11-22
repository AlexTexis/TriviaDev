import React,{Component} from 'react'
import HomeLayout from '../component/homeLayout'
import Start from '../../start/start'
import Points from '../../points/component/point'
import QuestionContainer from '../../questions/container/question-container'
import questAndResp from '../../modules/questions'

class HomeContainer extends Component{
  state = {
    start : false,
    points : false,
    questions: false,
    questionTitle : '',
    a : '',
    b : '',
    c : '',
    nivel : 1,
    resolveQuest : 0
  }
  
  handleStart = ()=>{
    setTimeout(()=>{
      this.setState({
        start : !this.state.start,
        points : !this.state.points,
        questions : !this.state.questions,
      })
      this.layout.classList.add('go')
      this.nextLevel()
      // trivia.nextLevel(this.changeState)
    },500)
  }

  handleRef = (element)=>{
    this.layout = element
  }
  
  handleClick = (event)=>{
    const dataOption = Number(event.target.dataset.option) 
    switch(this.state.nivel)
    {
      case 1:
      if( dataOption === 0) this.aumentNivel()
      else{alert('perdiste')}
      break
      case 2:
      if( dataOption === 1) this.aumentNivel()
      else{alert('perdiste')}
      break
      case 3:
      if( dataOption === 2) this.aumentNivel()
      else{alert('perdiste')}
      break
      case 4:
      if( dataOption === 1) this.aumentNivel()
      else{alert('perdiste')}
      break
    }
  }

  nextLevel = ()=>{
    for(let i = 0 ;i < this.state.nivel;i++)
    {
      this.cambiarStado(i)
    }
  }

  cambiarStado = (i)=>{
    const r = questAndResp.responses[i] //key del objeto responses del module questions.js
    this.setState({
      questionTitle : questAndResp.questions[i],
      a : r[0],
      b : r[1],
      c : r[2]
    })
  }
  
  aumentNivel = () => {
    this.setState({
    nivel : this.state.nivel += 1,
    resolveQuest : this.state.resolveQuest += 1
  })
  if(this.state.nivel <= questAndResp.questions.length)
  {
   this.nextLevel()
  }
  else
  {
    setTimeout(()=>alert ('ganaste'),500)
  }
}

  
  render()
  {
    return (
      <HomeLayout handleRef={this.handleRef}>
        <Start handleStart={this.handleStart} start={this.state.start}/>
        <QuestionContainer 
        question={this.state.questions}
        questionTitle={this.state.questionTitle}
        a = {this.state.a}
        b = {this.state.b}
        c = {this.state.c}
        handleClick={this.handleClick}
        />
        <Points points={this.state.points} nivel={this.state.nivel} resolveQuest={this.state.resolveQuest} />
      </HomeLayout>
    )
  }
}

export default HomeContainer