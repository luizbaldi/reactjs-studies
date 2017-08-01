import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { Header, Actions, Info } from '../components/UserDetails';
import { me } from '../config/data';

class Contacts extends Component {
	render() {
		return (
			<ScrollView>
				<Header 
					{...me}
					button={{
						label: 'Edit Profile',
						onPress: () => null
					}}
				/>
				<Actions {...me} />
				<Info {...me} />
			</ScrollView>
		);
	}
}

export default Contacts;