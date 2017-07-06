import React from 'react';
import { Radar } from 'react-chartjs';

const PokeModalInfo = ({pokemon}) => {
	let labels = [];
	let data = [];

	pokemon.stats.forEach(info => {
		labels.push(info.stat.name);
		data.push(info.base_stat);
	});

	let chartData = {
		labels: labels,
		datasets: [
			{
				data: data,
				fillColor: "rgba(255,9,132,0.2)",
				strokeColor: "rgba(255,99,132,1)",
				pointColor: "rgba(255,99,132,1)",
				pointBorderColor: "#fff",
				pointHoverBackgroundColor: "#fff",
				pointHoverBorderColor: "rgba(255,99,132,1)"
			}
		]
	};

	return (
		<div className="text-center">
			<h4>{pokemon.name}</h4>
			<p>Pokemon Info:</p>
			<Radar data={chartData} width="300" height="300" />
		</div>
	);
};

export default PokeModalInfo;