import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import ICHeart from '../../assets/icon/icon_heart.svg';
import ICComment from '../../assets/icon/icon_comment.svg';
import ICShare from '../../assets/icon/icon_share.svg';
import ICOption from '../../assets/icon/icon_option.svg';
import ICBookmark from '../../assets/icon/icon_bookmark.svg';

const Comment = ({caption}) => {
  return (
    <View style={commentStyles.container}>
      <Text style={commentStyles.caption}>
        <Text style={commentStyles.username}>frontendraf</Text> {caption}
      </Text>
      <Text style={commentStyles.comment}>Lihat semua 6 komentar</Text>
      <Text style={commentStyles.date}>16 Juli 2020</Text>
    </View>
  );
};

const Hero = ({picture, caption}) => {
  return (
    <View style={styles.container}>
      <View style={styles.heroHeader}>
        <View style={styles.userProfile}>
          <Image
            source={require('../../assets/images/picture02.jpg')}
            style={styles.images}
          />
          <Text style={styles.text}>frontendraf</Text>
        </View>
        <View>
          <ICOption />
        </View>
      </View>
      <View style={styles.imageWrapper}>
        <Image source={picture} style={styles.imagePost} />
      </View>
      <View style={styles.icons}>
        <View style={styles.iconContainer}>
          <ICHeart />
          <ICComment />
          <ICShare />
        </View>
        <ICBookmark />
      </View>
      <Comment caption={caption} />
    </View>
  );
};

const commentStyles = StyleSheet.create({
  container: {
    marginHorizontal: -6,
    marginTop: 5,
  },
  username: {
    fontWeight: '600',
    fontFamily: 'SFUIText-Medium',
  },
  caption: {
    fontSize: 12,
    marginTop: 5,
    fontFamily: 'SFUIText-Regular',
  },
  comment: {
    fontSize: 12,
    color: '#999999',
    marginTop: 5,
    fontFamily: 'SFUIText-Regular',
  },
  date: {
    fontSize: 10,
    color: '#999999',
    fontFamily: 'SFUIText-Regular',
    marginTop: 5,
  },
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
  },
  heroHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  userProfile: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  images: {
    width: 30,
    height: 30,
    borderRadius: 30 / 2,
  },
  imagePost: {
    width: '100%',
    height: '100%',
  },
  imageWrapper: {
    height: 400,
    marginHorizontal: -16,
    backgroundColor: 'red',
    marginTop: 5,
  },
  text: {
    fontSize: 13,
    fontFamily: 'SFUIText-Medium',
    marginLeft: 8,
  },
  icons: {
    flex: 0.3,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: -6,
    marginTop: 10,
  },
  iconContainer: {
    flex: 0.25,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
export default Hero;
