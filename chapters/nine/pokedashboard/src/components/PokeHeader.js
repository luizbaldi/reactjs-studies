import React from 'react';
import { PageHeader } from 'react-bootstrap/lib';

const PokeHeader = ({title, subtitle}) => {
	return (
		<PageHeader>
			{title}&nbsp;&nbsp;
			<small>{subtitle}</small>
		</PageHeader>
	);
}

export default PokeHeader;
