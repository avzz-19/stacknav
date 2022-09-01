import React from 'react';
import {
  ImageBackground,
  View,
  TouchableOpacity,
  Text,
  Image,
} from 'react-native';

export default function ProfileScreen(props) {
  const {data} = props?.route?.params || {};
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <ImageBackground
        source={{
          uri: 'https://picsum.photos/200',
        }}
        style={{width: '100%', height: '100%'}}>
        <TouchableOpacity
          style={{
            paddingVertical: 14,
            backgroundColor: 'pink',
            borderRadius: 14,
            alignItems: 'center',
            justifyContent: 'center',
            width: 200,
            marginTop: 10,
            flexDirection: 'row',
          }}
          onPress={() => props.navigation.goBack()}>
          <Text>Go Back</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            paddingVertical: 14,
            backgroundColor: 'pink',
            borderRadius: 14,
            alignItems: 'center',
            justifyContent: 'center',
            width: 200,
            marginTop: 10,
            flexDirection: 'row',
          }}
          onPress={() => props.navigation.navigate('Notifications')}>
          <Text>Go to Notifications</Text>
        </TouchableOpacity>

        <Image
          source={{uri: data?.imageuri}}
          style={{width: 200, height: 200}}
        />
        <Text>{data?.description}</Text>
      </ImageBackground>
    </View>
  );
}
