import React, { Component } from 'react';
import { View, Text } from 'react-native';

class Contacts extends Component {
	render() {
		const person = this.props.navigation.state.params;
		return (
			<View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
				<Text>{`${person.name.first} ${person.name.last}`}</Text>
			</View>
		);
	}
}

export default Contacts;