import {StyleSheet} from 'react-native';
import Constants from 'expo-constants';

const styles = StyleSheet.create({
    containerSearchBar:{
        flex:1,
        justifyContent:'center',
        padding:8,
        paddingTop: Constants.statusBarHeight,
    }
});

export default styles;