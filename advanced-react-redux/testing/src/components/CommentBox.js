import React, { Component } from 'react'

/* Redux */
import { connect } from 'react-redux'
import { saveComment } from '../actions/index'

class CommentBox extends Component {
  constructor (props) {
    super(props)

    this.state = { comment: '' }
    this.onSubmit = this.onSubmit.bind(this)
    this.onHandleChange = this.onHandleChange.bind(this)
  }
  onHandleChange (comment) {
    this.setState({ comment })
  }

  onSubmit (e) {
    e.preventDefault()
    this.props.saveComment(this.state.comment)
    this.setState({ comment: '' })
  }

  render () {
    return (
      <form className='comment-box' onSubmit={this.onSubmit}>
        <h3>Add a comment</h3>
        <textarea
          value={this.state.comment}
          onChange={e => this.onHandleChange(e.target.value)}
        />
        <div>
          <button action='submit'>Submit</button>
        </div>
      </form>
    )
  }
}

export default connect(null, { saveComment })(CommentBox)
