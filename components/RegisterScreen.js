import * as React from 'react';
import {View,Button,Text} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import 'react-native-gesture-handler';
import styles from './Styles';
import { useNavigation } from '@react-navigation/native';

const RegisterScreen=()=>{
   // const navigation = useNavigation();
    return (
        <View style = {styles.container}>
            <Text style = {styles.title_brand}>
            Senpay</Text>
            <TextInput
            style = {styles.input}
            placeholder="nama"/>
            <TextInput
            style = {styles.input}
            placeholder="Password"/>
            <TextInput
            style = {styles.input}
            placeholder= "Email"/>
             <TextInput
            style = {styles.input}
            placeholder= "No handphone"/>

            <Button
                title="Submit"
                onPress = {() =>
                    console.log("dor submit")
                    //navigation.navigate('login')
                }
            />
                </View>
    );
};
export default RegisterScreen;