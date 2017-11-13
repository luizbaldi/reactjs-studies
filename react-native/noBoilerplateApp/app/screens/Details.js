import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { Header, Actions, Info } from '../components/UserDetails';

class Contacts extends Component {
	render() {
		const contact = this.props.navigation.state.params;
		return (
			<ScrollView>
				<Header {...contact} />
				<Actions {...contact} />
				<Info {...contact} />
			</ScrollView>
		);
	}
}

export default Contacts;