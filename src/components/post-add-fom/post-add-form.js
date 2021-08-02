import React from 'react';

import './post-add-form.css'


export default class PostAddForm extends React.Component {
    state = {
        valueInput: ''
    }

    onSubmit = (e) => {
        const value = this.state.valueInput;
        e.preventDefault();
        if (!value.length < 1) {
            this.props.addPost(value);
            this.setState({
                valueInput: ''
            });
        }
    }
    
    onChangeValue = (e) => {
        this.setState({
            valueInput: e.target.value,
        });
    }

    render() {
        return (
            <form 
                className="bottom-panel d-flex" 
                onSubmit={this.onSubmit}
            >
                <input
                    type="text"
                    placeholder = "Yout new post here"
                    className = "form-control new-post-label"
                    onChange = {this.onChangeValue}
                    value = {this.state.valueInput}
                />
                <button 
                type="submit" 
                className="btn btn-outline-secondary">
                    Publish
                </button>
            </form>
        )
    }
}
