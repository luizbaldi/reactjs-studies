import React from 'react';
import pokeball from '../pokeball.svg';

const PokeLoader = () => {
	return (
		<div className="text-center">
			<img src={pokeball} className="pokeball-loader" alt="loading" />
			<h4>Loading...</h4>
		</div>
	)
};

export default PokeLoader;