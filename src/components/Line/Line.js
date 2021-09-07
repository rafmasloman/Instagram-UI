import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Line = () => {
  return <View style={styles.container}></View>;
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 1,
    backgroundColor: '#D9D9D9',
    paddingHorizontal: 0,
  },
});

export default Line;
