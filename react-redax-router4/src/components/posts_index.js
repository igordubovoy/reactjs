import React, { Component } from 'react'
import { fetchPosts } from '../actions/index'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import _ from 'lodash'

class PostsIndex extends Component {
  componentDidMount () {
    this.props.fetchPosts()
  }

  renderPosts () {
    return _.map(this.props.posts, post => {
      return (
        <li
          key={post.id}
          className='list-group-item'>
          <Link to={`/posts/${post.id}`}>
            {post.title}
          </Link>
        </li>
      )
    })
  }

  render () {
    return (
      <div>
        <div className='text-xs-right'>
          <Link className='btn btn-primary' to='/posts/new'>
            Add a post
          </Link>
        </div>
        <h3>Posts</h3>
        <ul className='list-group'>
          {this.renderPosts()}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = ({ posts }) => { // ES6: { weather } === const weather = state.weather
  return { posts } // ES6:  { weather } === weather: state.weather
}

export default connect(mapStateToProps, { fetchPosts })(PostsIndex)
