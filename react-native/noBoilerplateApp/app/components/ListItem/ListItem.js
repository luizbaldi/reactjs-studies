import React from 'react';
import {
    View,
    Text,
    TouchableHighlight,
    Image,
    Platform
} from 'react-native';

import styles, { CHEVRON_SIZE } from './styles';
import { getFullName } from '../../helpers/string';
import colors from '../../config/colors';

const ListItem = ({ contact, onRowPress }) => {
    const name = `${getFullName(contact.name.first, contact.name.last)}`;
    return (
        <TouchableHighlight
            onPress={onRowPress}
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