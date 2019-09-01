import React from 'react';
import { ImageBackground, Button, Text, SafeAreaView, CheckBox, StyleSheet, StatusBar, Dimensions, Image, Platform, Modal, View, TouchableHighlight, Alert, TextInput } from 'react-native';
import Carousel from 'react-native-snap-carousel';

import * as Expo from "expo";

export default class Question extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      puntosPorPregunta: 100,
      respuestas: [],
      questions: ['¿Qué sentiste cuando usaste la aplicación', 'Question 2'],
      modalVisible: false,
      activeIndex: 0,
      carouselItems: [
        {
          title: "Feliz",
          //image: '../assets/images/Huevo/Feliz.png',
        },
        {
          title: "Triste",
          //image: '../assets/images/Huevo/Feliz.png',
        },
        {
          title: "Satisfecho"
        },
        {
          title: "Insatisfecho"
        },
        {
          title: "Decepcionado"
        },
        {
          title: "Emocionado"
        },
        {
          title: "Aburrido"
        },
        {
          title: "Enojado"
        },
        {
          title: "Interesado"
        },
        {
          title: "Confundido"
        },
        {
          title: "Impaciente"
        },
        {
          title: "Inseguro"
        },
        {
          title: "Perdido"
        }
      ]
    }
  };

  _renderItem({ item, index }) {
    return (
      <View style={{flex:1, flexDirection: 'column', justifyContent: 'space-around', alignItems: 'center' }}>
        <Image style={styles.image} source={require('../assets/images/Huevo-Feliz.png')} />
        <Text style={styles.text}>{item.title}</Text>
      </View>
    )
  }

  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }
  submit() {
    console.log("entra a submit question")
    let collection = {}

    collection.nombre = this.state.nombre,
        collection.descripcion = this.state.descripcion
    console.log(collection)

    var url = 'https://evadjango.herokuapp.com/aplications/';

    fetch(url, {
        method: 'POST', // or 'PUT'
        body: JSON.stringify(collection), // data can be `string` or {object}!
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => res.json())
        .then(response => console.log('Success:', JSON.stringify(response),
        alert("Aplicación creada correctamente")))
        .catch(error => console.error('Error:', error));
}
  render() {

    const { navigation, style } = this.props;

    return (
      <View style={styles.container}>        
        <Image
          style={{width: 80, height: 80}}
          source={require('../assets/images/evalogo.png')}
        />
        <View style={{flex: 1}}>
          <Text style={styles.welcome} >
            {this.state.questions[this.state.index]} {navigation.state.params.nombreApp}?
          </Text>
        </View> 
        <View style={{flex: 1}}>
          <SafeAreaView style={styles.carousel}>
            <TouchableHighlight
              onPress={
                () => { this.carousel._snapToItem(this.state.activeIndex - 1) }
              }>
              <Image source={require('../assets/images/leftarrow.png')} />
            </TouchableHighlight>
            <View>
              <Carousel
                ref={ref => this.carousel = ref}
                data={this.state.carouselItems}
                sliderWidth={250}
                itemWidth={250}
                renderItem={this._renderItem}
                onSnapToItem={index => this.setState({ activeIndex: index })}
              />
            </View>
            <TouchableHighlight
              onPress={
                () => { this.carousel._snapToItem(this.state.activeIndex + 1) }
              }>
              <Image source={require('../assets/images/rightarrow.png')} />
            </TouchableHighlight>
          </SafeAreaView>
        </View>
        
        <CheckBox
          value={this.state.checked}
          onValueChange={() => this.setState({ checked: !this.state.checked })}
        />   
        
        <View style={{flex: 1, flexDirection: 'column', justifyContent: 'space-around',}}>
          <Button
            title="JUSTIFICAR RESPUESTA"
            onPress={() => { this.setModalVisible(true); }}
            >
          </Button>
          <Button
            title="SIGUIENTE"
            onPress={() => (this.setState({
              index: this.state.index + 1,
              puntosPorPregunta: this.state.puntosPorPregunta + 100,
            }), console.log("index: " + this.state.index), 
            this.props.navigation.navigate('Progress', { puntos: this.state.puntosPorPregunta }))}>
          </Button>       
        </View>  
        <View style={{ marginTop: 22 }}>
          <Modal
            animationType="slide"
            transparent={false}
            visible={this.state.modalVisible}
            onRequestClose={() => {
              Alert.alert('Modal has been closed.');
            }}>
            <View style={{ marginTop: 22 }}>
              <View>
                <View>
                  <Text bold style={styles.text} >
                    ¿Por qué y cuándo sentiste esa(s) emoción(es)?
                  </Text>
                </View>
                <View center>
                  <View style={{ padding: 10 }}>
                    <TextInput
                      style={{ height: 80, padding: 10, fontSize: 20 }}
                      placeholder="Justifica tu respuesta"
                      onChangeText={(text) => this.setState({ text })}
                      value={this.state.text}
                    />
                  </View>
                </View>
                <View center>
                  <TouchableHighlight
                    onPress={() => {
                      this.setModalVisible(!this.state.modalVisible);
                    }}>
                    <Text>ACEPTAR</Text>
                  </TouchableHighlight>
                </View>
              </View>
            </View>
          </Modal>
        </View> 
      </View>
    )
  }
}

const styles = StyleSheet.create({
  carousel: {
    flex: 1,
    flexDirection:'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },  
  image: {
    justifyContent: 'center',
    height: 158,
    width: 118,
  },
  text: {
    fontSize: 17,
    fontWeight: 'bold',
  },
  welcome: {
    color: '#000000',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',    
  },
});