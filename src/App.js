import './App.css';
import SearchBar from './SearchBar/SearchBar'
import Playlist from './Playlist/Playlist';
import SearchResults from "./SearchResults/SearchResults";
import React, { useState, useCallback } from 'react'
import Spotify from './Spotify/Spotify';

const songList = [{
  song: 'numb',
  artist: 'linkin park',
  album: 'meteora',
  id: '001',
  uri: 'uri1'
},
{
  song: 'in the end',
  artist: 'linkin park',
  album: 'meteora',
  id: '002',
  uri: 'uri2',
},
{
  song: 'thats what you get',
  artist: 'paramore',
  album: 'dont know',
  id: '003',
  uri: 'uri3',
},
{
  song: 'mathematics',
  artist: 'bbno$',
  album: 'also dont know',
  id: '004',
  uri: 'uri4',
},
{
  song: 'american pie',
  artist: 'that guy, you know',
  album: '????',
  id: '005',
  uri: 'uri5',
}]




function App() {

  const [playlistTracks, setPlaylistTracks] = useState([]);
  const [playlistName, setPlaylistName] = useState('Playlist title');
  const [searchResults, setSearchResults] = useState([]);

  const search = useCallback((term) => {
    Spotify.search(term).then(setSearchResults);
  }, []);

  const savePlaylist = useCallback(() => {
    const trackUris = playlistTracks.map((track) => track.uri);
    Spotify.savePlaylist(playlistName, trackUris).then(() => {
      setPlaylistName("New Playlist");
      setPlaylistTracks([]);
    });
  }, [playlistName, playlistTracks]);

  const playlistChangeHandler = (e) => {
    setPlaylistName(e.target.value)
  }

  const addSong = (track) => {
    if (playlistTracks.some((savedTrack) => savedTrack.id === track.id)) {
      return;
    } else {
      setPlaylistTracks((prevTracks) => [...prevTracks, track]);
    }
  }

  const removeSong = (track) => {
    setPlaylistTracks((prevTracks) => prevTracks.filter((currentTrack) => currentTrack.id !== track.id))
  }


  return (
    <div className="App">
      <header className="App-header">
        <h1>Jammming</h1>

      </header>
      <SearchBar onSearch={search} />

      <div className='results'>

        <div className='searchresults'>
          <SearchResults searchResults={searchResults} onAdd={addSong} />

        </div>

        <div className='playlist'>
          <Playlist playlistTracks={playlistTracks} playlistName={playlistName} playlistChangeHandler={playlistChangeHandler} onRemove={removeSong} onSave={savePlaylist} />
        </div>

      </div>





    </div>
  );
}

export default App;


//need to implement spotify api


