import React from 'react';
import {View, Text, Button} from 'react-native';

const Splash = ({navigation}) => {
  return (
    <View>
      <Text>Splash Screen</Text>
      <Button onPress={() => navigation.replace('MainApp')} title="Go Home" />
    </View>
  );
};

export default Splash;
