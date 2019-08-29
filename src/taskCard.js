import React from 'react'
import './App.css'

class taskCard extends Component{
  render(){
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
  }
}
