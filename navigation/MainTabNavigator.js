import React from 'react';
import { Platform } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';

import TabBarIcon from '../components/TabBarIcon';
import OrderScreen from '../screens/ConnectedMoviesOrderScreen';
import ProfileScreen from '../screens/ConnectedProfileScreen';
import MovieListScreen from '../screens/ConnectedMovieListScreen';
import OrderDetailsScreen from '../screens/presentational/OrderDetailsScreen';

const ProfileStack = createStackNavigator({
  Profile: ProfileScreen,
  OrderDetails: OrderDetailsScreen
});

ProfileStack.navigationOptions = {
  tabBarLabel: 'Profile',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  )
};

const OrderStack = createStackNavigator({
  Order: OrderScreen,
  MovieList: MovieListScreen
});

OrderStack.navigationOptions = {
  tabBarLabel: 'Order',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'} />
  )
};

export default createBottomTabNavigator({
  OrderStack,
  ProfileStack
});
