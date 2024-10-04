import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, TouchableOpacity, View, ImageBackground } from 'react-native';

const PlaceholderImage = require('./assets/images/background-image.png');

export default function App() {
  return (
    <ImageBackground source={PlaceholderImage} style={styles.background}>
      <View style={styles.container}>
        <Text style={styles.title}>Welcome</Text>
        <Text style={styles.subtitle}>Sign in to your account</Text>

        <TextInput style={styles.textInput} placeholder="Nombres" />
        <TextInput style={styles.textInput} placeholder="Apellidos" />
        <TextInput style={styles.textInput} placeholder="aaa@xxx.com" />
        <TextInput style={styles.textInput} placeholder="password" />
        <Button onPress={() => console.log('Mi mensaje uno')} title="boton 1" />

        <StatusBar style="auto" />

        <TouchableOpacity onPress={() => console.log('Mi mensaje dos')} title="boton 1">
          <Text style={styles.buttonText}>Boton 2</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center', 
    alignItems: 'center', 
  },
  container: {
    flex: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.8)', 
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    borderRadius: 10, 
  },
  title: {
    fontSize: 80,
    color: "#000",
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 20,
    color: "gray",
    fontWeight: "600", // Peso de fuente fijo
  },
  textInput: {
    borderWidth: 1,
    borderColor: "gray",
    padding: 10,
    width: "80%",
    height: 50,
    marginTop: 20,
    borderRadius: 30,
    backgroundColor: "#fff", // Fondo blanco
  },
  buttonText: {
    padding: 10,
    color: 'white',
    fontSize: 30,
    backgroundColor: "gray",
  },
});
