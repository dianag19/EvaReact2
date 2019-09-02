import React from 'react';
import { ImageBackground, StyleSheet, StatusBar, Dimensions, Button, Text, View, Image, Platform } from 'react-native';

import * as Expo from "expo";

export default class Progress extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      puntos: 300,
    }
  }

  componentDidMount() {
    this.setState({
      puntos : this.props.navigation.state.params.puntos
    })
  }
  render() {
    const { navigation, style } = this.props;
    return (
      <ImageBackground
        source={require('../assets/images/background.png')}
        style={styles.bgImage}
        resizeMode="cover"
      >
        <View style={styles.container}>            
          <Image
            style={{width: 80, height: 80}}
            source={require('../assets/images/evalogo.png')}
          />
          <View style={{flex: 1}}>
            <Image style={styles.image} source={require('../assets/images/Huevo-Feliz.png')} />
          </View>
          <View style={{flex: 1}}>
            <Text style={styles.welcome} >
              Puntos ganados: {this.state.puntos}
            </Text>
            <Text style={styles.welcome} >
              Felicitaciones, sigue evaluando!
            </Text>
            <Button
              title="SIGUIENTE"
              onPress={() => this.props.navigation.goBack()}
            >
            </Button>
          </View>          
        </View>           
      </ImageBackground>
    )
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
  image: {
    justifyContent: 'center',
    height: 158,
    width: 118,
  },
  welcome: {
    color: '#FFFFFF',
    margin: 10,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',    
  },
});
