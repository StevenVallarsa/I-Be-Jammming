import React from 'react'
import './SearchBar.css'

class SearchBar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      term: ""
    }
    this.search = this.search.bind(this)
    this.handleTermChange = this.handleTermChange.bind(this)
  }

  search(e) {
    if (this.state.term.trim()) {
      this.props.onSearch(this.state.term)
      this.setState({term: ""})
    }
  }

  handleTermChange(e) {
    this.setState({term: e.target.value})
  }

  render() {
    return (
      <div className="SearchBar">
        <input
          placeholder="Enter A Song, Album, or Artist"
          value={this.state.term}
          onChange={this.handleTermChange}
        />
        <button
          className="SearchButton"
          onClick={this.search}>SEARCH
        </button>
    </div>
    )
  }
}

export default SearchBar