import React from 'react';
import {Root} from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {createDrawerNavigator, createBottomTabNavigator, createStackNavigator} from 'react-navigation';

import Home from '../screens/Home';
import Orders from '../screens/Orders';
import BookDetail from '../screens/BookDetail';
import Profile from "../screens/Profile";
import Login from "../screens/Login";
import Register from "../screens/Register";
import Cart from "../screens/Cart";

const LoginNavigator =  createStackNavigator(
  {
    Login: Login,
    Profile: Profile,
  }
)

const HomeNavigator = createStackNavigator(
  {
    Home: Home ,
    Detail: BookDetail,
    Login: Login,
    Register: Register,
    Cart:Cart
  },
  {
    initialRouteName: 'Home',
    navigationOptions: {
      headerStyle: {
        borderBottomColor: '#fff',
        backgroundColor: '#fff'
      },
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  }
);

const ProfileNavigator = createStackNavigator({
  Profile: Profile,
  Orders: Orders,

})


const TabNavigator = createBottomTabNavigator(
  {
    Home: HomeNavigator,
    Profile: ProfileNavigator
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Home') {
          iconName = `ios-home${focused ? '' : '-outline'}`;
        } else if (routeName === 'Profile') {
          iconName = `ios-contact${focused ? '' : '-outline'}`;
        }
        return <Ionicons name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: '#ca212c',
      inactiveTintColor: 'gray',
    },
  }
);

TabNavigator.navigationOptions = ({ navigation }) => {
  let { routeName } = navigation.state.routes[navigation.state.index];

  // You can do whatever you like here to pick the title based on the route name
  let headerTitle = routeName;

  return {
    headerTitle,
  };
};


export default () =>
  <Root>
    <TabNavigator />
  </Root>;