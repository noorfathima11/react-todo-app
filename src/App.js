import React from 'react'
import './App.css'

class App extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
    return (
      <div classname="header">
         <button className="addTodoBtn">Add todo</button>
         <h1 className="todoHeading"> To-dos</h1>
      </div>


    )
  }



}

export default App;
