import React from 'react'
import './App.css'

class TaskCard extends React.Component{

  constructor(props){
    super(props)
    this.isEditing = false
    this.textInput = null
    this.textArea = null
    this.spanElement = element => {
      this.textInput = element
    }
    this.textElement = element => {
      this.textArea = element
    }
  }

  edit = (e) =>{
    e.preventDefault()
    let oldValue = this.textInput.innerHTML
    this.textInput.classList.add('isHidden')
    this.textArea.value = oldValue
    this.textInput.classList.remove('isHidden')
    this.textInput.classList.add('isVisible')
    //this.textArea.style.display = "inline-block"
    this.props.editTask(!this.isEditing)
  }

  finishEdit(e){
    //e.preventDefault()
    let event = e
    console.log('code', e.keyCode)
    if(e.keyCode === 13){
      let newValue = this.textArea.value
      console.log('newValue', newValue)
      this.textInput.value = newValue
      this.textArea.style.display = "none"
      this.textInput.style.display = "inline-block"
      this.props.editTask(!this.isEditing)
    }
  }


  createTaskList = (listItem) => {
      return (
        <li key={listItem.key}>
          <form>
            <label>
              <input type="checkbox" onChange={this.props.checkToggle.bind(this, listItem.key)}/>
              <span  ref={this.spanElement} className="spanElement">{listItem.text}</span>
              <input ref={this.textElement} type="textarea" className="isHidden" onKeyDown={this.finishEdit.bind(this)}/>
            </label>
            <div>Extra details will come here</div>
            <button onClick={this.edit}>Edit</button>
            <button onClick={this.props.delete.bind(this, listItem.key)}>Delete</button>
          </form>
        </li>
      )
  }

  render(){
    let todoEntries = this.props.taskEntries
    let listItems = todoEntries.map(this.createTaskList)
    return (
      <div className="taskCardsDiv">
      <ul className="theList">
        <div className="lists">
         {listItems}
        </div>
      </ul>
    </div>
    )
  }
}
export default TaskCard
