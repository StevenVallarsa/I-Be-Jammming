import React from 'react'
import SearchBar from '../SearchBar/SearchBar'
import Playlist from '../Playlist/Playlist'
import SearchResults from '../SearchResults/SearchResults'

import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      searchResults: [
        {name: "Wild Boys", artist: "Duran Duran", album: "Arena", id: 1},
        {name: "Planet Earth", artist: "Duran Duran", album: "Duran Duuan", id: 2},
        {name: "The Reflex", artist: "Duran Duran", album: "Seven and the Ragged Tiger", id: 3}
      ]
    }
  }
  render() {
    return (
      <div>
        <h1>I-Be-Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar />
          <div className="App-playlist">
            <SearchResults searchResults={this.state.searchResults}/>
            <Playlist />
          </div>
        </div>
      </div>
  );
}
}

export default App;
