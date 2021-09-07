import React, {Component} from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import {UserStory} from '../../components';

class Story extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ScrollView
          horizontal={true}
          style={styles.scrollContainer}
          showsHorizontalScrollIndicator={false}>
          <UserStory name="Your Story" isUser={true} />
          <UserStory name="rafmasloman_" />
          <UserStory name="frontendraf" />
          <UserStory name="rafmasloman" />
          <UserStory name="rafmasloman" />
          <UserStory name="rafmasloman" />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  scrollContainer: {
    paddingHorizontal: 16,
  },
});

export default Story;
