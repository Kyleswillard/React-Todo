import React from 'react'

const Todo = (props) => {
    const { todo, onToggle } = props
    console.log('complete', todo.complete)
    const handleClick = (e) => {
        e.preventDefault()
        onToggle(todo.id)
    }

    return (
        <div>
            <li
                onClick={handleClick}
                style={
                    todo.complete === true
                        ? { textDecoraton: 'line-through', color: 'grey' }
                        : { textDecoration: 'none' }
                }
            >
                {todo.task}
            </li>
        </div>
    )
}

export default Todo
