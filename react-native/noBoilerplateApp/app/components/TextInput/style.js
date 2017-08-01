import { StyleSheet, Dimensions, Platform } from 'react-native';
import colors from '../../config/colors';

const window = Dimensions.get('window');

export default StyleSheet.create({
    container: {
        marginLeft: 20,
        borderColor: colors.border,
        borderBottomWidth: Platform.OS === 'ios' ? StyleSheet.hairlineWidth : 0,
        marginTop: 15
    },
    input: {
        height: 50,
        width: window.width
    }
});