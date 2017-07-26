import { StackNavigator } from 'react-navigation';

import Contacts from '../screens/Contacts';
import Details from '../screens/Details';

import { getFullName } from '../helpers/string';

export  const ContactsStack = StackNavigator({
    Contacts: {
        screen: Contacts,
        navigationOptions: {
            title: 'Contacts'
        }
    },
    Details: {
        screen: Details,
        navigationOptions: ({ navigation }) => ({
            title: `${getFullName(navigation.state.params.name.first, navigation.state.params.name.last)}`
        })
    }
}); 