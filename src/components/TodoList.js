// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react'
import Todo from './Todo'
const TodoList = (props) => {
    console.log(props)
    const { todos, onToggle } = props
    return (
        <div>
            <ul>
                {todos.map((task) => (
                    <Todo key={task.id} todo={task} onToggle={onToggle} />
                ))}
            </ul>
        </div>
    )
}

export default TodoList
