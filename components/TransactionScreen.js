import * as React from 'react';
import { Text, View,StyleSheet,FlatList } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import Datas from './Data';
import styles from './Styles';
import Komponent from '../layout/Komponent';

const TransactionScreen = () =>{
return (
    <View style = {styles.container_home}>
      <View style = {styles.container_menu}>
        <View>
          <FlatList
            data = {Datas.dataTransferr}
            renderItem = {Komponent.renderItem}/>
        </View>
      </View>
    </View>
  );
}



export default TransactionScreen;