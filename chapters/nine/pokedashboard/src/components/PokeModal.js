import React from 'react';
import { Modal, Button } from 'react-bootstrap/lib/';
import PokeLoader from './PokeLoader';
import PokeModalInfo from './PokeModalInfo';

const PokeModal = ({showModal, handleModalState, pokemon}) => {
	return (
		<Modal show={showModal} onHide={() => handleModalState('close')}>
			<Modal.Header closeButton>
				<Modal.Title>Pokemon Data</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				{ pokemon ?
					(
						<PokeModalInfo pokemon={pokemon} />
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