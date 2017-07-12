import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

export default class SearchBar extends Component {
  constructor (props) {
    super(props)
    this.state = { term: '' }
  }

  onInputChange = event => {
    this.setState({term:event.target.value})
  }
  onFormSubmit = event => {
    event.preventDefault()
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
            >Search</button>
        </span>
      </form>
    )
  }
}

// const mapStateToProps = state => {
//   return {
//
//   }
// }
//
// const mapDispatchToProps = dispatch => {
//   return bindActionCreators({  }, dispatch)
// }
//
// export default connect(mapStateToProps)(SearchBar)
