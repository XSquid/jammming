import logo from './logo.svg';
import './App.css';
import SearchBar from './SearchBar/SearchBar'
import Playlist from './Playlist/Playlist';
import SearchResults from "./SearchResults/SearchResults";
import Tracks from './Track/Track';
import Tracklist from './Tracklist/Tracklist';
import React, {useState} from 'react'

const songList = [{
  song: 'numb',
  artist: 'linkin park',
  album: 'meteora',
  id: '001'
},
{
  song: 'in the end',
  artist: 'linkin park',
  album: 'meteora',
  id: '002',
  sub: 1
}]




function App() {

 const [playlistTracks, setPlaylistTracks] = useState('playlist songs');
 const [playlistName, setPlaylistName] = useState('Playlist title');
 const [searchResults, setSearchResults] = useState(['song1', 'song2']);

 const submitHandler = (event) => {
  event.preventDefault();
 }

const playlistChangeHandler = (e) => {
  setPlaylistName(e.target.value)
}


  return (
    <div className="App">
      <header className="App-header">
        <h1>Jammming</h1>
      </header>
      <SearchBar  submitHandler={submitHandler} />

      <div className='results'>

        <div className='searchresults'>
          <SearchResults searchResults={searchResults}/>
        </div>

        <div className='playlist'>
          <Playlist playlistTracks={playlistTracks} playlistName={playlistName} playlistChangeHandler={playlistChangeHandler} />
        </div>

      </div>





    </div>
  );
}

export default App;
