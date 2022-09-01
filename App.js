import 'react-native-gesture-handler';
import React from 'react';
import MyTabs from './navs/bottombar';
import {NavigationContainer} from '@react-navigation/native';

const App = () => {
  return (
    <>
      <NavigationContainer>
        <MyTabs />
      </NavigationContainer>
    </>
  );
};
export default App;
