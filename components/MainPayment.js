import * as React from 'react';
import { Text, View,SafeAreaView } from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import HomeScreen from './HomeScreen';
import TransactionScreen from './TransactionScreen';
import PersonalScreen from './PersonalScreen'
import HomeLayout from '../layout/HomeLayout';

const Tab = createMaterialBottomTabNavigator();

function PaymentScreen() {
  return(
    <Tab.Navigator 
      initialRouteName = "Home"
      activeColor = "#0dd698"
      labelStyle = {{fontSize:12}}
      style = {{backgroundColor:'tomato'}}
      >
    <Tab.Screen 
      name="Home"
      component = {HomeLayout}
      options = {{
        tabBarLabel :'Home',
        tabBarIcon :({color})=> (
          <MaterialCommunityIcons name = "home" color={color} size={26}/>
        ),
      }}
    />
    <Tab.Screen
      name = "Transaction"
      component = {TransactionScreen}
      options = {{
        tabBarLabel:'Transaction',
        tabBarIcon:({color})=>(
          <MaterialCommunityIcons name = "history" color = {color} size = {26}/>
        ),
      }}
    />
    <Tab.Screen
      name = "Personal"
      component ={PersonalScreen}
      options={{
        tabBarLabel:'Account',
        tabBarIcon:({color})=>(
          <MaterialCommunityIcons name ="account" color= {color} size={26}/>
        ),
      }}
    />
    </Tab.Navigator>
  );
}

export default PaymentScreen;