import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Image, Pressable, Text, TextInput, Button, TouchableOpacity, ImageBackground } from 'react-native';

const PlaceholderImage = require('./assets/images/montefuji.jpg');

export default function App() 
{
  return (
    <ImageBackground
      source={{uri:'https://i.pinimg.com/736x/89/f1/64/89f16427098d3a0e757045b521144bac.jpg'}}
      style={styles.fondo}
      >
      <View style={styles.container}>
        <Text style={styles.title}>WELCOME</Text>
        <Text style={styles.subtitle}>Sign in to your account</Text>
        <TextInput style={styles.text_input} placeholder='Nombre'/>
        <TextInput style={styles.text_input} placeholder='Apellido'/>
        <TextInput style={styles.text_input} placeholder='Telefono'/>
        <StatusBar style='auto'/>

        <TouchableOpacity onPress={()=>console.log('Bienvenidooo')}>
          <Text style={{padding: 10, color: 'white',fontSize:15,backgroundColor:'gray',marginTop:20, borderRadius: 10}}>Register</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: 
  {
    flex: 1,
    alignItems: 'center',
    justifyContent: "center",
  },

  title:
  {
    fontSize: 25,
    color:"black",
    fontWeight: "bold"
  },

  subtitle:
  {
    fontSize:20,
    color:'gray',
    fontWeight: "bold"
  },

  text_input:
  {
    borderWidth: 2,
    borderColor: 'purple',
    borderRadius: 30,
    padding: 10,
    width: "75%",
    height: "auto",
    marginTop:20,
  },

  fondo:
  {
    flex:1,
    resizeMode: 'cover',
    justifyContent: "center",
  }
  

});


