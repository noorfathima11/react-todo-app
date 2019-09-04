import React from 'react'
import './App.css'
import TaskCard from './taskCard'

class TaskCardList extends React.Component{

  constructor(props){
    super(props)
  }

  createTaskList = (listItem) => {
    console.log(listItem.key)
    return (
      <form>
        <li key={listItem.key}>
          <TaskCard
          item = {listItem}
          checkToggle={this.props.checkToggle}
          delete1={this.props.delete}/>
        </li>
      </form>
    )
  }

  render(){
    console.log('entries', this.props.taskEntries)
    //let todoEntries = this.props.taskEntries
    let listItems = this.props.taskEntries.map(this.createTaskList)
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
export default TaskCardList

