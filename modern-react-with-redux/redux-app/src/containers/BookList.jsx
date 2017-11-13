import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

class BookList extends Component {
    render() {
        return (
            <ul className="list-group col-sm-4">
                {this.props.books.map(book => (
                    <li 
                        key={book.title}
                        onClick={() => this.props.selectBook(book)}
                        className="list-group-item"
                    >
                        {book.title}
                    </li>
                ))}
            </ul>
        );
    }
}

function mapStateToProps(state) {
    /* Connecting react and redux */
    return { books: state.books };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ selectBook: selectBook}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(BookList);