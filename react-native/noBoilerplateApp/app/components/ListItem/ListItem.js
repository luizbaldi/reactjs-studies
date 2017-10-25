import React from 'react';
import {
    View,
    Text,
    TouchableHighlight,
    Image,
    Platform
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import style, { CHEVRON_SIZE } from './style';
import { getFullName } from '../../helpers/string';
import colors from '../../config/colors';

const ListItem = ({ contact, onRowPress }) => {
    const iconName = Platform.OS === 'ios' ? 'ios-arrow-forward' : 'md-arrow-forward';
    const name = `${getFullName(contact.name.first, contact.name.last)}`;
    return (
        <TouchableHighlight
            onPress={onRowPress}
            underlayColor={colors.rowUnderlay}
        >
            <View style={style.row}>
                <Image 
                    style={style.avatar}
                    source={{ uri: contact.picture.thumbnail }}
                />
                <View>
                    <Text style={style.name}>{name}</Text>
                    <Text style={style.email}>{contact.email}</Text>
                </View>
                <View style={style.chevronContainer}>
                    <Icon
                        name={iconName}
                        size={CHEVRON_SIZE}
                        style={style.chevron}
                        color={colors.subtleText}
                        
                    />
                </View>
            </View>
        </TouchableHighlight>
    );
};

export default ListItem;