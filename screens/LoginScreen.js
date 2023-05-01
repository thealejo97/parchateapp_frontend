import { View, Text, TouchableOpacity, Image, TextInput,ScrollView,StyleSheet } from 'react-native'
import React,{ useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import {ArrowLeftIcon} from 'react-native-heroicons/solid'
import { themeColors } from '../theme/'
import { useNavigation } from '@react-navigation/native'
import { AsyncStorage } from 'react-native';





export default function LoginScreen() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [csrfToken, setCsrfToken] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    /*
     * Login view, allows to the user login with the django backend.

        How it works:
        Initially, we request the CSRF token from the Django backend, and then we use that token to check if the data is correct or incorrect.
        Also save in a persistent variable, token,user_name,user_id,user

        Created by: Alejandro Montaño
        Date: 11-04-2023
     */
    console.log("********************* Ejecutando el login ************************************")
    setLoading(true);
    const csrfResponse = await fetch('https://mercadocontrolback.fly.dev/api/users/csrf_cookie/');
    const token = csrfResponse.headers.get('Set-Cookie').split('=')[1].split(';')[0];
    setCsrfToken(token);

    const response = await fetch('https://mercadocontrolback.fly.dev/api/users/login/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-CSRFToken': token,
      },
      body: JSON.stringify({
        username,
        password,
      }),
    });

    const data = await response.json();

    if (response.ok) {
      setLoading(false);
      await AsyncStorage.setItem('@token', data.token);
      await AsyncStorage.setItem('@user_name', data.user_name);
      await AsyncStorage.setItem('@user_id', String(data.user_id));
      await AsyncStorage.setItem('@user', data.user);

      navigation.navigate('ShoppingList');
    } else {
      setLoading(false);
      alert(data.error);
      console.log('No', username," ", password, " ",data);
    }
  };

  const navigation = useNavigation();
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#FFF',
    },
    header: {
      flexDirection: 'row',
      justifyContent: 'flex-start',
      backgroundColor: '#FFD700',
      padding: 10,
      borderBottomLeftRadius: 20,
      borderBottomRightRadius: 20,
    },
    backBtn: {
      backgroundColor: '#FFD700',
      padding: 8,
      borderRadius: 20,
      marginLeft: 10,
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      color: '#000',
      marginLeft: 50,
    },
    form: {
      paddingHorizontal: 30,
      marginTop: 40,
    },
    input: {
      backgroundColor: '#EFEFEF',
      color: '#000',
      borderRadius: 10,
      padding: 15,
      marginBottom: 10,
    },
    forgotPassword: {
      alignItems: 'flex-end',
      marginBottom: 10,
    },
    forgotPasswordText: {
      color: '#000',
    },
    loginBtn: {
      backgroundColor: '#FFD700',
      borderRadius: 30,
      paddingVertical: 15,
      paddingHorizontal: 50,
      marginBottom: 20,
    },
    loginText: {
      color: '#000',
      fontSize: 18,
      fontWeight: 'bold',
      textAlign: 'center',
    },
    orText: {
      color: '#000',
      fontSize: 18,
      fontWeight: 'bold',
      textAlign: 'center',
      marginTop: 20,
      marginBottom: 10,
    },
    socialButtons: {
      flexDirection: 'row',
      justifyContent: 'center',
      marginTop: 20,
    },
    
    socialMediaBtn: {
      backgroundColor: '#EFEFEF',
      borderRadius: 10,
      padding: 15,
    },
    socialMediaIcon: {
      width: 30,
      height: 30,
    },
    signUpContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      marginTop: 20,
    },
    signUpText: {
      color: '#000',
      fontWeight: 'bold',
      textAlign: 'center',
    },
    signUpLink: {
      color: '#FFD700',
      fontWeight: 'bold',
      textAlign: 'center',
    },
    loginButton: {
      backgroundColor: 'purple',
      borderRadius: 30,
      paddingHorizontal: 40,
      paddingVertical: 10,
      justifyContent: 'center',
      alignItems: 'center',
      color: 'white',
      textAlign: 'center',
    },

  });

  return (
    <ScrollView>
      {loading && <Loading />}
      <View style={[styles.container, {backgroundColor: themeColors.bg}]}>
        <SafeAreaView style={styles.flex}>
          <TouchableOpacity onPress={()=> navigation.goBack()} style={styles.backButton}>
            <ArrowLeftIcon size={20} color="black" />
          </TouchableOpacity>
        </SafeAreaView>
        <View style={[styles.content, styles.roundedTop]}>
          <View style={styles.form}>
            <Text style={styles.label}>Email Address</Text>
            <TextInput 
              style={styles.input}
              placeholder="email"
              value={username}
              onChangeText={setUsername}
            />
            <Text style={styles.label}>Password</Text>
            <TextInput 
              style={styles.input}
              secureTextEntry
              placeholder="password"
              value={password}
              onChangeText={setPassword}
            />
            <TouchableOpacity style={styles.forgotPassword}>
              <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
            </TouchableOpacity>
            <Text style={styles.loginButton} onPress={handleLogin}>
                        Login
                </Text>
          </View>
          <Text style={styles.orText}>Or</Text>
          <View style={styles.socialButtons}>
            <TouchableOpacity style={styles.socialButton}>
              <Image 
                source={require('../assets/icons/google.png')} 
                style={styles.socialButtonImage} 
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.socialButton}>
              <Image 
                source={require('../assets/icons/facebook.png')} 
                style={styles.socialButtonImage} 
              />
            </TouchableOpacity>
          </View>
          <View style={styles.signUp}>
            <Text style={styles.signUpText}>Don't have an account?</Text>
            <TouchableOpacity onPress={()=> navigation.navigate('SignUp')}>
              <Text style={styles.signUpLink}>Sign Up</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>

  )

  
}