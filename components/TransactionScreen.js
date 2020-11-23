import * as React from 'react';
import { Text, View,StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';


function TransactionScreen() {
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

export default TransactionScreen;