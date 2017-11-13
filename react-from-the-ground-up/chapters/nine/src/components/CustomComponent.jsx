import React from 'react';

export default class CustomComponent extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			typedValue: 'Type text inside textarea'
		};

		this.onChangeArea = this.onChangeArea.bind(this);
	}
	onChangeArea = function(event) {
		let valueTyped = event.target.value;
		this.setState({
			typedValue: valueTyped
		});
	}
	render() {
		return (
			<div>
				<h4>Focus</h4>
				<textarea onChange={this.onChangeArea} cols="30" rows="10"></textarea>
				<h5>Typed Value: {this.state.typedValue}</h5>
			</div>
		)
	}
}