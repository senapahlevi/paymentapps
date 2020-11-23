import {StyleSheet} from 'react-native';
import Constants from 'expo-constants';

const styles = StyleSheet.create({
    statusBar:{
        height: Constants.statusBarHeight
    },
    title_brand:{
        fontSize:20,
        fontStyle:"italic",
        fontWeight:"bold",        
        textAlign:"center",
        padding:8,        
        color: '#3fc7d4',        
    },
    link_register:{
        fontSize:14,
        textAlign:"center",
        margin:8,
        textDecorationLine:"underline"                
    },
    container_button_menu:{
        height:100,
        flexDirection:"row",
        justifyContent:"space-around",
        backgroundColor: "#4982C1",            
        padding:8,
        borderRadius:5,
    },
    container:{
        flex:1,
        alignItems:'stretch',
        justifyContent:'center',
        padding:8,
        marginTop:Constants.statusBarHeight,
        marginBottom:Constants.statusBarHeight,
    },
    container_home:{
        flex: 1, 
        alignItems:'stretch',
        backgroundColor:'#f2f2f2'        
    }, 
    toolbar_home:{
        flex:1,
        backgroundColor:'#FFF',
        justifyContent:'flex-end',       
        alignItems:'flex-start',
        padding:16        
    },    
    text_harga:{
        fontSize:32,
        fontWeight:'bold'
    },
    container_menu:{
        flex:4,   
        padding:16,              
    },
    container_button_menu:{
        height:100,
        flexDirection:"row",
        justifyContent:"space-around",
        backgroundColor: "#4982C1",            
        padding:8,
        borderRadius:5,
    },
    input:{        
        marginBottom:8,
        borderWidth: 1,
        borderColor:'gray'        
    },
});

export default styles;