
//persis horizontal slider gitu
import React from 'react'
import { FlatList, StyleSheet,View } from 'react-native'

import HorizontalList from './HorizontalList';
const TechNews = ({data}) => {
    return (
        <HorizontalList title = "Tech News" data={data} />
    )
}

const styles = StyleSheet.create({

})
export default HorizontalList;