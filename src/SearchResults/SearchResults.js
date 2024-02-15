import React, { useState } from "react";
import Tracks from "../Track/Track";
import Tracklist from "../Tracklist/Tracklist";
import './SearchResults.css'



function SearchResults(props) {

    return (
        <div className='searchcomponent'>
            <h2>search results here</h2>
            <Tracklist searchResults={props.searchResults} />

        </div>
    );
}

export default SearchResults;

