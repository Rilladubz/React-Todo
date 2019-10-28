import React from 'react';
import './Todo.css'

class TodoForm extends React.Component {
    constructor(){
        super(); 
        this.state = {
            newTask: '',
        }
    }

    handleChange = e => {
        console.log(e.target.value);
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    handleSubmit = e => {
        e.preventDefault();
        this.props.addItemfunc(this.state.newTask)
    }


    render(){
        // console.log('In Form:', this.state.newTask)
        // console.log(props)
        return(
            <div>
                <form className='form'>
                    <input
                    type='text'
                    placeholder='...todo'
                    name='newTask'
                    value={this.state.newTask}
                    onChange={this.handleChange}
                    />

                    <button onClick={this.handleSubmit}>Add Todo</button>
                    <button onClick={this.props.removeItem}>Clear Complete</button>
                </form>
            </div>
            
        )
    }
}
// onClick={() => props.removeItem(props.Data.id)}
export default TodoForm;