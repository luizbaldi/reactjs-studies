import React, { Component } from 'react'
import CommentBox from './CommentBox'
import CommentList from './CommentList'

export default class App extends Component {
  render () {
    return (
      <div>
        <CommentBox />
        <CommentList />
      </div>
    )
  }
}
