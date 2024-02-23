import React from "react";
import Tracklist from "../Tracklist/Tracklist";
import './SearchResults.css'



function SearchResults(props) {

    const searchResults = props.searchResults
//passing tracks as the property in searchresults and playlist so both can access the same property in Tracklist
    return (
        <div className='searchcomponent'>
            <h2>Results</h2>
            <Tracklist tracks={searchResults} onAdd={props.onAdd} />

        </div>
    );
}

export default SearchResults;

