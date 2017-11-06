import React, { Component } from 'react';

class SearchBar extends Component {
    constructor(props) {
        super(props)

        this.state = {
            term: ''
        }
    }
    onInputChange(value) {
        this.setState({
            term: value
        })
    }
    render() {
        return (
            <input 
                type="text"
                value={this.state.term}
                onChange={e => this.onInputChange(e.target.value)}
            />
        )
    }
}

export default SearchBar;