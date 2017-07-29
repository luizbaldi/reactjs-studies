import React, { Component } from 'react';
import { View } from 'react-native';
import { Header, Actions } from '../components/UserDetails';

class Contacts extends Component {
	render() {
		const contact = this.props.navigation.state.params;
		return (
			<View>
				<Header {...contact} />
				<Actions {...contact} />
			</View>
		);
	}
}

export default Contacts;