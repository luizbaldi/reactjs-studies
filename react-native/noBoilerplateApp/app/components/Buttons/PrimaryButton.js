import React from 'react';
import {
    TouchableHighlight,
    Text,
    View
} from 'react-native';
import style from './style';
import colors from '../../config/colors';

const PrimaryButton = ({ label, onPress }) => {
    return (
        <View>
            <TouchableHighlight 
                style={style.button}
                onPress={onPress}
                underlayColor={colors.rowUnderlay}
            >
                <Text style={style.buttonText}>{label}</Text>
            </TouchableHighlight>
        </View>
    )
};

export default PrimaryButton;