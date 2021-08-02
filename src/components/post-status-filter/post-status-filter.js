import React from 'react';

import './post-status-filter.css';


export default class PostStatus extends React.Component {
    state = {
        filter: 'all'
    }

    setFilter = (filter) =>{
        this.setState({
            filter: filter,
        });
        this.props.setFilter(filter);
    }

    render() {
        let allBtn = 'btn',
            likeBtn = 'btn';

        if (this.state.filter === 'like') {
            allBtn += ' btn-outline-secondary';
            likeBtn += ' btn-info';
        } else {
            allBtn += ' btn-info';
            likeBtn += ' btn-outline-secondary';
        }

        return (
            <div className="btn-group">
                <button 
                    type="button" 
                    className={allBtn}
                    onClick={()=> this.setFilter('all')}
                    >All
                </button>
                <button 
                    type="button"
                    className={likeBtn}
                    onClick={()=>this.setFilter('like')}
                    >Liked
                </button>
            </div>
        )
    }
}