import React, { Component } from 'react';
import { ListGroup, ListGroupItem, Col   } from 'react-bootstrap/lib/';
import PokeLoader from './PokeLoader';
import PokeModal from './PokeModal';

class PokeList extends Component {
	constructor(props) {
		super(props);

		this.state = {
			showModal: false,
			currentPokemon: null
		};

		this.handleModalState = this.handleModalState.bind(this);
	}

	/*
	* Modal states: 'open' and 'close'
	*/
	handleModalState(state, pokemon) {
		let showModal = state === 'open';
		this.setState({
			showModal: showModal,
			currentPokemon: null
		});

		if (showModal) {
			fetch(pokemon.url)
				.then(response => {
					return response.json();
				})
				.then(data => {
					this.setState({
						currentPokemon: data
					});
				})
				.catch(err => {
					console.log("Error: " + err);
				})
		}
	}
	render() {
		let pokemons = this.props.pokemons;
		let loaded = this.props.loaded;
		let pokemonItems = pokemons.map((pokemon, index) => {
			return (
				<Col sm={6} md={4} key={'pokemon_' + index}>
					<ListGroupItem onClick={() => this.handleModalState('open', pokemon)}>{pokemon.name}</ListGroupItem>
				</Col>
			);
		});

		let listPokemonItems = (
			<ListGroup>
				{pokemonItems}
			</ListGroup>
		);

		return (
			<div>
				{ loaded ?
					listPokemonItems
					: <PokeLoader />
				}

				<PokeModal
					showModal={this.state.showModal}
					handleModalState={this.handleModalState}
					pokemon={this.state.currentPokemon} />
			</div>
		)
	}
};


export default PokeList;