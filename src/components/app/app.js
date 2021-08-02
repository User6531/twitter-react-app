import React from 'react';

import AppHeader from '../app-header/app-header';
import AppSearchPanel from '../app-search-panel/app-search-panel';
import PostStatusFilter from '../post-status-filter/post-status-filter';
import PostList from '../post-list/post-list';
import PostAddForm from '../post-add-fom/post-add-form';

import './app.css';

const data = [
    {label: "First tweet", id:'34jnf', important: false, like: true},
    {label: "Second tweet", id:'kdjyh437', important: false, like: false},
    {label: "Third tweet", id:'35dft34', important: false, like: false},
]


export default class App extends React.Component {

    state = {
        data: data,
        value: '',
        filter: 'all',
    }

    delletePost = (id) => {
        this.setState(({data})=>{
            const index = data.findIndex(elem => elem.id === id);

            const beforeDeleteElem = data.slice(0,index); 
            const afterDeleteElem = data.slice(index + 1); 
            const newData = [...beforeDeleteElem, ...afterDeleteElem];
            
            return {
                data: newData,
            }
        });
    }; 

    addPost = (value) => {
        this.setState(({data})=> {
            const post = {
                label: value, 
                id: value.replace(/[а-яА-Я]/gi, '').slice(0, 3) + new Date().valueOf().toString().slice(-3)
            }
            const newArr = [...data, post];

            return {
                data: newArr
            }
            
        });
    }
    
    setLike = (id) => {
        this.setState(({data})=> {
            const index = data.findIndex(item => item.id === id),
                  newItem = {...data[index], like: !data[index].like},
                  dataBefore = data.slice(0,index),
                  dataAfter = data.slice(index + 1),
                  newData = [...dataBefore, newItem, ...dataAfter];
                
            return {
                data: newData
            }
        }); 
    }

    changeImportant = (id) => {
        this.setState(({data})=> {
            const index = data.findIndex(item => item.id === id),
                  newItem = {...data[index], important: !data[index].important},
                  dataBefore = data.slice(0,index),
                  dataAfter = data.slice(index + 1),
                  newData = [...dataBefore, newItem, ...dataAfter];
                
            return {
                data: newData
            }
        }); 
    }

    onSearch = (temp, posts) => {
        if (temp.length < 1) {
            return posts
        }

        const res = posts.filter(item => item.label.toLowerCase().indexOf(temp.toLowerCase()) > -1);

        return res
    }

    setSearchValue = (value) => {
        this.setState({
            value: value,
        });
    }

    filterPosts = (posts, filter) => {
        if (filter === 'like'){
            return posts.filter(item => item.like === true)
        } else {
            return posts
        }
    }

    setFilter = (filter) => {
        this.setState({
            filter: filter
        })
    }

    render() {
        const {data, value, filter} = this.state;

        const likedTweet = data.filter(item => item.like === true).length,
              allTweet = data.length;

        const searchResult = this.onSearch(value, data);

        const filterResault = this.filterPosts(searchResult, filter);

        return (
            <div className="app">
                <AppHeader
                    allTweet = {allTweet}
                    likedTweet = {likedTweet}
                />
                <div className="search-panel d-flex">
                    <AppSearchPanel 
                        onChange = {value => this.setSearchValue(value)}
                    />
                    <PostStatusFilter 
                        setFilter = {filter => this.setFilter(filter)}
                    />
                </div>
                <PostList
                    posts={filterResault}
                    delletePost = {id=>this.delletePost(id)}
                    setLike = { id => this.setLike(id)}
                    changeImportant = { id => this.changeImportant(id)}
                />
                <PostAddForm 
                    addPost = {value=> this.addPost(value)}
                />
            </div>
        )
    }
}