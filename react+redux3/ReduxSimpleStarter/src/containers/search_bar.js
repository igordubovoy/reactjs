import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchWeather } from '../actions/index'

class SearchBar extends Component {
  constructor (props) {
    super(props)
    this.state = { term: '' }

    this.onInputChange = this.onInputChange.bind(this)
    this.onFormSubmit = this.onFormSubmit.bind(this)
  }

  onInputChange (event) {
    this.setState({term: event.target.value})
  }

  onFormSubmit (event) {
    event.preventDefault()

    this.props.fetchWeather(this.state.term)
    this.setState({term: ''})
  }

  render () {
    return (
      <form
        className='input-group'
        onSubmit={this.onFormSubmit}>
        <input
          value={this.state.term}
          placeholder='Get the five-day forecast in your favorite cities'
          className='form-control'
          onChange={this.onInputChange}
        />
        <span className='input-group-btn'>
          <button
            type='submit'
            className='btn btn-secondary'
            >Search
          </button>
        </span>
      </form>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ fetchWeather }, dispatch)
}

export default connect(null, mapDispatchToProps)(SearchBar)
