import React from 'react'
import './App.css'

class TaskInput extends React.Component{

  constructor(){
    super()
    this.state = {value: ''}

  }

  onValueEnterHandle = (event) => {
    this.setState({value: event.target.value})
  }

  render(){
    return(
      <div className="taskInputDiv">
        <form>
          <input
           type="text"
           placeholder="Name this task..."
           onChange={this.onValueEnterHandle}></input>
          <input type="button" value="Add" onClick={() => {this.props.add(true, this.state.value)}}/>
          <input type="button" value="Cancel" onClick={this.props.cancel.bind(null, false)}/>
        </form>
        {/*<button onClick={this.props.add.bind(this, true, this.valueEntered)}>Add</button>*/}
      </div>
    )
  }
}
export default TaskInput
