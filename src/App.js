import React from 'react'
import TodoList from './components/TodoList'
import TodoForm from './components/TodoForm'

class App extends React.Component {
    // you will need a place to store your state in this component.
    // design `App` to be the parent component of your application.
    // this component is going to take care of state, and any change handlers you need to work with your state

    constructor() {
        super()
        this.state = {
            todos: [
                { id: 1, task: 'Mow Lawn', complete: false },
                { id: 2, task: 'Take Dog Out', complete: false }
            ]
        }
    }

    //submit handler
    handleAdd = (value) => {
        const updateTodos = [...this.state.todos]
        updateTodos.push({ task: value, id: Date.now(), complete: false })
    }
    //Toggle Handler
    handleToggle = (taskId) => {
        this.setState({
            todos: this.state.todos.map((task) => {
                if (taskId === task.id) {
                    return {
                        ...task,
                        complete: !task.complete
                    }
                } else {
                    return task
                }
            })
        })
    }
    // Delete Handler
    handleDelete = (e) => {
        e.preventDefault()
        const todoClone = this.state.todos.filter((task) => {
            return !task.complete
        })
        this.setState({ todos: todoClone })
    }

    render() {
        // console.log(console.log('state:', this.state))
        return (
            <div>
                <h2>Welcome to your Todo App!</h2>

                <TodoForm onAdd={this.handleAdd} onDelete={this.handleDelete} />
                <TodoList
                    todos={this.state.todos}
                    onToggle={this.handleToggle}
                />
            </div>
        )
    }
}

export default App
