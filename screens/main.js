import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image, Button } from 'react-native';
import * as Expo from "expo";
import * as Google from 'expo-google-app-auth';
const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' + 'Shake or press menu button for dev menu',
});

export default class Main extends Component {

  signIn = async () => {
    console.log("entra a signin")
    try {
      const result = await Expo.Google.logInAsync({
        androidClientId: "445366866611-gjn08f5sd7geok0j7dq3frnnv0aamia4.apps.googleusercontent.com",
        scopes: ['profile', 'email'],
      });

      if (result.type === 'success') {
        console.log("entro");
      } else {
        console.log("cancelled");
      }
    } catch (e) {
      console.log("eror", e)
    }
  }
  

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
      <Button
        title="Go to create aplication"
        onPress={() => navigate('CreateAplication')}
      />
      <Button
        title="Login with Google"
        onPress={this.signIn}
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
