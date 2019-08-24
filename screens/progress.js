import React from 'react';
import { ImageBackground, StyleSheet, StatusBar, Dimensions, Button, Text, View,Image, Platform } from 'react-native';

import * as Expo from "expo";

export default class Progress extends React.Component {
    constructor(props){
        super(props);
        this.state = {
         puntos: 300,
        }
    }
  render() {
    const { navigation, style } = this.props;
  return (
    <View  style={styles.container}>
      <ImageBackground
        source={require('../assets/images/background.png')}
        style={styles.bgImage}
        resizeMode="cover"
      >
        {/*<StatusBar barStyle="light-content" />*/}
        <View  space="between" style={styles.padded}>
          <View  space="around" style={{position:'relative', zIndex: 2}}
          >
            <View center>
              <View >
                <Image style={styles.logo} source={require('../assets/images/Huevo-Feliz.png')} />
              </View>
              <Text style={styles.text} >
                Puntos ganados: {this.state.puntos}
              </Text>
              <Text style={styles.text} >
                Felicitaciones, sigue evaluando!
              </Text>
            </View>

            <View center>
              <Button
                title="SIGUIENTE"
                onPress={() => this.props.navigation.goBack()}
                >
               SIGUIENTE
              </Button>
            </View>

          </View>
        </View>
      </ImageBackground>
    </View>
  )
}
}

const styles = StyleSheet.create({
  bgImage: {
    marginHorizontal: -20,
  },
});
