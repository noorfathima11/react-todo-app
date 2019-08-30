import React from 'react'
import './App.css'

class TaskInput extends React.Component{

  render(){
    return(
      <div className="taskInputDiv">
        <input
          type="text"
          placeholder="Name this task..."
          ref = {(input) =>{
            this.taskName = input
            console.log('taskName', this.taskName, this.taskName.value)
            }
          }></input>
        <p>{this.taskName}</p>
        <button onClick={this.props.add.bind(null, true)}>Add</button>
        <button onClick={this.props.cancel.bind(null, false, this.taskName.value)}>Cancel</button>
      </div>
    )
  }
}
export default TaskInput
