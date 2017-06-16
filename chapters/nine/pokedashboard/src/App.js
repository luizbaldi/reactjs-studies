import React, { Component } from 'react';
import 'whatwg-fetch';
import PokeList from './components/PokeList';

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			'pokemons': []
		};

		this.loadPokemons = this.loadPokemons.bind(this);
	}
	loadPokemons(url) {
		fetch(url)
			.then(response => {
				return response.json();
			})
			.then(json => {
				this.setState({
					'pokemons': json.results
				});
			})
			.catch(err => {
				console.log('Error: ' + err);
			});
	}
	componentWillMount() {
		this.loadPokemons(this.props.baseUrl);
	}
	render() {
		return (
			<div>
				<PokeList pokemons={this.state.pokemons} />
			</div>
		);
	}
}

export default App;
