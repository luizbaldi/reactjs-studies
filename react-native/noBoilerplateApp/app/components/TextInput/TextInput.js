import React, { Component } from 'react';
import { View, TextInput } from 'react-native';
import style from './style';

class CustomTextInput extends Component {
    focus = () => {
        this._input.focus();
    }
    render() {
        return (
            <View style={style.container}>
                <TextInput 
                    autoCapitalize="none"
                    style={style.input}
                    ref={(input) => this._input = input}
                    {...this.props}
                />
            </View>
        );
    }
};

export default CustomTextInput;