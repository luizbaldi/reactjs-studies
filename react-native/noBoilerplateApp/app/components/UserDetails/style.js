import { StyleSheet, Dimensions } from 'react-native';

const window = Dimensions.get('window');

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
    }
});