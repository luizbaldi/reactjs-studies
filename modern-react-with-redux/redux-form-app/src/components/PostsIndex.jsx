import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchPosts } from '../actions';
import { Link } from 'react-router-dom';
import _ from 'lodash';

class PostsIndex extends Component {
  componentWillMount() {
    this.props.fetchPosts();
  }
  render() {
    return (
      <div className="container">
        <div className="text-xs-right">
          <Link className="btn btn-primary" to="/posts/new">
            Add a Post
          </Link>
        </div>
        <h3>Posts</h3>
        <ul className="list-group">
          {_.map(this.props.posts, post => (
            <li className="list-group-item" key={post.id}>
              <span>{post.title}</span>
            </li>
          ))}
        </ul>
      </div>
    );
  }
};

const mapDispatchToProps = dispatch => bindActionCreators({ fetchPosts }, dispatch);

const mapStateToProps = ({ posts }) => ({ posts });

export default connect(mapStateToProps, mapDispatchToProps)(PostsIndex);