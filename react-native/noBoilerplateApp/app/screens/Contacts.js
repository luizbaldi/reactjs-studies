import React, { Component } from 'react';
import { View, Text, FlatList } from 'react-native';

import { contacts } from '../config/data';
import colors from '../config/colors';
import { ListItem } from '../components/ListItem';

class Contacts extends Component {
	super(props) {
		constructor(props);

		this.onRowPress = this.onRowPress.bind(this);
	}
	onRowPress(item) {
		this.props.navigation.navigate('Details', item);
	}
	render() {
		return (
			<FlatList
				style={{ backgroundColor: colors.background}}
				data={contacts}
				ItemSeparatorComponent={
					<View style={{
						height: 1,
						width: "86%",
						backgroundColor: "#CED0CE",
						marginLeft: "14%"
						}}
					/>
				}
				renderItem={({ item }) => 
					<ListItem 
						contact={item}
						onRowPress={() => this.onRowPress(item)} /> 
				}
				keyExtractor={(item) => item.email}
			/>
		);
	}
};

export default Contacts;