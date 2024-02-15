import React, {useState} from "react";
import Tracks from "../Track/Track";

function Tracklist(props){

    const searchResults = props.searchResults;
    const playlistTracks = props.playlistTracks;

    return (
        <div>
            <Tracks searchResults={searchResults} playlistTracks={playlistTracks} />
        </div>
    )
}

export default Tracklist;