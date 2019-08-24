import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image, Button } from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' + 'Shake or press menu button for dev menu',
});

export default class Main extends Component {
  render() {
      const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
         <Image
          style={{width: 100, height: 100}}
          source={require('../assets/images/evalogo.png')}
        />
        <Text style={styles.welcome}>Bienvenido a Eva!</Text>
        <Text style={styles.instructions}>Evalua tus aplicaciones</Text>
        <Button
        title="Go to Aplications"
        onPress={() => navigate('Aplications', {name: 'Jane'})}
      />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
