import React from 'react'
import './App.css'

class TaskCard extends React.Component{
  render(){
    return (
      <div className="taskCardDiv">
      <div className="checkbox">
        <label for="check">
          <input type="checkbox" id="check"/>
          <span>Task will come here</span>
        </label>
      </div>
      <div>Note will come here</div>
      <button>Edit</button>
      <button>Delete</button>
    </div>
    )
  }
}
export default TaskCard
