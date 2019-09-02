import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image } from 'react-native';
import {createStackNavigator, createAppContainer} from 'react-navigation';
import Main from './main'
import Aplications from './aplications'
import Question from './question'
import Progress from './progress'
import CreateAplication from './createAplications'
import Profile from './profile'

const screens = createStackNavigator({
  Main: {screen: Main},
  Aplications: {screen: Aplications},
  Question: { screen: Question},
  Progress: { screen: Progress},
  CreateAplication: { screen: CreateAplication},
  Profile: { screen: Profile},
});

const App = createAppContainer(screens);

export default App;