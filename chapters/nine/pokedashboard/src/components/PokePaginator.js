import React from 'react';
import { Col, Pagination } from 'react-bootstrap/lib';

const PokePaginator = ({totalPages, activePage, onSelect}) => {
	return (
		<Col sm={12}>
			{totalPages > 1
				? <Pagination
					bsSize="medium"
					items={totalPages}
					activePage={activePage}
					onSelect={onSelect}
					maxButtons={5}
					prev
					next
					first
					last
					ellipsis
				/>
				: null }
		</Col>
	);
};

export default PokePaginator;