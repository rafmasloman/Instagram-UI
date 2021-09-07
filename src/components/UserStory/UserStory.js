import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import ICAddStory from '../../assets/icon/icon_add_story.svg';
import LinearGradient from 'react-native-linear-gradient';

const UserStory = ({name, isUser}) => {
  return (
    <View style={styles.container}>
      {isUser === true ? (
        <View>
          <Image
            source={require('../../assets/images/userpic.jpg')}
            style={styles.images(isUser)}
          />
          <View style={styles.iconWrapper}>
            <ICAddStory />
          </View>
        </View>
      ) : (
        <LinearGradient
          start={{x: 0.5, y: 0.1}}
          end={{x: 0.1, y: 0.7}}
          colors={['#9E2692', '#FAA958']}
          style={styles.linearWrapper}>
          <View style={styles.imageWrapper}>
            <Image
              style={styles.images(isUser)}
              source={require('../../assets/images/picture02.jpg')}
            />
          </View>
        </LinearGradient>
      )}
      <Text style={styles.text}>{name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginRight: 16,
  },
  linearWrapper: {
    width: 56,
    height: 56,
    borderRadius: 56 / 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageWrapper: {
    width: 52,
    height: 52,
    borderRadius: 52 / 2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  images: isUser => ({
    width: isUser === true ? 56 : 50,
    height: isUser === true ? 56 : 50,
    borderRadius: isUser === true ? 56 / 2 : 50 / 2,
  }),
  iconWrapper: {
    position: 'absolute',
    top: 30,
    left: 32,
  },
  text: {
    fontSize: 11,
    marginTop: 5,
    fontFamily: 'SFUIText-Regular',
  },
});

export default UserStory;
