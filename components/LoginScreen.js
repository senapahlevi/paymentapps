/* eslint-disable prettier/prettier */
import 'react-native-gesture-handler';

import * as React from 'react';
import {Button,Text, View} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { TextInput } from 'react-native-gesture-handler';
import 'react-native-gesture-handler';

import styles from './Styles';


function LoginScreen() {
  const navigation = useNavigation();
  return (
    <View style = {styles.container}>
    <Text style = {styles.title_brand}>
    Senpay</Text>
    <TextInput
    style = {styles.input}
    placeholder = "Email"
    />
    <TextInput
    secureTextEntry={true}
    style = {styles.input}
    placeholder = "Password"
    />
    <Button
    style = {styles.button}
    title = "Login"
    onPress={() => 
      navigation.navigate('Home')
    }
    />
    <Text
   onPress={() => 
      navigation.navigate('Register')}
  
    style = {styles.link_register}>Register</Text>

</View>
  );
}

  export default LoginScreen;
