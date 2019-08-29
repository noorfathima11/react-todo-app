import React from 'react'
import './App.css'
import TaskInput from './taskInput'

class App extends React.Component{

  constructor(){
    super()
    this.state = {displayTaskInput : false}
  }
  displayTaskInput = (bool) => {
    console.log('Add or cancel clicked')
    this.setState({
      displayTaskInput : bool
    })
  }

  render(){
    return (
      <div className="globalDiv">
        <div className="header">
          <button className="addTodoBtn" onClick={this.displayTaskInput.bind(null, true)}>Add todo</button>
          <h1 className="todoHeading"> To-dos</h1>
      </div>
         {this.state.displayTaskInput && (<TaskInput cancel={this.displayTaskInput}/>)}
      </div>
    )
  }
}

export default App
