import React, { Component } from 'react';
import { Platform, StyleSheet, TextInput, Button, Text, View, Image, ImageBackground } from 'react-native';


export default class Aplications extends Component {
    static navigationsOptions = {
        title: 'Crear aplicación',
    }
    constructor(props) {
        super(props)
        this.state = {
            nombre: '',
            descripcion: '',
        }
    }

    updateValue(text, field) {
        console.log(text)
        if (field == 'nombre') {
            console.log("entra a cambiar" + field)
            this.setState({
                nombre: text,
            })
        } else if (field == 'descripcion') {
            console.log("entra a cambiar" + field)
            this.setState({
                descripcion: text,
            })
        }
    }

    submit() {
        console.log("entra a submit")
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
        const { navigate } = this.props.navigation;
        return (
            <ImageBackground
            source={require('../assets/images/background.png')}
            style={styles.bgImage}
            resizeMode="cover"
          >
            <View style={{flex: 1, alignItems: 'center', flexDirection: 'column', justifyContent: 'space-around',}}>            
              <Image
                style={{width: 80, height: 80}}
                source={require('../assets/images/evalogo.png')}
              />
              <View style={{flex: 1}}>
                <Text style={{color: '#FFFFFF', fontSize: 16, fontWeight: 'bold', textAlign: 'center'}} >
                  Ingresa los datos para crear una evaluación
                </Text>
              </View> 
              <View style={{ flex: 2 }}>
                <Text style={{color: '#FFFFFF', fontSize: 16, fontWeight: 'bold', textAlign: 'center'}} >Nombre de la Aplicación</Text>
                <TextInput
                    style={{ height: 80, width:280, padding: 15, fontSize: 20, backgroundColor: '#DDDDDD',}}
                    placeholder="Nombre de la aplicación..."
                    onChangeText={(text) => this.updateValue(text, 'nombre')}
                    value={this.state.nombre}
                />

                <Text style={{color: '#FFFFFF', fontSize: 16, fontWeight: 'bold', textAlign: 'center'}} >Descripción</Text>
                <TextInput
                    style={{ height: 80, width:280, padding: 15, fontSize: 20, backgroundColor: '#DDDDDD',}}
                    placeholder="Descripción de la aplicación..."
                    onChangeText={(text) => this.updateValue(text, 'descripcion')}
                    value={this.state.descripcion}
                />
              </View>
              <View style={{flex: 1}}>
                <Button
                    title="CREAR APLICACIÓN"
                    //onPress={() => props.signIn()}>
                    onPress={() => this.submit()}
                ></Button>                
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
});
