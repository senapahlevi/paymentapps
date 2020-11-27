import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button, Image } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { useNavigation } from '@react-navigation/native';

import styles from '../components/Styles';
import { TextInput } from 'react-native-gesture-handler';
import Komponent from '../layout/Komponent';


const QrCode = ()=> {
  const navigation = useNavigation();
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    alert(`Bar code with type ${type} and data ${data} has been scanned!`);
    navigation.navigate('KonfirmasiBayar')

       
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-end',
      }}>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      />
      {scanned && <Button title={'Tap to Scan Again'} onPress={() => setScanned(false)} />}

    
    </View>
  );
}

const KonfirmasiBayar = () => {

  return (
    <View style = {styles.container}>
        <View style = {styles.containerHeader}>
          <Image 
            source = {require('../assets/konfbayar.png')}/>
            <TextInput
              style = {styles.TextInput} />
        </View>
          <View style = {styles.containerContent}>
            <Text style = {styles.cardText}>Pembayaran kepada: </Text>
            <Text style = {styles.cardText}>DTI TELKOM </Text>
            <Text style = {styles.cardText}>Jl.Telkomunikasi</Text>
          </View>
          <Komponent.ButtonPrimary title = "SUBMIT" screenName = "Paymentinfo"/>
    </View>
  
  )
}

const Paymentinfo = () => {
  return (
    <View style = {styles.container}>
      <View style = {styles.containerHeader}>
        <Image
            source = {require('../assets/konfbayar.png')}/>
       <Text style={styles.textTopUpHeader}>Pembayaran Behasil!</Text>
                <Text style={styles.textTopUpHeader}>Rp.60,000</Text>            
            </View>
            <View style={styles.containerContent}>
                <View style={styles.card}>
                    <Text style={styles.cardText}>Pembayaran Kepada:</Text>                
                    <Text style={styles.cardText}>DTI Telkom</Text>                
                    <Text style={styles.cardText}>Jl.Telekomunikasi</Text>                
                </View>
                <Komponent.ButtonPrimary title="SELESAI" screenName="Home"/>                
            </View>
        </View>
  )
}
export {QrCode,KonfirmasiBayar,Paymentinfo};