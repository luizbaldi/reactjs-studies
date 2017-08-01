import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { CustomTextInput } from '../components/TextInput';
import colors from '../config/colors';
import { PrimaryButton } from '../components/Buttons';

const fields = [
	{
		stateKey: 'firstName',
		placeholder: 'First name'
	},
	{
		stateKey: 'lastName',
		placeholder: 'Last name'
	},
	{
		stateKey: 'email',
		placeholder: 'E-mail',
		keyboardType: 'email-address'
	},
	{
		stateKey: 'mobilePhone',
		placeholder: 'Mobile Phone'
	},
	{
		stateKey: 'homePhone',
		placeholder: 'Home Phone'
	},
	{
		stateKey: 'city',
		placeholder: 'City'
	},
	{
		stateKey: 'username',
		placeholder: 'Username',
	}
];

class Contacts extends Component {
	constructor(props) {
		super(props);

		this.state = {};
		
		this.onChangeText = this.onChangeText.bind(this);
	}
	onChangeText(text, stateKey) {
		this.setState({
			[stateKey]: text
		});
	}
	handleSubmit(index, override = false) {
		if (index === fields.length - 1 || override) {
			alert('Submit');
		} else {
			const nextField = fields[index + 1];
			this[nextField.stateKey].focus();
		}
	}
	render() {
		return (
			<KeyboardAwareScrollView style={{ backgroundColor: colors.background }}>
				{fields.map((field, index) => (
					<CustomTextInput key={`field_${index}`}
						onChange={text => this.onChangeText(text, field.stateKey)}
						returnKeyType={index === fields.length - 1 ? 'done' : 'next'}
						onSubmitEditing={() => this.handleSubmit(index)}
						ref={(input) => this[field.stateKey] = input}
						{...field}
					/>
				))}
				<View>
					<PrimaryButton
						label={'Save'}
						onPress={() => this.handleSubmit(0, true)}
					/>
				</View>
			</KeyboardAwareScrollView>
		);
	}
}

export default Contacts;