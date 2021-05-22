import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from "react-router-dom";
import AllPosts from '../../common/AllPosts';


const SearchResults = () => {
    const history = useHistory()
    const posts = useSelector(state => state.posts.posts)
    const enteredQuery = unescape(history.location.state.query)
    const query = enteredQuery.split(/\s+/)

    // find titles that contains all the key words
    const results = posts.filter(post => {
        return query.every(word => post.title.indexOf(word) !== -1)
    })

    console.log(results);


    return (
        <div className="SearchResults">
            <h1 className="text-center"> <span className="font-weight-bold">{results.length}</span> results found for "{enteredQuery}"</h1>
            <AllPosts posts={results} />
        </div>
    );
}

export default SearchResults;