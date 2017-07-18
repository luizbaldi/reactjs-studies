import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { contacts } from '../config/data';
import colors from '../config/colors';

class Contacts extends Component {
	render() {
		return (
			<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
				<Text>Contacts Screen</Text>
				<FlatList
					style={{ backgroundColor: colors.background}}
					data={contacts}
  					renderItem={({item}) => <View><Text>{item.email}</Text></View>}
					keyExtractor={(item) => item.email}
				/>
			</View>
		);
	}
};

export default Contacts;