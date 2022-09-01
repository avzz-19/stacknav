import React from 'react';
import {ImageBackground, Button, View} from 'react-native';

export default function NotificationsScreen({navigation}) {
  return (
    <ImageBackground
      source={{
        uri: 'https://picsum.photos/500',
      }}
      style={{width: '100%', height: '100%'}}>
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Button
          title="Go to Settings"
          onPress={() => navigation.navigate('Settings')}
        />
        <Button title="Go back" onPress={() => navigation.goBack()} />
      </View>
    </ImageBackground>
  );
}
