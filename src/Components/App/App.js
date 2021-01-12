import React from 'react'
import SearchBar from '../SearchBar/SearchBar'
import Playlist from '../Playlist/Playlist'
import SearchResults from '../SearchResults/SearchResults'

import './App.css';

function App() {
  return (
  <div>
    <h1>I-Be-Ja<span className="highlight">mmm</span>ing</h1>
    <div className="App">
      <SearchBar />
      <div className="App-playlist">
        <SearchResults />
        <Playlist />
      </div>
    </div>
  </div>
  );
}

export default App;
