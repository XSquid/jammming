import React, { useState } from "react";
import './Track.css'



function Tracks(props) {

    let playlistTracks = null;
    let searchResults = null;
    

    if (props.searchResults) {
        return searchResults = props.searchResults.map(item => <li>{item}<button className='addBtn'><span class="material-symbols-outlined">add</span></button></li>);
    }


    if (props.playlistTracks) {
        return playlistTracks = <li>{props.playlistTracks}<button className='removeBtn'><span class="material-symbols-outlined">minimize</span></button></li>
    }

    function searchSorter(obj) {
        obj.map(item => {
            return <li>item.song</li>;
        });
    };

    return (
        <div>
            <ul>
            {searchResults}
            {playlistTracks}
            </ul>
        </div>
    )
}

export default Tracks;
