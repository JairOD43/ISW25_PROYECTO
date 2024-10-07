import { View, ScrollView, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import {Ionicons, EvilIcons} from '@expo/vector-icons';
import Colors from "../../constants/Colors";
import Fonts from "../../constants/Fonts";
export default function Wrapper({children}){
    return(
        <View style={styles.container}>
            <TouchableOpacity>
                <Ionicons name="user" size={50} color="cinnabar"></Ionicons>
            </TouchableOpacity>
            <View style={styles.logoContainer}>
                {<Text></Text>}
                <Image style={styles.logo} source={require('../../assets/icon.png')}></Image>
            </View>
            <TouchableOpacity>
                <EvilIcons name="cart" size={50} color="cinnabar"></EvilIcons>
            </TouchableOpacity>

            
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      backgroundColor: '#EBE1C9',
      alignItems: 'center',
      justifyContent: 'center',
      paddingBottom: 30,
      paddingHorizontal: 30,
      paddingTop: 30,
    },
    image: {
      width: "100%",
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    title: {
      fontSize : 80,
      backgroundColor: Colors.light,
      borderColor: Colors.HotPink,
      borderRadius: 20,
      borderWidth: 1,
      color: Colors.MediumPink,
      fontFamily: Fonts.family.bold,
      fontSize: Fonts.size.large,
      fontWeight: "bold",
      alignContent: "center",
      paddingVertical: 5,
      paddingHorizontal: 10,
      paddingTop: 30,
      marginBottom: 10,
    },  
    subtitle:{
      fontSize : 30,
      color: '#000',
      fontWeight: "bold",
      alignContent: "center"
    },
    textInput:{
      fontSize: 20,
      borderWidth: 2,
      borderColor: "gray",
      backgroundColor: "#F5FEFF",
      padding: 10,
      width: "80%",
      height: 50,
      marginTop: 10,
      marginBottom: 20,
      borderRadius: 20,
    },
    logo: {
        height: 30,
        width: 30,
    },
    logoContainer: {
        alignItems: 'center'
    }
  });