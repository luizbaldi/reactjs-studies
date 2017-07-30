import React from 'react';

import { View, Text, Image } from 'react-native';
import style from './style';
import { getFullName } from '../../helpers/string';

const Header = ({ picture, name }) => {
    return (
        <View style={style.view}>
            <Image
                style={style.image}
                source={{ uri: picture.large }}
            />
            <Text style={style.text}>{getFullName(name.first, name.last)}</Text>
        </View>
    );
}

export default Header;