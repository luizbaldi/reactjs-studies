import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookList extends Component {
    render() {
        return (
            <ul className="list-group col-sm-4">
                {this.props.books.map(book => (
                    <li key={book.title} className="list-group-item">
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

export default connect(mapStateToProps)(BookList);