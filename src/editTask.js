import React, {Component} from 'react'
import './App.css'

class EditTask extends Component{

  constructor(props){
    super(props)
    this.state = {
      isEditing : false
    }
  }

  render(){
    return(
      <span className="spanElement">{this.props.taskName}</span>
    )
  }
}

export default EditTask
