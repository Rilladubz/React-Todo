import React from 'react';
import Data from './Data';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';
import './App.css';
import './components/TodoComponents/Todo.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      Data: Data,
    }
  }

  addItem = task =>{
    const newTask = {
      task: task,
      id: Date.now(),
      completed: false
    }
    this.setState({
      Data: [...this.state.Data, newTask]
    })
  }

  removeitem = id => {
    id.preventDefault();

     this.setState({
       Data: this.state.Data.filter(item => !item.completed)
       })
  }

  toggleItem = id => {
    console.log(id)
    this.setState({
      Data: this.state.Data.map(task => {
        console.log(task)
        if(task.id === id){
          return {
            ...task,
            completed: !task.completed,
          }
        } else {
          return task;
        }
      })
    })
  }
  
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change 
  // handlers you need to work with your state.

  render() {
    // console.log(this.state.Data)
    return (
      <div className='container'>

        <div className='innerWrap'>
          <h2>Welcome to your Todo App!</h2>

          <div className='todoWrap'>
            <TodoForm addItemfunc={this.addItem} removeItem={this.removeitem}/>
          </div>

          <div className='listWrapper'>
            <TodoList 
              Data={this.state.Data} 
              toggleItem={this.toggleItem}
              />
          </div>

        </div>
        
      </div>
    );
  }
}

export default App;
