import * as React from 'react';
import {Text,StyleSheet,StatusBar} from 'react-native';

//ini default size = 15 dan numberolines default = 2
const Subtitle = ({children,numberOfLines = 2,size = 15}) => {
    return (
      <Text numberOfLines = {numberOfLines} style = {{fontWeight:'bold',fontSize:size}}>
          {children}
      </Text>

    );
}

export default Subtitle;