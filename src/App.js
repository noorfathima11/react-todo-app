import React from 'react'
import './App.css'
import TaskInput from './taskInput'
import TaskCard from './taskCard'

class App extends React.Component{

  constructor(){
    super()
    this.state = {
      taskItems : [],
      displayTaskInput : false,
      displayTaskCard : false
    }
    this.displayTaskInput = this.displayTaskInput.bind(this)
    this.displayTaskCard = this.displayTaskCard.bind(this)
  }
  displayTaskInput = (bool) => {
    console.log('Add or cancel clicked')
    this.setState({
      displayTaskInput : bool
    })
  }

  displayTaskCard = (bool, taskName) => {
    //console.log(this.state.displayTaskCard)
    console.log('Add card clicked', taskName)
    if(taskName !== ""){
      let newTaskItem = {
        text : taskName,
        key : Date.now()
      }
      this.setState((prevState) => {
        return {
          items: prevState.items.concat(newTaskItem)
        }
      })
    }
    taskName = ""
    console.log('items', this.state.items)
    this.setState({
      displayTaskCard : bool
    })
  }

  render(){
    return (
      <div className="globalDiv">
        <div className="header">
          <button className="addTodoBtn" onClick={this.displayTaskInput.bind(null, true)}>Add todo</button>
          <h1 className="todoHeading"> To-dos</h1>
        </div>
         {this.state.displayTaskInput && (<TaskInput cancel={this.displayTaskInput} add={this.displayTaskCard}/>)}
         {this.state.displayTaskCard && (
           <ul>
            <li><TaskCard/></li>
           </ul>
           )}
          // {this.setState.displayTaskCard = false}
      </div>
    )
  }
}

export default App
