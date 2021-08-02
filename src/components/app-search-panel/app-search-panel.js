import React from 'react';

import './app-search-panel.css';


export default class AppSearchPanel extends React.Component {
    onChangeValue = (e) => {
        const value = e.target.value;
        this.props.onChange(value);
    }

        render() {
            return (
                <input 
                    type="text"
                    placeholder="Enter here"
                    className="search-input form-control"
                    onChange={this.onChangeValue}
                />
        )
    }
}