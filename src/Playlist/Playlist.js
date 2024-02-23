import React from 'react';
import './Playlist.css'
import Tracklist from '../Tracklist/Tracklist';

function Playlist(props){
    
    const spotifyButton = () => {
        if (props.playlistTracks.length > 0) {
            return (
                <button onClick={props.onSave} >Save to Spotify</button>
            )
        }
    }

    return(
        <div className='playlistcomponent'>
            <input type='text' id='playlistTitle' value={props.playlistName} onChange={props.playlistChangeHandler} />
            <Tracklist tracks={props.playlistTracks} onRemove={props.onRemove} isRemoval={true} />
            <span class='spotifyBtn'>{spotifyButton()}</span>

        </div>
    )
}

export default Playlist;