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

const Actions = (contact) => {
    const { email, phone, cell } = contact;
    const emailIcon = Platform.OS === 'ios' ? 'ios-mail' : 'md-mail';
    const textIcon = Platform.OS === 'ios' ? 'ios-text' : 'md-text';
    const phoneIcon = Platform.OS === 'ios' ? 'ios-call' : 'md-call';
    return (
        <View style={style.actionView} >
            <View style={style.actionRow}>
                <View style={style.actionInfo}>
                    <Text style={style.actionText}>email</Text>
                    <Text style={style.actionValue}>{email}</Text>
                </View>
                <View style={style.actionIcons}>
                    <TouchableOpacity onPress={() => null}>
                        <Icon
                            name={emailIcon}
                            size={ICON_SIZE}
                            style={style.actionIcon}
                            color={colors.actionIcon}
                        />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={style.actionRow}>
                <View style={style.actionInfo}>
                    <Text style={style.actionText}>cell</Text>
                    <Text style={style.actionValue}>{cell}</Text>
                </View>
                <View style={style.actionIcons}>
                    <TouchableOpacity onPress={() => null}>
                        <Icon
                            name={phoneIcon}
                            size={ICON_SIZE}
                            style={style.actionIcon}
                            color={colors.actionIcon}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => null}>
                        <Icon
                            name={textIcon}
                            size={ICON_SIZE}
                            style={style.actionIcon}
                            color={colors.actionIcon}
                        />
                    </TouchableOpacity>
                </View>
                
            </View>
            <View style={style.actionRow}>
                <View style={style.actionInfo}>
                    <Text style={style.actionText}>home</Text>
                    <Text style={style.actionValue}>{phone}</Text>
                </View>
                <View style={style.actionIcons}>
                    <TouchableOpacity onPress={() => null}>
                        <Icon
                            name={phoneIcon}
                            size={ICON_SIZE}
                            style={style.actionIcon}
                            color={colors.actionIcon}
                        />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

export default Actions;