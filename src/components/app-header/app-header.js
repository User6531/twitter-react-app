import React from 'react';

import './app-header.css';


const AppHeader = ({allTweet, likedTweet}) => {

    let tweet;
    if (allTweet < 2) {
        tweet = 'tweet';
    } else {
        tweet = 'tweets';
    }

    return (
        <div className="app-header d-flex align-items-center">
            <h1>Jack Daniels</h1>
            <h2>{allTweet} {tweet}, {likedTweet} of them like</h2>
        </div>
    )
}

export default AppHeader;