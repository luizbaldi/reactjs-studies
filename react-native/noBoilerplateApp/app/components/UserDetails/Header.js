import React from 'react';

import { View, Text, Image } from 'react-native';
import style from './style';
import { getFullName } from '../../helpers/string';

const Header = (contact) => {
    return (
        <View style={style.view}>
            <Image
                style={style.image}
                source={{ uri: contact.picture.large }}
            />
            <Text style={style.text}>{getFullName(contact.name.first, contact.name.last)}</Text>
        </View>
    );
}

export default Header;