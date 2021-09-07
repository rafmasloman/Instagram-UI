import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import {Gap, Line} from '../../components';
import {Header, Hero, Stories} from '../../containers';

const Home = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Header />
        <Gap heigth={10} />
        <Stories />
        <Gap heigth={8} />
        <Line />
        <Gap heigth={16} />
        <Hero
          picture={require('../../assets/images/pictureshots01.png')}
          caption="eCommerce
        Fashion Website UI Design"
        />
        <Gap heigth={10} />
        <Gap heigth={20} />
        <Hero
          picture={require('../../assets/images/pictureshots02.png')}
          caption="Product card UI Slicing"
        />
        <Gap heigth={10} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default Home;
