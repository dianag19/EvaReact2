import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Button,Image, FlatList, ImageBackground, TouchableHighlight } from 'react-native';


export default class Aplications extends Component {
  static navigationsOptions = {
    title: 'Aplicaciones',
  }
  constructor(props) {
    super(props)
    this.state = {
      name: this.props.navigation.state.params.name,
      aplications: [],
    }
  }
  componentDidMount(){
    console.log("entra a did mount");
    return fetch('https://evadjango.herokuapp.com/aplications.json')
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          aplications: responseJson,
        })
      },
      console.log(this.state.aplications))
      .catch((error) => {
        console.error(error);
      });
  }
 

  render(){
    const { navigate } = this.props.navigation;
    console.log(this.state.aplications);
    return (
      <ImageBackground
        source={require('../assets/images/background.png')}
        style={styles.bgImage}
        resizeMode="cover"
      >        
        <View style={styles.container}>
          <Image
            style={{ width: 100, height: 100, }}          
            source={{uri: this.props.navigation.state.params.photoUrl}}
          />
          <TouchableHighlight
            style={styles.button}
            onPress={() => navigate('Profile')}>
            <Text style={{color: '#FFFFFF', fontWeight: 'bold'}}>PERFIL</Text>
          </TouchableHighlight>
          
          <Text style={styles.welcome}>Bienvenido {this.props.navigation.state.params.name}</Text>
          <Text style={styles.instructions}>Selecciona una aplicación para evaluar</Text>
          
            <FlatList 
              data={this.state.aplications}
              renderItem={({ item }) =>
                <View >
                  <Button title={item.nombre} onPress={() => navigate('Question', { nombreApp: item.nombre })}></Button>
                </View>
              }
            />       
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
  button: {
    alignItems: 'center',
    backgroundColor: '#2b94ec',//color del boton azul 
    width: 200,
    padding: 10
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
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',    
  },
});
