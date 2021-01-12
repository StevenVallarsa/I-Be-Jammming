import React from 'react'
import Track from '../Track/Track'

class TrackList extends React.Component {
  render() {
    return (
      <div className="TrackList">
        {this.props.searchResults.map(track => <Track key={track.id} track={track} />)}
        
      </div>
    )
  }
}

export default TrackList