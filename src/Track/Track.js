import React, { useCallback } from "react";
import './Track.css'



function Track(props) {

    let playlistTracks = null;
    let searchResult = null;

    if (props.searchName) {
        searchResult = props.searchName.map(item => <li>{item}<button className='addBtn'><span class="material-symbols-outlined">add</span></button></li>)
    }


    if (props.playlistTracks) {
        playlistTracks = <li>{props.playlistTracks}</li>
    }

    const addTrack = (event) => {
        props.onAdd(props.track)
    }

    const removeTrack = (event) => {
        props.onRemove(props.track);
    }

    const whichButton = () => {
        if (props.isRemoval) {
            return (
                <button className='removeBtn' onClick={removeTrack}><span class="material-symbols-outlined">minimize</span></button>
            )
        }
        return (
            <button className='addBtn' onClick={addTrack} ><span class="material-symbols-outlined">add</span></button>
        )
    }

    return (
        <div className='track'>
            <h3>{props.track.name}{whichButton()}</h3>
            <p>{props.track.artist} | {props.track.album}</p>
        </div>
    )
}

export default Track;
