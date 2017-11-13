import React from 'react';
import {
    View,
    Text
} from 'react-native';
import style from './style';
import ActionRow from './ActionRow';
import { capitalizeFirstLetter } from '../../helpers/string';

const Info = ({ location, dob, registered, login }) => {
    return (
        <View style={style.actionContainer}>
            <ActionRow 
                label={'city'}
                value={capitalizeFirstLetter(location.city)}
            />
            <ActionRow 
                label={'birthday'}
                value={dob}
            />
            <ActionRow 
                label={'registered'}
                value={registered}
            />
            <ActionRow 
                label={'username'}
                value={login.username}
            />
        </View>
    )
};

export default Info;