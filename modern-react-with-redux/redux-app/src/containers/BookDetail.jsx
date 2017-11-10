import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookDetail extends Component {
    render() {
        return (
            <div>
                {this.props.book ?
                    <div>
                        <h3>Details for:</h3>
                        <div>Title: {this.props.book.title}</div>
                        <div>Pages: {this.props.book.pages}</div>
                    </div>
                    : <span>No book selected :)</span>
                }
            </div>
        )
    }
}

function mapStateToProps(state) {
    return { book: state.activeBook };
}

export default connect(mapStateToProps)(BookDetail);