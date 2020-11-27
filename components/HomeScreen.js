import * as React from 'react';
import { View,Image, Text,StyleSheet,SafeAreaView } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';


import Komponent from '../layout/Komponent';
import styles from './Styles';
/*function Bambangscreen() {
  return (
    <View>
  <Text>Senaaaaaa</Text>  
    </View>
  );
}
*/
function DetailsScreen() {
  return (
  <View style={styles.container}>
      
      <View style={styles.toolbar_home}>
        <Text>Saldo anda</Text>
        <Text style = {styles.text_harga}>Rp10.000.000 </Text>
      </View>
    
    <View style = {styles.container_menu}>  
      <View style={styles.container_button_menu}>
        <Komponent.ButtonMenu name="ios-add" text="TopUp" screenName="TopUP"/>
        <Komponent.ButtonMenu name="ios-qr-scanner" text="Pay" screenName="QrCode"/>
        <Komponent.ButtonMenu name="ios-arrow-round-forward" text="Transfer" screenName="Transfer"/>
      </View> 
    </View>

  </View>
  );
}
const Stack = createStackNavigator();

function HomeScreen() {
  return (
     // <Stack.Navigator initialRouteName="Home">
        //<Stack.Screen name="Home" component={HomeScreen} />
        //<Stack.Screen name="Details" component={DetailsScreen} />
      //</Stack.Navigator>
      <View style={styles.container}>
        <DetailsScreen/>
      </View>
  );
}

export default HomeScreen;
