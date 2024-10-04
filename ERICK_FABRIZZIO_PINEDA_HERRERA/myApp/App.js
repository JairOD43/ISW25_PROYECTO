import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Image, Button, Text, TextInput, TouchableOpacity, ImageBackground } from 'react-native';

const PlaceholderImage = require('./assets/background.jpg');

export default function App() {
  const handlePress = () => {
    alert('Cuenta no encontrada');
  };
  return (
    <View style={styles.container}>
      <ImageBackground source={PlaceholderImage} resizeMode="cover" style={styles.image}>
        <Text style={styles.title}>Bienvenido</Text>
        <Text style={styles.subtitle}>Registrarme</Text>
        <TextInput placeholder='Nombre(s)' style={styles.textInput}></TextInput>
        <TextInput placeholder='Apellidos' style={styles.textInput}></TextInput>
        <TextInput placeholder='Telefono' style={styles.textInput}></TextInput>
        <StatusBar style="auto" />
        <TouchableOpacity onPress={(handlePress)}>
          <Text style={{padding:10, color:"#000", fontSize: 17, backgroundColor: "#c5cac4", marginTop:20, width: "30%"}}>Registrarme</Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EBE1C9',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: "100%",
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize : 50,
    color: '#000',
    fontWeight: "bold",
    alignContent: "center"
  },  
  subtitle:{
    fontSize : 30,
    color: '#000',
    fontWeight: "bold",
    alignContent: "center"
  },
  textInput:{
    fontSize: 20,
    borderWidth: 2,
    borderColor: "gray",
    backgroundColor: "#F5FEFF",
    padding: 10,
    width: "80%",
    height: 50,
    marginTop: 10,
    marginBottom: 20,
    borderRadius: 20,
  },
});