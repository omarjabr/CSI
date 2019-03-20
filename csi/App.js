import React, { Component } from 'react';
import { StyleSheet, AppRegistry, Dimensions } from 'react-native';
import {createStackNavigator, createAppContainer, createDrawerNavigator } from 'react-navigation';
import Login from './src/Login';
import IndexScreen from './src/Index';
import AddScreen from './src/add';
import UpdateScreen from './src/update';
import DeleteScreen from './src/delete';
import ListItem from './src/ListItem';
import RenewPassword from './src/renewPassword'
// import SideBar from './src/sidebar';

// const Drawer = createDrawerNavigator(
//   {
//     Login: {screen: Login},
//     Index: {screen: IndexScreen},
//   },
//   {
//     initialRouteName: "Login",
//     contentOptions: {
//       activeTintColor: "#e91e63"
//     },
//     contentComponent: props => <SideBar {...props} />
//   }
// );

const MainNavigator = createStackNavigator({
  // Drawer: { screen: Drawer },

  Login: {screen: Login},
  RenewPassword: {screen: RenewPassword},
  Index: {screen: IndexScreen},
  Add: {screen: AddScreen},
  Update: {screen: UpdateScreen},
  Delete: {screen: DeleteScreen},
  ListItem: {screen: ListItem},
}, {
  headerMode: 'none',
  initialRouteName: 'Login'
});

const App = createAppContainer(MainNavigator);

export default App;

