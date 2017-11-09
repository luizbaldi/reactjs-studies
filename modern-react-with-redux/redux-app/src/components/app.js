import React, { Component } from 'react';

/* Components */
import BookList from '../containers/BookList.jsx';

export default class App extends Component {
    render() {
        return (
            <div>
                <BookList />
            </div>
        );
    }
}
