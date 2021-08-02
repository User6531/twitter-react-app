import React from 'react';
import PostListItem from '../post-list-item/post-list-item';

import './post-list.css'


export default class PostList extends React.Component {
    render() {
        const {posts, delletePost, setLike, changeImportant} = this.props;
        const elements = posts.map((post)=>{
            const {id} = post;
            return (
                <li key={id} className="list-group-item">
                    <PostListItem
                    {...post}
                    dellete = { () => delletePost(id)}
                    setLike = { () => setLike(id)}
                    changeImportant = { () => changeImportant(id)}
                    />
                </li>
            )
        })
        return (
            <ul className="app-list list-group">
                {elements}
            </ul>
        )
    }
}

    