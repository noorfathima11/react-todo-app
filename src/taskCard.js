import React from 'react'
import './App.css'
import EditTask from './editTask'

class TaskCard extends React.Component{

  constructor(props){
    super(props)
    this.state = {
      isEditing : false
    }
  }

  edit = () => {
    console.log(!this.state.isEditing)
    this.setState ({
      isEditing : !this.state.isEditing
    })
  }

  finishEdit(){
      this.props.editTask(!this.state.isEditing)
  }


  createTaskList = (listItem) => {
    return (
      <li key={listItem.key}>
        <form>
          <label>
            <input type="checkbox" onChange={this.props.checkToggle.bind(listItem.key)}/>
            {/*<TaskCard taskName={listItem.text}/>*/}
            {/*<span className="spanElement">{listItem.text}</span>*/}
            <EditTask taskName={listItem.text}/>
          </label>
          <div>Extra details will come here</div>
          <button onClick={() => this.edit()}>Edit</button>
          <button onClick={this.props.delete.bind(this, listItem.key)}>Delete</button>
        </form>
      </li>
    )
    // console.log('isEditing', this.state.isEditing)
    // if(!this.state.isEditing){
    //   return (
    //     <li key={listItem.key}>
    //       <form>
    //         <label>
    //           <input type="checkbox" onChange={this.props.checkToggle.bind(listItem.key)}/>
    //           <span className="spanElement">{listItem.text}</span>
    //         </label>
    //         <div>Extra details will come here</div>
    //         <button onClick={() => this.edit()}>Edit</button>
    //         <button onClick={this.props.delete.bind(this, listItem.key)}>Delete</button>
    //       </form>
    //     </li>
    //   )
    // }else {
    //   return (
    //     <li key={listItem.key}>
    //       <form>
    //         <label>
    //           <input type="checkbox" onChange={this.props.checkToggle.bind(listItem.key)}/>
    //           <input type="textarea"/>
    //         </label>
    //         <div>Extra details will come here</div>
    //         <button onClick={() => this.edit()}>Done</button>
    //         <button onClick={this.props.delete.bind(this, listItem.key)}>Delete</button>
    //       </form>
    //     </li>
    //   )
    // }
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
