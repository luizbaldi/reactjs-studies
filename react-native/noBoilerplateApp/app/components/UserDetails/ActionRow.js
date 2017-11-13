import React from 'react';
import { 
    View, 
    Text,
    Platform,
    TouchableOpacity
} from 'react-native';
import style, { ICON_SIZE } from './style';
import colors from '../../config/colors';
import Icon from 'react-native-vector-icons/Ionicons';

const ActionRow = ({ label, value, actions = [] }) => {
    return (
        <View style={style.actionRow}>
            <View style={style.actionInfo}>
                <Text style={style.actionText}>{label}</Text>
                <Text style={style.actionValue}>{value}</Text>
            </View>
            <View style={style.actionIcons}>
                {actions.map((action, index) => (
                    <TouchableOpacity 
                        onPress={action.onPress}
                        key={`actionKey_${index}`}
                    >
                        <Icon
                            name={action.icon}
                            size={ICON_SIZE}
                            style={style.actionIcon}
                            color={colors.actionIcon}
                        />
                    </TouchableOpacity>
                ))}
            </View>
        </View>
    );
};

export default ActionRow;