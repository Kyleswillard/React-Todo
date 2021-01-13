// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React, { Component } from 'react'
import Todo from './Todo'
class TodoList extends Component {
    constructor(props) {
        super()
    }

    render() {
        const { todos, onToggle } = this.props

        return (
            <div>
                {todos.map((task) => (
                    <Todo key={task.id} task={task.task} onToggle={onToggle} />
                ))}
            </div>
        )
    }
}

export default TodoList
