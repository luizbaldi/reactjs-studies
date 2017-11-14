import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions';

class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            term: ''
        };

        this.onFormSubmit = this.onFormSubmit.bind(this);
    }
    onInputChange(value) {
        this.setState({
            term: value
        });
    }
    onFormSubmit(e) {
        e.preventDefault();
        console.log(`Submiting the form. Term: ${this.state.term}`);
        this.props.fetchWeather(this.state.term);
        this.setState({ term: '' });
    }
    render() {
        return (
            <form 
                className="input-group"
                onSubmit={this.onFormSubmit}
            >
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

const mapDispatchToProps = dispatch => bindActionCreators({ fetchWeather }, dispatch);

export default connect(null, mapDispatchToProps)(SearchBar);
