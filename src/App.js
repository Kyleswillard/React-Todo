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
                { id: 1, task: 'Mow Lawn', complete: true },
                { id: 2, task: 'Take Dog Out', complete: false }
            ]
        }
    }

    //submit handler
    handleAdd = (todo) => {
        this.setState({
            todos: [
                ...this.state.todos,
                { task: todo, id: Date.now(), complete: false }
            ]
        })
    }

    //Toggle Handler
    handleToggle = (id) => {
        this.setState({
            todos: this.state.todos.map((todo) => {
                if (todo.id === id) {
                    return {
                        ...todo,
                        complete: !todo.complete
                    }
                }
                return todo
            })
        })
    }

    // Delete Handler
    handleDelete = () => {
        this.setState((prevState) => {
            return {
                todos: prevState.todos.filter((todo) => {
                    return todo.completed !== true
                })
            }
        })
    }

    render() {
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
