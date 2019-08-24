import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image } from 'react-native';
import {createStackNavigator, createAppContainer} from 'react-navigation';
import Main from './main'
import Aplications from './aplications'

const screens = createStackNavigator({
  Main: {screen: Main},
  Aplications: {screen: Aplications},
});

const App = createAppContainer(screens);

export default App;