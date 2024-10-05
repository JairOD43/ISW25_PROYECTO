import{ View, Image, Text, StyleSheet, TouchableOpacity }from "react-native";
import {Ionicons, EvilIcons} from '@expo/vector-icons';
import Colors from '../../constants/Colors';
import Fonts from "../../constants/Fonts"; 

export default function Header({}) {
return( 
    <View style={styles.container}> 
        <TouchableOpacity>
            <Ionicons name="arrow-back-outline" size={50} color="black"></Ionicons>
        </TouchableOpacity>
        <View style={styles.logoContainer}>
            {<Text></Text>}
            <Image style={styles.logo} source={require ('../../assets/icon.png')}/>
        </View>
        <TouchableOpacity>
            <EvilIcons name="cart" size={50} color="black" />
        </TouchableOpacity>
    </View>
    );
};
const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      backgroundColor: '#25292e',
      alignItems: 'center',
      justifyContent: "center" ,
      paddingBottom: 30,
      paddingHorizintal: 30,
      paddingTop: 30,
    },
    image: {
      width: '100%',
      height: '100%',
      position: 'absolute',
      top: 0,
      left: 0,
      borderRadius: 18,
    },
    overlay: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(37, 41, 46, 0.8)',
    },
    title: {
      backgroundColor: Colors.white,
      borderColor: Colors.platinum,  
      borderRadius: 20,
      borderWidth: 1,
      fontFamily: Fonts.size.bold,
      fontsSize: Fonts.size.normal,
      paddingHorizintal: 10,
      paddingVertical: 5,
      fontSize: 80,
      color: Colors.platinum,
      marginBotton: 10,
    },
    logo: {
        height: 30,
        width: 30,
    },
    logoContainer: {
        alignItems: 'center',
    },

    textInput: {
      borderWidth: 2,
      borderColor: 'gray',
      padding: 10,
      width: 200,
      marginTop: 20,
      borderRadius: 30,
    },
    
  });