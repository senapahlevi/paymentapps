import * as React from 'react';
import { View,Image, Text,StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import styles from '../components/Styles';
function HomeScreen() {
  return (
    <View>
  <Text>Senaaaaaa</Text>  
    </View>
  );
}

function DetailsScreen() {
  return (
  <View style={styles.container}>
      <View style={styles.toolbar_home}>
    
        <Text>Saldo anda</Text>
        <Text style = {styles.text_harga}>Rp10.000.000 </Text>
      </View>
    <View style = {styles.container_menu}>
      
      <View style={styles.container_button_menu}>
        <Components.ButtonMenu name="add" text="TopUp" screenName="TopUp"/>
        <Components.ButtonMenu name="scan" text="Pay" screenName="QRPay"/>
        <Component.ButtonMenu name="arrow-forward" text="Transfer" screenName="Transfer"/>

      </View>

      <View style={styles.icons}>
        <MaterialCommunityIcons name="bank" size={34} color="black" />
      </View>
      <View style={styles.icons}>
        <MaterialCommunityIcons name="qrcode-scan" size={32} color="black" />     
      </View>
    </View>

     
    <View style={styles.containerHistory}>
        <Text>3 Transaksi anda </Text>
          <View style = {styles.cardInfoTxt}>
            <View style = {styles.cardInfoTxtwrap}>
              <Ionicons name="ios-cash" size={24} color="black" 
              style = {styles.cardIconImg} />
                <Text style = {styles.cardInfoIsi}>Rp 80.000 </Text>
                <Text style = {styles.cardInfoIsi}> 20/08/2020 </Text>
            </View>             
               <Text style = {styles.cardInfoIsi}> Transfer ke 08962301301 </Text>
          </View>

          <View style = {styles.cardInfoTxt}>
            <View style = {styles.cardInfoTxtwrap}>
              <Ionicons name="ios-cash" size={24} color="black" 
              style = {styles.cardIconImg} />
                <Text style = {styles.cardInfoIsi}>Rp 80.000 </Text>
                <Text style = {styles.cardInfoIsi}> 20/08/2020 </Text>
            </View>             
               <Text style = {styles.cardInfoIsi}> Transfer ke 08962301301 </Text>
          </View>

         <View style = {styles.cardInfoTxt}>
            <View style = {styles.cardInfoTxtwrap}>
              <Ionicons name="ios-cash" size={24} color="black" 
              style = {styles.cardIconImg} />
                <Text style = {styles.cardInfoIsi}>Rp 80.000 </Text>
                <Text style = {styles.cardInfoIsi}> 20/08/2020 </Text>
            </View>             
               <Text style = {styles.cardInfoIsi}> Transfer ke 08962301301 </Text>
        </View>

       


    </View>
    

  </View>
  );
}

/*
const styles = StyleSheet.create({
  cardIconImg:{
    alignSelf: 'center',
    borderRadius: 8,
  },
  cardInfoIsi:{
    marginLeft:20,
  },
  cardInfoTxtwrap:{
    flexDirection:'row',
  },
  cardInfoTxt:{
    marginTop:10,
    marginLeft:20,
    flex:2,
    padding:10,
    borderColor:'#ccc',
    borderWidth:1,
    borderLeftWidth:0,
    borderBottomRightRadius:8,
    borderTopRightRadius:8,
    borderBottomLeftRadius:8,
    borderTopLeftRadius:8,
    backgroundColor:'#fff',
  },
  containerIcons:{
    flexDirection:'row',
    width:'70%',
    marginTop:30,
    justifyContent:'space-around',
    alignSelf:'center',
    backgroundColor:'grey',
  },
  containerHistory:{
    marginTop:23,
    alignSelf:'center',
    width:'80%',
    shadowColor:'#999',

  },
  icons:{
    alignItems:'center',
    alignSelf:'center',
    justifyContent:'space-around',
    borderWidth:0,
  },
  saldo:{
    flex:1,
    justifyContent:'flex-end',
    alignContent:'center',
  },
  textNominal:{
    flex:1,
    marginLeft:30,
    justifyContent:'center',
    fontWeight:'bold',
    fontSize:35,
    alignItems:'center',
    },
    tinyLogo:{
      justifyContent:'center',alignContent:'center',
      marginLeft:75,
    }
});  
*/
const Stack = createStackNavigator();

function HomeLayout() {
  return (
     // <Stack.Navigator initialRouteName="Home">
        //<Stack.Screen name="Home" component={HomeScreen} />
        //<Stack.Screen name="Details" component={DetailsScreen} />
      //</Stack.Navigator>
      <View>
        <DetailsScreen/>
      </View>
  );
}

export default HomeLayout;
