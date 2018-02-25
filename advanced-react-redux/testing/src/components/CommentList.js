import React from 'react'

/* Redux */
import { connect } from 'react-redux'

const CommentList = ({ comments }) => (
  <ul className='comment-list'>
    {comments.map((comment, idx) => <li key={`comment_${idx}`}>{comment}</li>)}
  </ul>
)

const mapStateToProps = ({ comments }) => ({ comments })

export default connect(mapStateToProps)(CommentList)
