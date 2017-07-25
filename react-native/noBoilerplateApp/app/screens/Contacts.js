import React, { Component } from 'react';
import { View, Text, FlatList } from 'react-native';

import { contacts } from '../config/data';
import colors from '../config/colors';
import { ListItem } from '../components/ListItem';

class Contacts extends Component {
	super(props) {
		constructor(props);
	}
	render() {
		return (
			<FlatList
				style={{ backgroundColor: colors.background}}
				data={contacts}
				renderItem={({ item }) => 
					<ListItem contact={item} /> 
				}
				keyExtractor={(item) => item.email}
			/>
		);
	}
};

export default Contacts;