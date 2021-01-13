import React, { Component } from 'react'

class TodoForm extends Component {
    constructor(props) {
        super()
        this.state = {
            task: ''
        }
    }

    handleChange = (e) => {
        this.setState({
            ...this.state,
            task: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.onAdd(this.state.task)
    }

    render() {
        // console.log('form:', this.props)
        console.log(this.state)
        return (
            <form>
                <input
                    placeholder="Add New Todo"
                    onChange={this.handleChange}
                    value={this.state.task}
                    type="text"
                    name="task"
                />
                <button onClick={this.handleSubmit}>Add Task</button>
                <button onClick={() => this.props.onDelete}>
                    Clear Complete
                </button>
            </form>
        )
    }
}

export default TodoForm
