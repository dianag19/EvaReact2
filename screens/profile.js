import React from 'react';
import { ImageBackground, StyleSheet, StatusBar, Dimensions, Button, Text, View, Image, Platform } from 'react-native';

import * as Expo from "expo";

export default class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      puntos: 300,
    }
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
            <Image style={styles.image} source={require('../assets/images/Paloma-Feliz.png')} />
            <Text style={styles.welcome} >
              Puntos ganados: total
            </Text>
          </View>
          <View style={{flex: 1, flexDirection: 'row',}}>
            <View style={{flex: 1, alignItems: 'center', flexDirection: 'column', justifyContent: 'space-around',}}>            
                <Image
                    style={{width: 110, height: 110}}
                    source={require('../assets/images/Amoroso.png')}
                />
                <Image
                    style={{width: 110, height: 110}}
                    source={require('../assets/images/Participativo.png')}
                />
            </View>
            <View style={{flex: 1, alignItems: 'center', flexDirection: 'column', justifyContent: 'space-around',}}>
                <Image
                    style={{width: 110, height: 110}}
                    source={require('../assets/images/Comentarista.png')}
                />
                <Image
                    style={{width: 110, height: 110}}
                    source={require('../assets/images/Critico.png')}
                />
            </View>
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
    width: 208,
  },
  welcome: {
    color: '#FFFFFF',
    margin: 10,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',    
  },
});
