import React from 'react';
import { TouchableOpacity, View,Text, StyleSheet } from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import styles from '../components/Styles';

const ButtonMenu = ({name,text,screenName}) =>{
    const navigation = useNavigation();
    return (
        <TouchableOpacity onPress={() => navigation.navigate(screenName)}>
            <View style = {styles.buttonContainer}>
                    <View style = {styles.buttonIcon}>
                        <Ionicons
                        name={name}
                        size={26}
                        color="black"
                        />
                    </View>
                <Text style = {styles.buttonText}>{text}</Text>
            </View>
        </TouchableOpacity>
    );
}

const ButtonPrimary = ({title,screenName})=>{   
    const navigation = useNavigation(); 
        return(
            <TouchableOpacity onPress={()=>navigation.navigate(screenName)}>                
                <View style = {styles.buttonPrimary}>
                <Text style = {{color: 'black'}}>{title}</Text>
                </View>
            </TouchableOpacity>
        )
    }

const renderTransItem = ({item}) =>(
    <View style ={styles.containerTransaksiItem}>
        <View style = {styles.IconTransaksiItem}>
        <Ionicons
                        name={name}
                        size={26}
                        color="black"
                        />
        </View>
    <View style = {styles.ContentTransaksiItem}>
        <Text >Rp{item.price}</Text>
<Text>Transfer ke {item.price}</Text>
    </View>
    <View style = {styles.DateTransaksiItem}>
<Text>{item.date}</Text>
    </View>
    </View>
)

export default {ButtonMenu,ButtonPrimary}
