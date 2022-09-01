import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MyStack from './stacknav';

import SettingsScreen from '../screens/settings';

const Tab = createBottomTabNavigator();

export default function MyTabs() {
  return (
    <Tab.Navigator initialRouteName="Home" screenOptions={{headerShown:false}}>
      <Tab.Screen name="Home" component={MyStack} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
}
