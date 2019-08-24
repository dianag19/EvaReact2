import React, { Component } from 'react';
import { Platform, StyleSheet, TextInput, Button, Text, View, Image, FlatList } from 'react-native';


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
            <View >
                <View>
                    <Text>Nombre de la Aplicación</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Nombre de la aplicación..."
                        onChangeText={(text) => this.updateValue(text, 'nombre')}
                        value={this.state.nombre}
                    />

                    <Text>Descripcion</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Descripción de la aplicación..."
                        onChangeText={(text) => this.updateValue(text, 'descripcion')}
                        value={this.state.descripcion}
                    />

                </View>
                <Button
                    title="CREAR APLICACION"
                    //onPress={() => props.signIn()}>
                    onPress={() => this.submit()}
                ></Button>
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
