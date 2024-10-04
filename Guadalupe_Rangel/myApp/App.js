import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Text, TextInput,ImageBackground} from "react-native";

import Button from './components/Button'; 
import ImageViewer from './components/ImageViewer'; 

const image = require("./assets/prueba.jpg"); // Asegúrate de que este sea el nombre correcto de tu imagen.

export default function App() {
  return (
    <View style={styles.container}>
       <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <Text style= {styles.title}>WELCOME</Text>
        <Text style= {styles.subtitle}>Sing in to your account</Text>
        <TextInput placeholder="aaa@xxx.com"/>
        <TextInput placeholder="password"/>
        <TextInput placeholder="numero telefonico"/>
        <View style={styles.footerContainer}>
          <Button label="Registrarse" />
      
        </View>
        <StatusBar style="auto" />
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
  },
  image:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: "100%"

  },
  footerContainer: {
    flex: 1 / 3,
    alignItems: 'center',
  },
  title:{
    paddingTop:50,
    fontSize:50,
    color: 'white',
    fontWeight: 'bold',
  },
  subtitle:{
    fontSize:20,
    color: 'red',
    fontWeight: 'condensedBold',
  },
  TextInput:{
    borderWidth:10,
    borderColor:'#fff',
    padding: 10,
    width:"80%",
    height:50,
    marginTop:20,
    borderRadius:30,
    backgroundColor:'#f0f0f0',
  },
});