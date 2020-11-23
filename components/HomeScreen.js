import * as React from 'react';
import { Text, SafeAreaView,StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import HomeLayout from '../layout/HomeLayout';

function HomeScreen() {
  return(
    <View style = {styles.icons}>
    </View>
  );
}

const styles = StyleSheet.create({
  icons:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    },
});

export default HomeScreen;