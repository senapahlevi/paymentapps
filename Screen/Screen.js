import React from 'react';
import { StyleSheet, StatusBar, ScrollView } from 'react-native';
import Constants from 'expo-constants';

const ScreenView = ({ children, isSearchFocused }) => {
  const keyboardShouldPersistTaps = isSearchFocused ? 'always' : 'never';
  return (
    <ScrollView
      keyboardShouldPersistTaps={keyboardShouldPersistTaps}
      scrollEnabled={!isSearchFocused}
      style={styles.containers}
    >
      {children}
    </ScrollView>
  );
};


const styles = StyleSheet.create({
    containers:{
        
        flex:1,
        backgroundColor:'grey',
        marginTop: Constants.statusBarHeight,
        paddingHorizontal:15,
    },
});
export default ScreenView;
