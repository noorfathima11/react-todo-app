import React from 'react'
import './App.css'

class TaskInput extends React.Component{

  render(){
    return(
      <div className="taskInputDiv">
        <input type="text" placeholder="Name this task..." ></input>
        <p>Add extra details</p>
        <button>Add</button>
        <button onClick={this.props.cancel.bind(null, false)}>Cancel</button>
      </div>
    )
  }
}
export default TaskInput
