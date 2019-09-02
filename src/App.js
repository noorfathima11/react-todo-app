import React from 'react'
import './App.css'
import TaskInput from './taskInput'
import TaskCard from './taskCard'

class App extends React.Component{

  constructor(){
    super()
    this.state = {
      taskItems : [],
      displayTaskInput : false,
      displayTaskCard : false,
      isEditing: false
    }
    this.displayTaskInput = this.displayTaskInput.bind(this)
    this.displayTaskCard = this.displayTaskCard.bind(this)
    this.deleteTaskItem = this.deleteTaskItem.bind(this)
    this.checkToggleHandler = this.checkToggleHandler.bind(this)
    this.editTaskHandler = this.editTaskHandler.bind(this)
  }

  displayTaskInput = (bool) => {
    console.log('Add or cancel clicked')
    this.setState({
      displayTaskInput : bool
    })
  }

  displayTaskCard = (bool, taskName) => {
    //console.log(this.state.displayTaskCard)
    console.log('Add card clicked', taskName)
    if(taskName !== ""){
      let newTaskItem = {
        text : taskName,
        isDone: false,
        key : Date.now()
      }
      this.setState((prevState) => {
        console.log('updating state')
        return {
          taskItems: prevState.taskItems.concat(newTaskItem)
        }
      })
    }
    this.setState({
      displayTaskCard : bool
    })
  }

  deleteTaskItem = (key) => {
    let filteredItems = this.state.taskItems.filter(function(taskItem){
      return (taskItem.key !== key)
    })

    this.setState({
      taskItems : filteredItems
    })
  }

  checkToggleHandler = (key) => {
    let isDoneChangedItems = this.state.taskItems.map((taskItem) => {
      if(taskItem.key === key){
        return {
          ...taskItem,
          isDone: !taskItem.isDone
        }
      }
      return taskItem
    })
    this.setState({
      taskItems : isDoneChangedItems
    })
  }

  editTaskHandler = (bool) => {
    //console.log('key', key)
    this.setState({
      isEditing : bool
    })
  }

  render(){
    console.log('taskItems', this.state.taskItems)
    return (
      <div className="todoListMain">
        <div className="header">
          <button className="addTodoBtn" onClick={this.displayTaskInput.bind(null, true)}>Add todo</button>
          <h1 className="todoHeading"> To-dos</h1>
        </div>
         {this.state.displayTaskInput && (<TaskInput cancel={this.displayTaskInput}
                                                     add={this.displayTaskCard}/>)}

         {this.state.displayTaskCard && (<TaskCard taskEntries={this.state.taskItems}
                                                   delete={this.deleteTaskItem}
                                                   checkToggle={this.checkToggleHandler}
                                                   editTask={this.editTaskHandler}/>)}
      </div>
    )
  }
}

export default App
