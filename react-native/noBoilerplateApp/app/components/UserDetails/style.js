import { StyleSheet, Dimensions } from 'react-native';
import colors from '../../config/colors';

const window = Dimensions.get('window');

export const ICON_SIZE = 25;
export default StyleSheet.create({ 
    view: {
        alignItems: 'center', 
        backgroundColor: '#fff'
    },
    image: {
        width: window.width / 2, 
        height: window.width / 2, 
        borderRadius: window.width / 4, 
        marginTop: 20
    },
    text: {
        marginTop: 10, 
        marginBottom: 10, 
        fontSize: 22
    },
    actionContainer: {
        paddingHorizontal: 18,
        paddingVertical: 15,
        backgroundColor: colors.grayBackground,
        borderTopWidth: StyleSheet.hairlineWidth,
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderTopColor: colors.border,
        borderBottomColor: colors.border
    },
    actionRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20
    },
    actionText: {
        color: '#adadad',
        flexDirection: 'column'
    },
    actionValue: {
        fontSize: 18,
        marginBottom: 4,
        color: colors.primaryText
    },
    actionIcons: {
        flexDirection: 'row'
    },
    actionIcon: {
        justifyContent: 'flex-end',
        marginLeft: 18
    },
    headerButtonText: {
        fontSize: 16,
        color: '#fafafa',
        fontWeight: '500'
    },
    headerButton: {
        backgroundColor: colors.actionIcon,
        paddingVertical: 15,
        paddingHorizontal: 40,
        marginBottom: 15,
        marginTop: 10,
        borderRadius: 4
    }
});