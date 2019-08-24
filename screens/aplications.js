import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Button,Image, FlatList } from 'react-native';


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
      <View style={styles.container}>
        <Image
          style={{ width: 100, height: 100 }}
          source={require('../assets/images/evalogo.png')}
        />
        <Text style={styles.welcome}>Aplicaciones</Text>
        <Text style={styles.instructions}>Evalua tus aplicaciones</Text>
        <Text style={styles.instructions}>Nombre: {this.state.name}</Text>
        <FlatList
          data={this.state.aplications}
          renderItem={({ item }) =>
            <View>
              <Button title="BORRAR"></Button>
              <Button title={item.nombre} style={styles.item} onPress={() => navigate('Question', { nombreApp: item.nombre })}></Button>
            </View>
          }
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
});
