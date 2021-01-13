import React, { Component } from 'react'

class TodoForm extends Component {
    constructor(props) {
        super()
        this.state = {
            value: '',
            id: '',
            completed: false
        }
    }

    handleChange = (e) => {
        this.setState({
            value: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.onAdd(this.state.value)
        this.setState({
            value: ''
        })
    }

    render() {
        // console.log('form:', this.props)
        console.log(this.state.value)
        return (
            <form>
                <label htmlFor="task">Add New Task:</label>
                <input
                    onChange={this.handleChange}
                    value={this.state.value}
                    type="text"
                    name="task"
                />
                <button onClick={this.handleSubmit}>Add New Task</button>
                <button onClick={this.props.onDelete}>Clear Completed</button>
            </form>
        )
    }
}

export default TodoForm
