import * as React from 'react';
import {View,Image,TextInput,Text} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import 'react-native-gesture-handler';

import styles from './Styles';
import Komponent from '../layout/Komponent';

const Transfer = () => {
    const navigation = useNavigation();
    return (
        <View style = {{flex:1}}>
            <View style = {styles.containerImage}>
                <Image 
                    source = {require('../assets/konfbayar.png')}/>
            </View>
            
            <View style = {styles.containerContent}>
                <TextInput
                    style = {styles.textInputPrimary}
                    placeholder = "Nominal Transfer"
                    />
                <TextInput
                    style = {styles.textInputPrimary}
                    placeholder = "Nomor Handphone"
                    />
                    <Komponent.ButtonPrimary title = "check nomor" screenName ="TransferBerhasil"/>
            </View>
        </View>
    );
};

const TransferBerhasil = () => {
    return (
        <View style = {{flex:1}}>
            <View style = {styles.containerImage}>
                <Image
                    source = {require('../assets/konfbayar.png')}/>
            </View>
            <View style = {styles.containerContent}>
                <Text style = {styles.textTopUpHeader}>TransferBerhasil</Text>
                <Text style = {styles.textTopUpHeader}>Rp 100.000</Text>
            <View style = {styles.card}>
                <Text style = {styles.cardText}>30 November</Text>
                <Text style = {styles.cardText}>Penerima: sena</Text>
                <Text style = {styles.cardText}>080372131</Text>
            </View>
                <Komponent.ButtonPrimary title = "DONE" screenName = "Home"/>
            </View>
        </View>
    );
};

export {Transfer,TransferBerhasil};