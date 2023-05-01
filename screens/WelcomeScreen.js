import { Image,ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { Component } from 'react';

export default class WelcomeScreen extends Component {
  render() {
    return (
      <ImageBackground source={require('../assets/images/background.jpg')} style={styles.backgroundImage}>
        <View style={styles.container}>
          <Image source={require('../assets/icons/logo.png')} style={styles.logo} />
          <View style={styles.rowContainer}>
            <TouchableOpacity style={[styles.button, { marginRight: 10 }]}>
              <Text style={styles.buttonText}>Iniciar con Google</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button, { marginLeft: 10 }]}>
              <Text style={styles.buttonText}>Iniciar con Facebook</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.rowContainer}>
            <TouchableOpacity style={[styles.button, { flex: 2 }]}>
              <Text style={styles.buttonText}>Iniciar con Correo</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.link}>
            <Text style={styles.linkText}>Términos y Condiciones</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>

    )
  }
}

const styles = StyleSheet.create({
  rowContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  button: {
    flex: 1,
    height: 50,
    backgroundColor: '#ffffff',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  logo: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
    marginTop: -50,
  },
  button: {
    backgroundColor: '#F7D55F',
    borderRadius: 25,
    width: '100%',
    paddingVertical: 12,
    paddingHorizontal: 30,
    marginVertical: 10,
  },
  buttonText: {
    color: '#000000',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 18,
  },
  link: {
    marginTop: 20,
  },
  linkText: {
    color: '#FFFFFF',
    fontSize: 16,
    textDecorationLine: 'underline',
  }
});