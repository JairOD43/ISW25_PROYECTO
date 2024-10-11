 import {Text,TextInput, View , StyleSheet} from 'react-native';
 import Fonts from '../../constants/Fonts';
 import Colors from '../../constants/Colors';

 export default function FormItem({label}){
return(
    <View styles={styles.container}>
        {label && <Text style={styles.label}>{label}</Text>}
        <TextInput style={StyleSheet.input}/>
    </View>
);
};

const styles = StyleSheet.create({
    container: {
      marginBotton: 10,
      width: '100%',
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
    label: {
      color: Colors.OldSilver,
      fontSize: Fonts.size.small,
      fontFamiliy: Fonts.family.regularm,
      textAlign: 'Center',
    },
    
    input : {
       borderBottomColor: Colors.cinnabar,
       borderBottomWidth: 3,
       color: Colors.jet,
       fontSize:Fonts.size.normal,
       paddingBottom: 5,
       paddingTop: 5,
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