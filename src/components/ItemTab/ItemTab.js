import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import ICHome from '../../assets/icon/icon_home.svg';
import ICSearch from '../../assets/icon/icon_search.svg';
import ICReels from '../../assets/icon/icon_reels.svg';
import ICShop from '../../assets/icon/icon_shop.svg';
import ICUser from '../../assets/icon/icon_user.svg';
const ItemTab = ({title, onPress, onLongPress}) => {
  const Icon = () => {
    if (title === 'Home') {
      return <ICHome />;
    }
    if (title === 'Search') {
      return <ICSearch />;
    }
    if (title === 'Reels') {
      return <ICReels />;
    }
    if (title === 'Shop') {
      return <ICShop />;
    }
    if (title === 'Profile') {
      return <ICUser />;
    }
    return <ICHome />;
  };
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
      onLongPress={onLongPress}>
      <Icon />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
});
export default ItemTab;
