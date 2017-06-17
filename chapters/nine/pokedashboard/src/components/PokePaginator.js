import React from 'react';
import { Col, Pagination } from 'react-bootstrap/lib';

const PokePaginator = ({totalPages, activePage, handlePaginationSelect}) => {
	return (
		<Col sm={12}>
			<Pagination
				bsSize="medium"
				items={totalPages}
				activePage={activePage}
				onSelect={handlePaginationSelect}
				maxButtons={5}
				prev
				next
				ellipsis
			/>
		</Col>
	);
};

export default PokePaginator;