import 'react-native-gesture-handler';
import React from 'react';
import {
  ImageBackground,
  SafeAreaView,
  Text,
  Touchable,
  TouchableOpacity,
  Image,
} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from './screens/home';
import ProfileScreen from './screens/profile';
import SettingsScreen from './screens/settings';
import NotificationsScreen from './screens/notifications';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Notifications" component={NotificationsScreen} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="Settings" component={SettingsScreen} />
    </Stack.Navigator>
  );
}
const App = () => {
  return (
    <>
      <NavigationContainer>
        <MyStack />
      </NavigationContainer>
    </>
  );
};
export default App;
