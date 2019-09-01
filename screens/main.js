import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image, Button, Block, ImageBackground } from 'react-native';
import * as Expo from "expo";
//import { Google } from 'expo';
import * as Google from 'expo-google-app-auth';

export default class Main extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      photoUrl: '',
    }
  }
  signIn = async () => {
    console.log("entra a signin")
    try {
      const result = await Google.logInAsync({
        androidClientId: "445366866611-g1pbnlb5vdhplmnmolndmpksmqddjsij.apps.googleusercontent.com",
        scopes: ['profile', 'email'],
      });

      if (result.type === 'success') {
        this.setState({
          signedIn: true,
          name: result.user.name,
          photoUrl: result.user.photoUrl
        }),
          console.log("despues de navigate dice signed es :" + this.state.signedIn),
          this.props.navigation.navigate('Aplications',{ name: this.state.name, photoUrl: this.state.photoUrl })
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
      <ImageBackground
        source={require('../assets/images/background.png')}
        style={styles.bgImage}
        resizeMode="cover"
      >
        <View style={styles.container}>        
          <Image
            style={{width: 100, height: 100}}
            source={require('../assets/images/evalogo.png')}
          />
          <View style={{flex: 1}}>
            <Text style={styles.welcome}>¡Bienvenido a Eva!</Text>
            <Text style={styles.instructions}>Evalua tus aplicaciones</Text>   
          </View> 
          <View style={{flex: 1, flexDirection: 'column', justifyContent: 'space-around',}}>
            <Button
              title="Evaluar aplicaciones"
              onPress={() => navigate('Aplications', {name: 'Jane'})}
            />
            <Button
              title="Crear aplicación"
              onPress={() => navigate('CreateAplication')}
            />  
            <Button
              title="Login con Google"
              color={'#d50000'}
              onPress={this.signIn}
            />        
          </View>   
        </View>
      </ImageBackground>      
    );
  }
}

const styles = StyleSheet.create({
  bgImage: {
    flex: 1,
    marginHorizontal: -20,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  instructions: {
    textAlign: 'center',
    color: '#FFFFFF',
    marginBottom: 5,
  },
  welcome: {
    color: '#FFFFFF',
    margin: 10,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',    
  },
});
