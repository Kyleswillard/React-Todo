import React, { Component } from 'react'

export default class Todo extends Component {
    constructor(props) {
        super()
    }
    handleClick = (e) => {
        this.props.onToggle(this.props.task.id)
    }
    render() {
        return (
            <div>
                <h3 className={this.props.complete ? 'crossoff' : ''}>
                    {' '}
                    {this.props.task}{' '}
                </h3>
                <button onClick={this.handleClick}>Mark Complete</button>
            </div>
        )
    }
}
