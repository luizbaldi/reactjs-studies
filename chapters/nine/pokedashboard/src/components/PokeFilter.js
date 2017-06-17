import React from 'react';
import { Col, Button, Jumbotron } from 'react-bootstrap/lib';

const PokeFilter = ({numberOptions, onOptionSelected, selectedValue, allValue}) => {
	return (
		<Jumbotron>
			<p>Select the amout of pokemons to show</p>
			<Col sm={12}>
				{numberOptions.map((option, idx) => {
					return (
						<Button
							key={'pokeFilterKey_' + idx}
							onClick={onOptionSelected}
							bsStyle={selectedValue === option ? 'primary' : 'default'}
						>
							{option}
						</Button>
					)
				})}

				{ allValue
					? <Button onClick={onOptionSelected} bsStyle={selectedValue === allValue ? 'primary' : 'default'}>All</Button>
					: false
				}
			</Col>
		</Jumbotron>
	);
};

export default PokeFilter;