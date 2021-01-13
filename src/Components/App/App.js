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
        {name: "Get It While You Can", artist: "Gary O", album: "Strange Behaviour", id: 10},
        {name: "The Man With The Child In His Eyes", artist: "Kate Bush", album: "The Kick Inside", id: 11},
        {name: "Maneater", artist: "Hall & Oates", album: "H2O", id: 12}
      ],
      playlistName: "Duran Duran's Hits",
      playlistTracks: [
        {name: "Wild Boys", artist: "Duran Duran", album: "Arena", id: 1},
        {name: "Planet Earth", artist: "Duran Duran", album: "Duran Duran", id: 2},
        {name: "The Reflex", artist: "Duran Duran", album: "Seven and the Ragged Tiger", id: 3},
        {name: "Is There Something I Should Know", artist: "Duran Duran", album: "Duran Duran", id: 4}
      ]
    }
    this.addTrack = this.addTrack.bind(this) 
    this.removeTrack = this.removeTrack.bind(this) 

  }

  addTrack(track) {
    const tracks = this.state.playlistTracks
    if (!tracks.find(item => item.id === track.id)) {
      tracks.push(track)
      this.setState({playlistTracks: tracks})
    }
  }

  removeTrack(track) {
    const newPlaylist = this.state.playlistTracks.filter(item => item.id !== track.id)
    this.setState({playlistTracks: newPlaylist})
  }

  render() {
    return (
      <div>
        <h1>I-Be-Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar />
          <div className="App-playlist">
            <SearchResults
              results={this.state.searchResults}
              onAdd={this.addTrack} 
            />
            <Playlist
              playlistName={this.state.playlistName}
              playlistTracks={this.state.playlistTracks}
              onRemove={this.removeTrack}
            />
          </div>
        </div>
      </div>
  );
}
}

export default App;
