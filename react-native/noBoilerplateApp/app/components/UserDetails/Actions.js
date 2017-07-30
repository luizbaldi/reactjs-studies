import React from 'react';
import { 
    View,
    Platform
} from 'react-native';
import ActionRow from './ActionRow';
import style from './style';

const Actions = (contact) => {
    const { email, phone, cell } = contact;
    const emailIcon = Platform.OS === 'ios' ? 'ios-mail' : 'md-mail';
    const textIcon = Platform.OS === 'ios' ? 'ios-text' : 'md-text';
    const phoneIcon = Platform.OS === 'ios' ? 'ios-call' : 'md-call';
    return (
        <View style={style.actionView} >
            <ActionRow
                label={'email'}
                value={email}
                actions={[
                    {
                        icon: emailIcon,
                        onPress: () => null
                    }
                ]}
            />
            <ActionRow
                label={'cell'}
                value={cell}
                actions={[
                    {
                        icon: phoneIcon,
                        onPress: () => null
                    },
                    {
                        icon: textIcon,
                        onPress: () => null
                    }
                ]}
            />
            <ActionRow
                label={'home'}
                value={phone}
                actions={[
                    {
                        icon: phoneIcon,
                        onPress: () => null
                    }
                ]}
            />
        </View>
    );
};

export default Actions;