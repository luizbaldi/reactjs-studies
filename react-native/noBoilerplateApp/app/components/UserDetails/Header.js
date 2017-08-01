import React from 'react';

import { View, Text, Image, TouchableHighlight } from 'react-native';
import style from './style';
import { getFullName } from '../../helpers/string';
import colors from '../../config/colors';

const Header = ({ picture, name, button }) => {
    return (
        <View style={style.view}>
            <Image
                style={style.image}
                source={{ uri: picture.large }}
            />
            <Text style={style.text}>{getFullName(name.first, name.last)}</Text>
            {button ? 
                <TouchableHighlight 
                    style={style.headerButton}
                    onPress={button.onPress}
                    underlayColor={colors.rowUnderlay}
                >
                    <Text style={style.headerButtonText}>{button.label}</Text>
                </TouchableHighlight>
                : null
            }
        </View>
    );
}

export default Header;