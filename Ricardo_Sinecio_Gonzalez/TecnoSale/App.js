import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TextInput, View, TouchableOpacity, ImageBackground} from "react-native";

// import Button from './components/Button';

const image = require("./assets/images/Fondo.jpg");

export default function App() {
  return (

    <ImageBackground source={image} style={styles.image}>
      <View style={styles.container}>
        
          <Text style={styles.title}>TecnoSale</Text>
          <Text style={styles.subtitle}>Pagina de compras</Text>

          <TextInput style={styles.textImput} placeholder="Nombre"></TextInput>
          <TextInput style={styles.textImput} placeholder="Apellido"></TextInput>
          <TextInput style={styles.textImput} placeholder="Telefono"></TextInput>

          {/* <Button onPress= {()=>console.log("Hola mundo")} Title='boton 1'/> */}

          <TouchableOpacity>
            <Text style={{padding: 10, paddingLeft:30, paddingRight:30, marginTop: 20, color: '#fff', backgroundColor: 'purple'}}>Registrarse</Text>
          </TouchableOpacity>

          <StatusBar style="auto" />
        
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 70,
    color: '#fff',
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 30,
    color: '#fff',
    fontWeight: 'condensedBold',
  },
  textImput: {
    borderWidth: 1.5,
    borderRadius: 10,
    borderColor: 'purple',
    padding: 10,
    paddingStart: 30,
    width: "80%",
    height: 50,
    marginTop: 20,
  },

  // imageContainer: {
  //   flex: 1,
  //   paddingTop: 58,
  // },
  // footerContainer: {
  //   flex: 1 / 3,
  //   alignItems: 'center',
  // },

});
