/* eslint-disable prettier/prettier */
import 'react-native-gesture-handler';

import * as React from 'react';
import {Button,Text, View} from 'react-native';
//import { useNavigation } from '@react-navigation/native';
import { TextInput } from 'react-native-gesture-handler';
import Komponent from '../layout/Komponent';
import styles from './Styles';


const HomeMenu = ()=>{   
  //const navigation = useNavigation();
  return (
   <View style = {styles.container_home}>
       <View style = {styles.toolbar_home}>
           <Text>saldo anda:</Text>
           <Text style = {styles.text_harga}>Rp.1.000.000</Text>
       </View>
       <View styles = {styles.container_menu}>
           <View style = {styels.container_button_menu}>
               <Komponent.ButtonMenu name = "add" text ="TopUp" screen="Top_Up"/>
           </View>
       </View>
   </View>
  );
}

  export default HomeMenu;
