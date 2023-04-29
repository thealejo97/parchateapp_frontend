import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';

const LoginScreen = () => {
  return (
    <View>
      <Text>Inicio de sesión</Text>
      <TextInput placeholder="Correo electrónico" />
      <TextInput placeholder="Contraseña" />
      <TouchableOpacity>
        <Text>Iniciar sesión</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;
