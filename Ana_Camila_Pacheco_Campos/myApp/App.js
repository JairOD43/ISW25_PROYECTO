import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, TextInput, TouchableOpacity, View, mageBackground, ImageBackground} from "react-native";
const image = { uri: "https://docs.expo.dev/static/images/tutorial/background-images.png" }

export default function App() {
  return (

    
       <View style={styles.container}>
        <ImageBackground style={styles.image} source={{uri: "https://i.pinimg.com/736x/09/cd/37/09cd3751f9e59f3bc82b982059e7b1c8.jpg"}}>
      <Text style={styles.title}>SOMEBODY</Text>
      <Text style={styles.subtitle}>SEVEN</Text>
      <TextInput style={styles.TextInput} placeholder="Nombre y apellido"/>
      <TextInput style={styles.TextInput} placeholder="Telefono" />

      <StatusBar style= "auto" />
      <TouchableOpacity onPress={()=>console.log('Mi mensaje dos')}>
        <Text style={{padding:10, color:'white', fontSize:30, backgroundColor:'black'}}>Registrar</Text>

      </TouchableOpacity>
      </ImageBackground>
      </View>


   
     
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize:70,
    color: '#000',
    fontWeight: 'bold'
  },
  subtitle: {
    fontSize: 20,
    color: 'gray',
    fontWeight: 'condenseBold'

  },
  TextInput:{
    borderWidth: 1,
    borderColor: 'black',
    padding: 10,
    width: '80%',
    height: 50,
    marginTop: 20,
    borderRadius:30,
    backgroundColor: '#fff',
    
  },
  image: 
  {
    width: '100%',
    height: '100%',
    alignContent: 'center',
    justifyContent: 'center'
  }

});
