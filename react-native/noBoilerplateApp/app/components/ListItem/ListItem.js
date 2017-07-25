import React from 'react';
import {
    View,
    Text,
    TouchableHighlight,
    Image,
    Platform
} from 'react-native';

import styles, { CHEVRON_SIZE } from './styles';
import { capitalizeFirstLetter } from '../../helpers/string';
import colors from '../../config/colors';

const ListItem = ({ contact, onPress }) => {
    const name = `${capitalizeFirstLetter(contact.name.first)} ${capitalizeFirstLetter(contact.name.last)}`;
    return (
        <TouchableHighlight
            onPress={onPress}
            underlayColor={colors.rowUnderlay}
        >
            <View>
                <Image 
                    style={styles.avatar}
                    source={{ uri: contact.picture.thumbnail }}
                />
                <View>
                    <Text style={styles.name}>{name}</Text>
                    <Text style={styles.email}>{contact.email}</Text>
                </View>
                <View style={styles.chevronContainer}>
                    <Text>Arrow</Text>
                </View>
            </View>
        </TouchableHighlight>
    );
};

export default ListItem;