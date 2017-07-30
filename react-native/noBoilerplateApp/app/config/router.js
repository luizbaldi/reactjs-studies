import { StackNavigator, TabNavigator } from 'react-navigation';

import Contacts from '../screens/Contacts';
import Details from '../screens/Details';
import NewContact from '../screens/NewContact';
import Me from '../screens/Me';

import { getFullName } from '../helpers/string';

export const ContactsStack = StackNavigator({
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
    },
});

export const NewContactStack = StackNavigator({
    NewContact: {
        screen: NewContact,
        navigationOptions: {
            header: null
        }
    }
});

export const MeStack = StackNavigator({
    Me: {
        screen: Me,
        navigationOptions: {
            header: null
        }
    }
});

export const MainTabs = TabNavigator({
    Contacts: {
        screen: ContactsStack
    },
    NewContact: {
        screen: NewContactStack,
        navigationOptions: {
            tabBarLabel: 'New Contact'
        }
    },
    Me: {
        screen: MeStack
    }
});
