import React from 'react'
import './App.css'

class TaskInput extends React.Component{

  constructor(){
    super()
    this.state = {
      value: ''
    }
  }

  onValueEnterHandle = (event) => {
    this.setState({value: event.target.value})
  }

  onAddButtonClick = () => {
    this.setState({value: ""})
    this.props.add(true, this.state.value)
  }

  render(){
    return(
      <div className="taskInputDiv">
       <div className="headerForm">
       <form>
         <input
          type="text"
          value={this.state.value}
          placeholder="Name this task..."
          onChange={this.onValueEnterHandle}></input>
          <p>Add extra details</p>
          <div className="buttonDivs">
            <input type="button" value="Add" onClick={() => this.onAddButtonClick()}/>
            <input type="button" value="Cancel" onClick={this.props.cancel.bind(null, false)}/>
          </div>
       </form>
       </div>
      </div>
    )
  }
}
export default TaskInput
