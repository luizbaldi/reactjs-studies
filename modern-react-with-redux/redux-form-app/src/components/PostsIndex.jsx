import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchPosts } from '../actions';

class PostsIndex extends Component {
  componentWillMount() {
    this.props.fetchPosts();
    console.log(this.props.posts);
  }
  render() {
    return (
      <div>
        Posts Index
      </div>
    );
  }
};

const mapDispatchToProps = dispatch => bindActionCreators({ fetchPosts }, dispatch);

const mapStateToProps = ({ posts }) => ({ posts });

export default connect(mapStateToProps, mapDispatchToProps)(PostsIndex);