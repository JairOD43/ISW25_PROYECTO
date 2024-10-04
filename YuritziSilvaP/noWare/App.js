import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Image, Text, TextInput, Button, TouchableOpacity, ImageBackground} from 'react-native';
/*import Button from "./components/Button"*/

const PlaceholderImage = require('./assets/fondo.jpg');

export default function App() {
  return (
    <View style={styles.container}>
      
      <ImageBackground source={{ uri: "https://i.pinimg.com/564x/f1/0f/97/f10f975910848efe6300f4244faf8c76.jpg"}} style={styles.bgimage}>
      <Text style={styles.title}>WELCOME</Text>
        <TextInput placeholder ='Ingresa tu nombre' style={styles.textInput}></TextInput>
        <TextInput placeholder='Ingresa tus apellidos' style={styles.textInput}></TextInput>
        <TextInput placeholder='Ingresa tu telefono' style={styles.textInput}></TextInput>
        <TouchableOpacity onPress = {()=>console.log('Hola, estas registrado')}>
        <Text 
        style={
          {color:'white', 
            fontSize: 20, 
            backgroundColor:'#645bf7',
            borderWidth: 4,
            borderColor: '#645bf7',
            padding: 10,
            width: "80%",
            marginTop: 25,
            height: 60,
            paddingStart: 10,
            textAlign: 'center',
            justifyContent: 'center'
          }
          }> 
        Registrate
        </Text> 
        </TouchableOpacity>
      </ImageBackground>
      
      
    {/*
    <Text style={styles.title}>WELCOME</Text>
      <Text style={styles.subtitle}>sign in to your account </Text>
      <TextInput placeholder='aaa@xxx.com' style={styles.textInput}></TextInput>
      <TextInput placeholder='password' style={styles.textInput}></TextInput>
      
      <Button
       onPress = {()=>console.log('Hola, presionaste un boton')}
       title = "soy el boton 1"
      />

    <View style={styles.imageContainer}>
        <Image source={PlaceholderImage} style={styles.image} />
      </View>
      <View>
        <Button label="Dame click"></Button>
      </View>
      <TouchableOpacity onPress = {()=>console.log('Hola, presionaste el boton 2')}>
        <Text 
        style={
          {padding: 10, color:'red', fontSize: 20}
          }> 
        boton 2
        </Text> 
        </TouchableOpacity>
        las llaves dobles es para enfatizar un conjunto de estilos a travez de un componente*/}
      

      
      <StatusBar style="auto" />

      

    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  title:
  {
    fontSize: 75,
    color: '#000',
    fontWeight: "bold"
  },
  subtitle:
  {
    fontSize: 20,
    color: '#003eff',
    fontWeight: "condensedBold"
  },
  textInput:
  {
    borderWidth: 2,
    borderColor: 'gray',
    padding: 10,
    width: "80%",
    borderRadius: 20,
    marginTop: 25,
    height: 60,
    paddingStart: 30,
    backgroundColor: '#dbdcdf'
  },
  bgimage:
  {
    width: '100%',
    height: ' 100%',
    alignItems: 'center',
    justifyContent: "center",
    opacity: 0.8
  }
  /*
    imageContainer: {
    flex: 1,
    paddingTop: 58,
  },
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
  */
  
});
