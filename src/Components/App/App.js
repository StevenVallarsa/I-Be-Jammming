import React from 'react'
import SearchBar from '../SearchBar/SearchBar'
import Playlist from '../Playlist/Playlist'
import SearchResults from '../SearchResults/SearchResults'
import Spotify from '../../util/Spotify'

import './App.css';

// OLD HARD-CODED THIS.STATE.SEARCHRESULTS
// {name: "Get It While You Can", artist: "Gary O", album: "Strange Behaviour", id: 10},
// {name: "The Man With The Child In His Eyes", artist: "Kate Bush", album: "The Kick Inside", id: 11},
// {name: "Maneater", artist: "Hall & Oates", album: "H2O", id: 12}

// OLD HARD-CODED THIS.STATE.PLAYLISTTRACKS
// {name: "Wild Boys", artist: "Duran Duran", album: "Arena", id: 1},
// {name: "Planet Earth", artist: "Duran Duran", album: "Duran Duran", id: 2},
// {name: "The Reflex", artist: "Duran Duran", album: "Seven and the Ragged Tiger", id: 3},
// {name: "Is There Something I Should Know", artist: "Duran Duran", album: "Duran Duran", id: 4}


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      searchResults: [],
      playlistName: "New Playlist",
      playlistTracks: []
    }
    this.addTrack = this.addTrack.bind(this) 
    this.removeTrack = this.removeTrack.bind(this) 
    this.updatePlaylistName = this.updatePlaylistName.bind(this) 
    this.savePlaylist = this.savePlaylist.bind(this) 
    this.search = this.search.bind(this) 

  }

  addTrack(track) {
    const newPlaylistTracks = this.state.playlistTracks
    if (!newPlaylistTracks.find(item => item.id === track.id)) {
      newPlaylistTracks.push(track)
      this.setState({playlistTracks: newPlaylistTracks})
    }
  }

  removeTrack(track) {
    const newPlaylist = this.state.playlistTracks.filter(item => item.id !== track.id)
    this.setState({playlistTracks: newPlaylist})
  }

  updatePlaylistName(name) {
    this.setState({ playlistName: name })
  }

  savePlaylist() {
    const trackURIs = this.state.playlistTracks.map(track => track.uri)
    Spotify.savePlaylist(this.state.playlistName, trackURIs)
      .then(() => {
        this.setState({
          playlistName: "New Playlist",
          playlistTracks: []
    })
      })
    console.log(this.state.playlistName)
  }

  search(searchTerm) {
    Spotify.search(searchTerm).then(results => {
     this.setState({searchResults: results})
   }) 
  }

  render() {
    return (
      <div>
        <h1>I-Be-Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar 
            onSearch={this.search}
          />
          <div className="App-playlist">
            <SearchResults
              results={this.state.searchResults}
              onAdd={this.addTrack} 
            />
            <Playlist
              playlistName={this.state.playlistName}
              playlistTracks={this.state.playlistTracks}
              onRemove={this.removeTrack}
              onNameChange={this.updatePlaylistName}
              onSave={this.savePlaylist}
            />
          </div>
        </div>
      </div>
  );
}
}

export default App;
