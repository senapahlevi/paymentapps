import React from 'react';
import { TouchableOpacity, View,Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

const ButtonMenu = ({name,text,screenName}) =>{
    const navigation = useNavigation();
    return (
        <TouchableOpacity onPress={() =>}
    )
}