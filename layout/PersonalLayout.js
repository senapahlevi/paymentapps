import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar } from 'react-native';
import { Item } from 'react-native-paper/lib/typescript/src/components/List/List';

import data from '../components/Data';

export default function App() {
        const renderItem = ({item})=>(
        <data.item title={Item.title}/>
        );
return (
    <View style={styles.container}>
        <FlatList
            data={data.DATA}
            renderItem={renderItem}
            keyExtractor={item=>item.id}/>
    </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: StatusBar.currentHeight || 0,
    },
  });
  
  export default App;