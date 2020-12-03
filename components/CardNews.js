import * as React from 'react';
import {View,Image,TextInput,Text,StyleSheet} from 'react-native';

import Title from './Title';
import Subtitle from './Subtitle'
// ini bikin nampilin gambar dan title subtitle
const BlockCard = ({style, imageStyle}) => {
    const {thumbnail,title,desc}= item;
    return (
        <View style = {[styles.container,style]}>
            <Image source = {{uri: thumbnail}} style = {styles.images,imageStyle}/>
            <View style = {styles.contentContainer}>
                <Title> {title}</Title>
                <Subtitle>{desc}</Subtitle>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        width: '100%',
        height:300,
        overflow:'hidden',
        backgroundColor:'white',
        borderRadius:8,
    },
    images:{
        width:'100%',
        height:200,
        paddingLeft:8,
        fontSize:16
    },
    contentContainer:{
        padding:5,
    },
});

export default BlockCard;