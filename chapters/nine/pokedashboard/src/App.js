import React, { Component } from 'react';
import 'whatwg-fetch';
import PokeList from './components/PokeList';
import PokePaginator from './components/PokePaginator';
import PokeFilter from './components/PokeFilter';
import PokeHeader from './components/PokeHeader';

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			pokemons: [],
			activePage: 1,
			limit: 25,
			offset: 0,
			totalPages: 0
		};

		this.loadPokemons = this.loadPokemons.bind(this);
		this.handlePaginationSelect = this.handlePaginationSelect.bind(this);
		this.handleLimitChange = this.handleLimitChange.bind(this);
	}
	loadPokemons(url) {
		fetch(url)
			.then(response => {
				return response.json();
			})
			.then(json => {
				let totalPages = Math.round(json.count / this.state.limit);
				this.setState({
					pokemons: json.results,
					totalPages: totalPages,
					count: json.count
				});
			})
			.catch(err => {
				console.log('Error: ' + err);
			});
	}
	componentWillMount() {
		this.loadPokemons(this.props.baseUrl + '/?limit=' + this.state.limit);
	}
	handlePaginationSelect(selectedPage) {
		let offset = this.state.limit * selectedPage;
		let urlToLoad = this.props.baseUrl + '/?limit=' + this.state.limit + '&offset=' + offset;
		this.loadPokemons(urlToLoad);
		this.setState({
			activePage: selectedPage
		});
	}
	handleLimitChange(evt) {
		this.setState({
			limit: +evt.target.innerHTML || this.state.count,
			activePage: 1
		}, () => {
			let urlToLoad = this.props.baseUrl + '?limit=' + this.state.limit + '&offset=0';
			this.loadPokemons(urlToLoad);
		});
	}
	render() {
		return (
			<div className="container text-center">
				<PokeHeader title="PokeDashboard" subtitle="Simple Pokemon Panel"/>
				<PokeFilter
					numberOptions={[10, 50, 100]}
					selectedValue={this.state.limit}
					allValue={this.state.count}
					onOptionSelected={this.handleLimitChange} />
				<PokeList pokemons={this.state.pokemons} />
				<PokePaginator
					totalPages={this.state.totalPages}
					activePage={this.state.activePage}
					handlePaginationSelect={this.handlePaginationSelect} />
			</div>
		);
	}
}

export default App;
