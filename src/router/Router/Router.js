import React from 'react';
import {View, Text} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Home, Profile, Reels, Search, Shop, Splash} from '../../pages';
import {MyTabBar} from '../../components';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const MainApp = () => {
  return (
    <Tab.Navigator tabBar={props => <MyTabBar {...props} />}>
      <Tab.Screen component={Home} name="Home" options={{headerShown: false}} />
      <Tab.Screen component={Search} name="Search" />
      <Tab.Screen component={Reels} name="Reels" />
      <Tab.Screen component={Shop} name="Shop" />
      <Tab.Screen component={Profile} name="Profile" />
    </Tab.Navigator>
  );
};

const Router = () => {
  return (
    <Stack.Navigator>
      {/* <Stack.Screen component={Home} name="Home" /> */}
      <Stack.Screen
        component={MainApp}
        name="MainApp"
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default Router;
