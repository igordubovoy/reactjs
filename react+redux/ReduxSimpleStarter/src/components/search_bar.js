import React, { Component } from 'react';

class SearchBar extends Component {
  constructor() {
    super()
    this.state = {
      curent: ''
    }
  }
  render() {
    return <input onChange={this.onInputChange} />
  }

  onInputChange = (event) => {
    this.setState({
      curent: event.target.value
    })
  }
}

export default SearchBar;
