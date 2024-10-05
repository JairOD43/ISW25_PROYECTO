import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Image, Text, TextInput, Pressable, TouchableOpacity, ImageBackground } from 'react-native';

const PlaceholderImage = require('./assets/images/gato.jpg');

//Funciones
export default function App() {
  return (
    <ImageBackground source={{uri: 'https://i.pinimg.com/474x/41/d0/0c/41d00cb012eae8d16efb2c195a60fddb.jpg'}}
    style={{width: '100%', height: '100%',}}>
      
      <View style={styles.container}>

          <View>  
            {/* Textos */}
            <Text style={styles.title}>AppSuples</Text>
            <Text style={styles.subtitle}>Sign in to you account</Text>
            
            {/* Cuadros de texto */}
            <TextInput style={styles.textInput} placeholder='correo@example.com' />
            <TextInput style={styles.textInput} placeholder='password'/>
            
            {/* BOTONES */}
            <StatusBar style="auto" />
            <TouchableOpacity 
            onPress={()=>console.log('Mensaje de confirmacion')}
            title="Botón 2">
            <Text style={{padding: 10, fontsize: 10, backgroundColor:'gray', width:'50%', marginTop: 10, alignSelf:'center',}}>Boton 2</Text>
            </TouchableOpacity>
           
        </View>

      
        <StatusBar style="auto" />
      </View> 
    </ImageBackground>
  );
}

//Configuración de estilos
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title:{
    fontSize:50,
    color:'white',
    fontWeight: 'bold',
  },
  subtitle:{
    fontSize:50,
    color:'white',
    fontWeight: "light",
  },
  textInput:{
    borderWidth: 3,
    borderColor: 'black',
    marginTop: 10,
    padding: 8,
    borderRadius: 10,
  },
  boton:{
    backgroundColor:'black',
    borderColor:'green',
    color:'gray',
  }
});

