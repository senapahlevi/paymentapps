import * as React from 'react';
import { Text, View,StyleSheet,Image} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import styles from './Styles';
import { useNavigation } from '@react-navigation/native';

import Komponent from '../layout/Komponent';

const PersonalScreen = () =>{

  return (
    <View style = {styles.container_home}>
      <View style = {styles.container_profile}>
        <Image
          style = {styles.containerProfile}
          />
            <Text style = {styles.textPrimary}>Sena pahlevi Ristiawanto</Text>
            <Text style = {styles.textPrimary}>908</Text>
      </View>
      <View style = {styles.container_menu}>
        <Komponent.ButtonPrimary title = "Ubah profil" screenName =""/>
        <Komponent.ButtonPrimary title =" Ganti password" screenName=""/>
        <Komponent.ButtonPrimary title = "Logout" screenName="Login"/>
      </View>
    </View>
  )
}

export default PersonalScreen;