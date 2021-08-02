import React from 'react';

import './post-list-item.css'

export default class PostListItem extends React.Component{
    render() {
        const {label, dellete, important, like, changeImportant, setLike} = this.props;

        let postClassName = 'app-list-item d-flex justify-content-between ';
        if (important) {
            postClassName += ' important';
        } 
        if (like) {
            postClassName += ' like pointer';
        } 

        return (
            <div className={postClassName}>
                <span
                onClick={setLike}
                className="app-list-item-label">
                    {label}
                </span>
                <div className="d-flex align-items-center justify-content-center">
                    <button 
                    type="button"
                    onClick={changeImportant}
                    className="btn-star btn-sm">
                        <i className="fas fa-star"></i>
                    </button>
                    <button 
                        onClick={dellete}
                        type="button"
                        className="btn-trash btn-sm">
                        <i className="fas fa-trash"></i>
                    </button>
                    <i 
                        className='fa fa-heart'
                        onClick={setLike}>
                    </i>
                </div>
            </div>
        )
    }
}
