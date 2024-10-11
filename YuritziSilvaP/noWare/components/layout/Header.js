//mismo encabezado en todas las ventanas
import { View, Image, StyleSheet, Text, TouchableOpacity } from "react-native";
import {Ionicons, EvilIcons} from '@expo/vector-icons';
import colors from '../../constants/colors';
import fonts from '../../constants/fonts';

export default function Header({title})
{
    return(
    <View style={styles.container}> 
        <TouchableOpacity>
            <Ionicons name = "arrow-back-outline" size = {50} color="black"/>
        </TouchableOpacity>
        <View style={styles.logoContainer}> 
            {title && <Text style = {styles.title}>{title}</Text>}
            <Image style= {styles.logo} source= {require('../../assets/icon.png')}/>
        </View>
        <TouchableOpacity>
            <EvilIcons name="cart" size={50} color="black"/>
        </TouchableOpacity>
    </View>   
    );
}
const styles = StyleSheet.create({
    container: //Mantener centrado los elementos que contiene
    {
        alignItems:'center',
        flexDirection: 'row', 
        justifyContent: "space-between",
        paddingBottom: 30,
        paddingHorizontal: 30,
        paddingTop: 30,

    },
    title:
    {
        backgroundColor: colors.white,
        borderColor: colors.platinum,
        borderRadius: 20,
        borderWidth: 1,
        color: colors.jet,
        fontFamily: fonts.family.bold,
        fontSize: fonts.size.normal,
        paddingHorizontal: 10,
        paddingVertical: 5,
        marginBottom: 10
    },
    logo:
    {
        height: 30,
        width: 30,
    },
    logoContainer: 
    {
        alignItems: 'Center'
    },
   
});