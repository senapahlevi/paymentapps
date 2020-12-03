import * as React from 'react';
import {View,Image,TextInput,Text,StyleSheet, Dimensions} from 'react-native';

import BlockCard from './CardNews';
const {width} = Dimensions.get('window')

const SmallCard = ()=> {
    return (
        <BlockCard style = {styles.container} imageStyle = {styles.image}/>
    )
}

const styles = StyleSheet.create({
    container:{
        width: width / 2,
        marginRight:15,
        height:200,
    },
    image:{
        height:100,
    },
});

export default SmallCard;
