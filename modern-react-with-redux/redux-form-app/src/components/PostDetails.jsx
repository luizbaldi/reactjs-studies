import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPost, deletePost } from '../actions';
import { Link } from 'react-router-dom';

class PostDetails extends Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.fetchPost(id);
  }
  onDeleteClick() {
    const { id } = this.props.match.params;
    this.props.deletePost(id, () => {
      this.props.history.push('/');
    });
  }
  render() {
    const { post } = this.props;
    return (
      <div>
        {post ?
          <div>
            <Link to='/'>Back to Index</Link>
            <button 
              className="btn btn-danger pull-xs-right"
              onClick={() => this.onDeleteClick()}
            >
              Delete post
            </button>
            <h3>{post.title}</h3>
            <h6>Categories: {post.categories}</h6>
            <p>{post.content}</p>
          </div>
          : <span>Loading...</span>
        }
      </div>
    )
  }
}

const mapStateToProps = ({ posts }, ownProps) => ({ post: posts[ownProps.match.params.id] });

export default connect(mapStateToProps, { fetchPost, deletePost })(PostDetails);