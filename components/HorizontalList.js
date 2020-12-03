import React from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import SmallCard from './SmallCard';

import Title from './Title';
const HorizontalList = ({title,data}) => {
    return (
        //ini react fragment <> biar ga error ada title 
               //ini item buat render  Small card component di dalem horizontal<Flatlist
               //trus renderItem={({item'})=> <SmallCard item ={item}/>}/> ini buat nanti render item' buat kedalam CardNews

        <>
        <Title size ={20}>
            {title}
        </Title>
        <FlatList data={data} keyExtractor={item =>item.id} horizontal showsHorizontalScrollIndicator={false}
        renderItem={({item})=> <SmallCard item ={item}/>}/>
        
    </>
    )
}

const styles = StyleSheet.create({

})
export default HorizontalList;