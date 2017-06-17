import React from 'react';
import { ListGroup, ListGroupItem, Col } from 'react-bootstrap/lib/';

const PokeList = ({pokemons}) => {
	let pokemonItems = pokemons.map((pokemon, index) => {
		return (
			<Col sm={6} md={4} key={'pokemon_' + index}>
				<ListGroupItem >{pokemon.name}</ListGroupItem>
			</Col>
		);
	});
	return (
		<ListGroup>
			{pokemonItems}
		</ListGroup>
	);
};

export default PokeList;