import React, { Component } from 'react';

import { Header } from '../components/UserDetails';

class Contacts extends Component {
	render() {
		const contact = this.props.navigation.state.params;
		return (
			<Header {...contact} />
		);
	}
}

export default Contacts;