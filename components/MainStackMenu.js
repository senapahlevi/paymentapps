import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import LoginScreen from './LoginScreen';
import HomeScreen from '../components/HomeScreen';
import PersonalScreen from './PersonalScreen';
import RegisterScreen from './RegisterScreen';
import {QrCode,KonfirmasiBayar,Paymentinfo} from '../buttonstack/QrCode';
import MainPayment from './MainPayment';
import { TopUpBerhasil,TopUp } from "./SearchBar";
import  {Transfer,TransferBerhasil} from './TransferScreen';

const Stack = createStackNavigator();
 /*<Stack.Screen
              name ="QRPay"
              component = {QrCode}
              /> 
              */
const MainStackMenu = () =>{
    return(
    <Stack.Navigator>
            <Stack.Screen
            name = "Login"
            component = {LoginScreen}
            />
            <Stack.Screen
              name ="Register"
              component = {RegisterScreen}
              /> 
           <Stack.Screen
              name ="Home"
              component = {MainPayment}
              />
               <Stack.Screen
              name ="TopUP"
              component = {TopUp}
              />
            <Stack.Screen
              name ="TopUpBerhasil"
              component = {TopUpBerhasil}
              />
             <Stack.Screen
              name ="Transfer"
              component = {Transfer}
              />
               <Stack.Screen
              name ="TransferBerhasil"
              component = {TransferBerhasil}
              />
              <Stack.Screen
              name ="QrCode"
              component = {QrCode}
              />
               <Stack.Screen
              name ="KonfirmasiBayar"
              component = {KonfirmasiBayar}
              />
               <Stack.Screen
              name ="Paymentinfo"
              component = {Paymentinfo}
              />
    </Stack.Navigator>
    );
};
export {MainStackMenu};