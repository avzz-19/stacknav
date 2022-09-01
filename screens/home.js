import React from 'react';
import {
  ImageBackground,
  Button,
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
} from 'react-native';

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

export default function HomeScreen({navigation}) {
  const DisplayList = ({navigation}) => {
    function handleClick(index) {
      navigation.navigate('Profile', {data: List[index]});
    }
    return List.map((a, index) => {
      return (
        <TouchableOpacity onPress={() => handleClick(index)}>
          <Text style={styles.textstyle}>{a.name}</Text>
        </TouchableOpacity>
      );
    });
  };
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <ImageBackground
        source={{
          uri: 'https://picsum.photos/500',
        }}
        style={{width: '100%', height: '100%'}}>
        <Text style={styles.titlestyle}>List of Flowers</Text>
        <DisplayList navigation={navigation} />
      </ImageBackground>
    </View>
  );
}
const styles = StyleSheet.create({
  buttonstyle: {
    paddingVertical: 14,
    backgroundColor: 'pink',
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
    width: 200,
    marginTop: 10,
  },
  textstyle: {
    fontSize: 24,
    margin: 5,
    backgroundColor: 'white',
    textAlign: 'center',
  },
  titlestyle: {
    fontSize: 32,
    margin: 0,
    backgroundColor: 'pink',
    textAlign: 'center',
    fontWeight:'700'
  },
});
