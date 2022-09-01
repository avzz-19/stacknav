import React from 'react';
import {ImageBackground, Button, View} from 'react-native';

export default function SettingsScreen({navigation}) {
  return (
    <ImageBackground
      source={{
        uri: 'https://picsum.photos/500',
      }}
      style={{width: '100%', height: '100%'}}>
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Button
          title="Go back"
          style={{width: 100, height: 100}}
          onPress={() => navigation.goBack()}
        />
      </View>
    </ImageBackground>
  );
}
