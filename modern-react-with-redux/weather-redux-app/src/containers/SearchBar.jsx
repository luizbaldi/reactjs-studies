import React, { Component } from 'react';

class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            term: ''
        };
    }
    onInputChange(value) {
        this.setState({
            term: value
        });
    }
    render() {
        return (
            <form className="input-group">
                <input 
                    type="text"
                    placeholder="Get a five-day forecast in your favorite cities"
                    className="form-control"
                    value={this.state.term}
                    onChange={event => this.onInputChange(event.target.value)}
                />
                <span className="input-group-btn">
                    <button type="submit" className="btn btn-secondary">Submit</button>
                </span>
            </form>
        )
    }
};

export default SearchBar;
