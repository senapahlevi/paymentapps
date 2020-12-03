import * as React from 'react';
import {View,Image,TextInput,Text,StyleSheet,StatusBar} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import 'react-native-gesture-handler';
import Constants from 'expo-constants';

const SearchBar = () => {
    return (
        <View style = {styles.container}>
            <TextInput style = {styles.searchInput} placeholder = "search here"/>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        marginTop:Constants.statusBarHeight,
        width: '100%',
        height:40,
        backgroundColor:'white',
        borderRadius:8,
    },
    searchInput:{
        width:'100%',
        height:'100%',
        paddingLeft:8,
        fontSize:16,
    },
});

export default SearchBar;