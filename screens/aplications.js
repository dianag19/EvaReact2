import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image } from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' + 'Shake or press menu button for dev menu',
});

export default class Aplications extends Component {
    static navigationsOptions = {
        title: 'Aplicaciones',
    }

    constructor(props){
        super(props)
        this.state = {
            name: this.props.navigation.state.params.name,
        }
    }
  render() {
    return (
      <View style={styles.container}>
        <Image
          style={{width: 100, height: 100}}
          source={require('../assets/images/evalogo.png')}
        />
        <Text style={styles.welcome}>Aplicaciones</Text>
        <Text style={styles.instructions}>Evalua tus aplicaciones</Text>
        <Text style={styles.instructions}>Nombre: {this.state.name}</Text>
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
});
