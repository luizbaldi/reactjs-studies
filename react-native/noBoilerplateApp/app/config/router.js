import React from 'react';
import { StackNavigator, TabNavigator, DrawerNavigator } from 'react-navigation';

import Contacts from '../screens/Contacts';
import Details from '../screens/Details';
import NewContact from '../screens/NewContact';
import Me from '../screens/Me';

import { getFullName } from '../helpers/string';
import { DrawerIcon } from '../components/DrawerIcon';

export const ContactsStack = StackNavigator({
    Contacts: {
        screen: Contacts,
        navigationOptions: ({ navigation }) => ({
            title: 'Contacts',
            headerLeft: <DrawerIcon onPress={() => navigation.navigate('DrawerOpen')} />
        })
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
        navigationOptions: ({ navigation }) => ({
            title: 'New Contact',
            headerLeft: <DrawerIcon onPress={() => navigation.navigate('DrawerOpen')} />
        })
    }
});

export const MeStack = StackNavigator({
    Me: {
        screen: Me,
        navigationOptions: ({ navigation }) => ({
            title: 'Me',
            headerLeft: <DrawerIcon onPress={() => navigation.navigate('DrawerOpen')} />
        })
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

export const MainDrawer = DrawerNavigator({
    Contacts: {
        screen: ContactsStack
    },
    NewContact: {
        screen: NewContactStack,
        navigationOptions: {
            drawerLabel: 'New Contact'
        }
    },
    Me: {
        screen: MeStack
    }
});