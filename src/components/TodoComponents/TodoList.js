// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from 'react';
import Todo from '../TodoComponents/Todo';
import './Todo.css';

const TodoList = (props) => {

    return(
        <div>
            {props.Data.map(item => 
                <Todo key={item.id} Data={item} toggleItem={props.toggleItem}/> 
            )}
        </div>
    )
}

export default TodoList;