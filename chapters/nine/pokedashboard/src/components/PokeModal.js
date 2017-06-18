import React from 'react';
import { Modal, Button } from 'react-bootstrap/lib/';
import PokeLoader from './PokeLoader';

const PokeModal = ({showModal, handleModalState, pokemon}) => {
	console.log(pokemon);
	return (
		<Modal show={showModal} onHide={() => handleModalState('close')}>
			<Modal.Header closeButton>
				<Modal.Title>Pokemon Data</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				{ pokemon ?
					(
						<div className="text-center">
							<h4>Pokemon: {pokemon.name}</h4>
						</div>
					)
					: <PokeLoader />
				}

			</Modal.Body>
			<Modal.Footer>
				<Button onClick={() => handleModalState('close')}>Close</Button>
			</Modal.Footer>
		</Modal>
	);
};

export default PokeModal;