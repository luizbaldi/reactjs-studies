import { StyleSheet } from 'react-native';
import colors from '../../config/colors';

export default StyleSheet.create({
    buttonText: {
        fontSize: 16,
        color: '#fafafa',
        fontWeight: '500'
    },
    button: {
        backgroundColor: colors.actionIcon,
        paddingVertical: 15,
        paddingHorizontal: 40,
        marginBottom: 15,
        marginTop: 10,
        borderRadius: 4
    }
});