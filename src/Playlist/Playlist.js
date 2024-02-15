import React from 'react';
import './Playlist.css'
import Tracklist from '../Tracklist/Tracklist';

function Playlist(props){
    
    return(
        <div className='playlistcomponent'>
            <input type='text' id='playlistTitle' value={props.playlistName} onChange={props.playlistChangeHandler} />
            <Tracklist playlistTracks={props.playlistTracks}/>
        </div>
    )
}

export default Playlist;