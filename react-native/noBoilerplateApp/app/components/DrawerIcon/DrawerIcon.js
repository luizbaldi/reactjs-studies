import React from 'react';
import {
    TouchableOpacity,
    Platform
} from 'react-native';
import style, { ICON_SIZE } from './style';
import Icon from 'react-native-vector-icons/Ionicons';

const DrawerIcon = ({ onPress }) => {
    const sidemenuIcon = Platform.OS ? 'ios-menu' : 'md-menu';
    return (
        <TouchableOpacity onPress={onPress}>
            <Icon 
                name={sidemenuIcon}
                color="#000"
                size={ICON_SIZE}
                style={style.icon}
            />
        </TouchableOpacity>
    )
};

export default DrawerIcon;