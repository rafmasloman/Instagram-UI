import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import InstagramLogo from '../../assets/illustration/instagram_logo.svg';
import ICAdd from '../../assets/icon/icon_add_filled.svg';
import ICHeart from '../../assets/icon/icon_heart.svg';
import ICShare from '../../assets/icon/icon_share.svg';

class Header extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.logoWrapper}>
          <InstagramLogo />
        </View>
        <View style={styles.action}>
          <ICAdd width={20} height={20} />
          <ICHeart width={20} height={20} />
          <ICShare width={20} height={20} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 10,
    paddingHorizontal: 16,
  },
  logoWrapper: {
    flex: 3.5,
  },
  action: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

export default Header;
