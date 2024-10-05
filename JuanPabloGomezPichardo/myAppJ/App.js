import { StatusBar } from 'expo-status-bar';
import {StyleSheet, View, Text, TextInput, Button, TouchableOpacity,ImageBackground } from 'react-native';


const PlaceholderImage = require('./assets/images/fondito.jpg');

export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground source={PlaceholderImage} style={styles.image}>
      <StatusBar style="auto" />
      <View style={styles.imageContainer}>
      <Text style={styles.title}>Welcome</Text>
      <Text style={styles.subtitle}>Iniciar sesion en tu cuenta</Text>
      <TextInput placeholder='Nombre' style={styles.textInput}></TextInput>
      <TextInput placeholder='Apellido' style={styles.textInput}></TextInput>
      <TextInput placeholder='Telefono' style={styles.textInput}></TextInput>
      <Button
      onPress={()=>console.log('Mi mensaje uno')}
      title='boton 1'/>
      <TouchableOpacity onPress={() => console.log("Mi mensaje dos")}>
        <Text 
        style={{
          padding:10,
          color:'white',
          fontSize:30,
          backgroundColor:'gray',
          }}>Boton 2</Text>
      </TouchableOpacity>
      <Button
      onPress={()=>console.log('Mi mensaje uno')}
      title='Registrar'/>
      </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'column',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: "center",
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  title:
  {
    fontSize:80,
    color:'#000',
    fontWeight:'bold',
  },
  subtitle:
  {
    fontSize:20,
    color:'gray',
    fontWeight:'condensedBold',
  },
  textInput:{
    padding:10,
    paddingStart:30,
    width:'80%',
    height:50,
    marginTop:20,
    borderRadius:30,
    backgroundColor:'#fff'
  }
});
