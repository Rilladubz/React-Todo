import React from 'react';
import './Todo.css';

const Todo = (props) => {
    console.log('In Todo', props.Data)
    return(
        <div className={`task${props.Data.completed ? ' completed' : ''}`} >

            <div className='wrapper'>
                <input className='check' 
                type='checkbox' 
                onClick={() => props.toggleItem(props.Data.id)}
                />

                <p className='text'>{props.Data.task}</p>

            </div>
        </div>
    )
}


export default Todo;