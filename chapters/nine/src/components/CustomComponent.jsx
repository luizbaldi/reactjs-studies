import React from 'react';

export default class CustomComponent extends React.Component {
	constructor(props) {
		super(props);
		this.onChangeArea = this.onChangeArea.bind(this);
	}
	onChangeArea = function(event) {
		let valueTyped = event.target.value;
		console.log(valueTyped);
	}
	render() {
		return (
			<div>
				<h4>Focus</h4>
				<textarea onChange={this.onChangeArea} cols="30" rows="10"></textarea>
			</div>
		)
	}
}