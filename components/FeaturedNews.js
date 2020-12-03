import React from 'react'
import { View, Text } from 'react-native'

import BlockCard from './CardNews';
//ini buat ngasih jarak dari search bar secara vertikal biar ga dempet sama card gambar dibawah nya
//trus gunanya ini buat modifikasi style dari BlockCard yang style ={[styles.container,style]} itu
//intinya ini alternatif dari styles langsung di file cardnews buat margin top 
const FeaturedNews = ({item}) => {
    return (
        <BlockCard item={item} style = {{marginVertical: 15}}/>
    );
}

export default FeaturedNews;

//ini nampilin gambar besar dibawah search bar dan diatas breaking news(gambar kecil geser slider)