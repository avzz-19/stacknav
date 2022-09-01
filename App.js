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
import {Button, View} from 'react-native';

const Stack = createStackNavigator();

const List = [
  {
    name: 'Jasmine',
    imageuri: 'https://picsum.photos/500',
    description: 'lorem bfjk3iweklfn eavcsb sjnlbmv s mvd',
  },
  {
    name: 'Rose',
    imageuri: 'https://picsum.photos/400',
    description: 'lorem bfjk3iweklfn eavcsb sjnlbmv s mvd',
  },
  {
    name: 'Tulip',
    imageuri: 'https://picsum.photos/300',
    description: 'lorem bfjk3iweklfn eavcsb sjnlbmv s mvd',
  },
  {
    name: 'Champa',
    imageuri: 'https://picsum.photos/200',
    description: 'lorem bfjk3iweklfn eavcsb sjnlbmv s mvd',
  },
  {
    name: 'Opium',
    imageuri: 'https://picsum.photos/100',
    description: 'lorem bfjk3iweklfn eavcsb sjnlbmv s mvd',
  },
];

const DisplayList = ({navigation}) => {
  function handleClick(index) {
    navigation.navigate('Profile', {data: List[index]});
  }
  return List.map((a, index) => {
    return (
      <TouchableOpacity onPress={() => handleClick(index)}>
        <Text
          style={{
            fontSize: 24,
            margin: 5,
            backgroundColor: 'white',
          }}>
          {a.name}
        </Text>
      </TouchableOpacity>
    );
  });
};

function HomeScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <ImageBackground
        source={{
          uri: 'https://picsum.photos/500',
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
          }}
          onPress={() => navigation.navigate('Profile')}>
          <Text>Go To Profile</Text>
        </TouchableOpacity>
        <DisplayList navigation={navigation} />
      </ImageBackground>
    </View>
  );
}

function ProfileScreen(props) {
  const {data} = props?.route?.params || {};
  console.log(data);
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
          source={{uri: data.imageuri}}
          style={{width: 200, height: 200}}
        />
        <Text>{data.description}</Text>
      </ImageBackground>
    </View>
  );
}
function NotificationsScreen({navigation}) {
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

function SettingsScreen({navigation}) {
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
