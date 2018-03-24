import React, { Component } from 'react';
import '../App.css';

class NoteCreate extends Component {
    state = {
        title: '',
        content: '',
        id: null,
    }

    handleChange(event) {
        event.preventDefault();
        this.setState({
            title: event.target.value,
            content: event.target.value
        });
    }

    render() {
        return (
            <div>
                <h1>Create New Note:</h1>
                <input type="text" value={this.state.title} onChange={this.handleChange} />
                <input type="text" value={this.state.content} onChange={this.handleChange} />
            </div>
        );
    }
}

export default NoteCreate;