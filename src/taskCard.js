import React, {Component} from 'react'
import './App.css'

class TaskCard extends Component{

  constructor(props){
    super(props)
    this.state = {
      isEditing : false,
      editedVale : ''
    }
    this.edit = this.edit.bind(this)
  }

  edit = () => {
    this.setState({
      isEditing : !this.state.isEditing
    })
  }

  handleChange = _ => this.props.checkToggle(this.props.item.key)

  handleEdit = (event) => this.state.editedValue = event.target.value

  finishEdit = () => {

  }

  render(){
    console.log('rendering task card')
    if(!this.state.isEditing){
      return (
        <div>
         <label>
          <input type="checkbox" onChange={this.handleChange}/>
          <span>{this.props.item.text}</span>
         </label>
         <div>Extra details will come here</div>
         <button type='button' onClick={() => this.edit()}>Edit</button>
         <button type='button' onClick={this.props.delete1.bind(this, this.props.item.key)}>Delete</button>
        </div>
      )
    } else {
      return(
        <div>
          <label>
            <input type="checkbox" onChange={this.handleChange}/>
            <input type="textarea" onChange={this.handleEdit}/>
          </label>
          <div>Extra details will come here</div>
          <button type='button' onClick={() => this.finishEdit(this.props.item.key)}>Done</button>
          <button onClick={this.props.delete1.bind(this, this.props.item.key)}>Delete</button>
        </div>
      )
    }
  }
}

export default TaskCard
