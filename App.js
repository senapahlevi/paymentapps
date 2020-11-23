import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import MainPayment from './components/MainPayment';
import { NavigationContainer } from '@react-navigation/native';
import { FlatList } from 'react-native-gesture-handler';

import PersonalLayout from './components/PersonalScreen';
import LoginScreen from './components/LoginScreen';
import HomeLayout from './layout/HomeLayout';
//import RegisterScreen from './components/RegisterScreen';

export default function App() {
  return (
 /*
<NavigationContainer>
 <MainPayment/>
  </NavigationContainer>

   */
        <LoginScreen/>
 

);
}
