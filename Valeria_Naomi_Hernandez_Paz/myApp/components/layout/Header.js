import {View, Image, Text, StyleSheet, TouchableOpacity} from "react-native";
import {Ionicons, EvilIcons}from '@expo/vector-icons';
import  Colors from '../../constants/Colors';
import Fonts from '../../constants/Fonts';

export default function Header ({}){
    return(
        <View style={styles.container}>
            <TouchableOpacity>
                <Ionicons name="arrow-back-outline" size={50}color="black"/>
            </TouchableOpacity>
            <View style={styles.logoContainer}>
                {<Text></Text>}
                <Image style={styles.logo} source={require('../../assets/icon.png')}/>
            </View>
            <TouchableOpacity>
                <EvilIcons name="cart" size={50} color="black"/> 
            </TouchableOpacity>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingBottom: 30,
      paddingHorizontal: 30,
      paddingTop: 30,
    },
        title:{
        backgroundColor: Colors.PapayaWhip,
        borderColor: Colors.FireBrick,
        borderRadius: 20,
        borderWidth: 1,
        color: Colors.Tomato,
        FontFamily: Fonts.family.bold,
        fontSize: Fonts.size.normal,
        paddingHorizontal: 10,
        paddingVertical: 5,
        marginBottom: 10,
        fontSize: 80,
        color: "#000",
        fontWeight: "bold",
    },
    logo: {
        height: 30,
        width: 30,

    },
    logoContainer:{
        alignItems: 'center',
    },
    image: {
      flex: 1,
      resizeMode: 'cover',
      justifyContent: 'center',
    },
    text: {
      color: 'white',
      fontSize: 42,
      fontWeight: 'bold',
      textAlign: 'center',
      backgroundColor: '#000000a0',
    },
    TextInput:{
      borderWidth: 1.5,
      paddingStart: 30,
      borderColor:'white',
      padding: 10,
      width: '80%',
      color: 'white',
      height: 40,
      marginTop: 20,
      borderRadius: 30,
       },
       Button: {
        borderWidth: 1,
        paddingStart: 30,
        borderColor:'gray',
        padding: 10,
        width: '50%',
        height: 50,
        marginTop: 20,
        borderRadius: 30,
       },
    
  });
  