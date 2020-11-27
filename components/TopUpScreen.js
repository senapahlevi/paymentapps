import * as React from 'react';
import {View,Image,TextInput,Text} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import 'react-native-gesture-handler';
import styles from './Styles';
import Komponent from '../layout/Komponent';

const TopUp = () => {
    const navigation = useNavigation();
    return (
        <View style = {{flex:1}}>
            <View style = {styles.containerImage}>
                <Image
                    source = {require('../assets/konfbayar.png')}/>
            </View>
            <View style = {styles.containerContent}>
                <TextInput
                    secureTextEntry={true}
                    style = {styles.textInputPrimary}
                    placeholder = "Nominal Top Up"/>
                    <Komponent.ButtonPrimary title ="SUBMIT" screenName="TopUpBerhasil"/>
            </View>
        </View>
    );
};

const TopUpBerhasil = () =>{
    const navigation = useNavigation();
    return (
        <View style = {{flex:1}}>
            <View style = {styles.containerImage}>
                <Image
                    source = {require('../assets/konfbayar.png')}/>
            </View>
            <View style = {styles.containerContent}>
                <Text style = {styles.textTopUpHeader}>Top Up berhasil</Text>
                <Text style = {styles.textTopUpHeader}>Rp.60.000</Text>
                <View style = {styles.card}>
                    <Text style = {styles.cardText}>TopUpBerhasil</Text>
                        <Text styles = {styles.cardText}>Rp60.000kok</Text>
                
                </View>
                <Komponent.ButtonPrimary title = "Selesai" screenName="Home"/>
            </View>
        </View>
    );
};
export {TopUp,TopUpBerhasil};