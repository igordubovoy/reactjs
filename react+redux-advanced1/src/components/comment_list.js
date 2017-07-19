import React from 'react'
import { connect } from 'react-redux'

const CommentList = (props) => {
  const renderList = () => {
    return props.comments.map(comment => <li key={comment}>{comment}</li>)
  }
  return (
    <ul className='comment-list'>
      { renderList() }
    </ul>
  )
}
const mapStateToProps = ({comments}) => {
  return { comments }
}
export default connect(mapStateToProps)(CommentList)
