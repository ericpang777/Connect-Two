import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import ContactsScreen from '../screens/ContactsScreen';
import ConnectScreen from '../screens/ConnectScreen';
import MyCardScreen from '../screens/MyCardScreen';

const ContactsStack = createStackNavigator({
  Home: ContactsScreen,
});

ContactsStack.navigationOptions = {
  tabBarLabel: 'Contacts',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  ),
};

const ConnectStack = createStackNavigator({
  Connect: ConnectScreen,
});

ConnectStack.navigationOptions = {
  tabBarLabel: 'Connect',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'}
    />
  ),
};

const MyCardStack = createStackNavigator({
  Settings: MyCardScreen,
});

MyCardStack.navigationOptions = {
  tabBarLabel: 'My Card',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'}
    />
  ),
};

export default createBottomTabNavigator({
  ContactsStack,
  ConnectStack,
  MyCardStack,
});
