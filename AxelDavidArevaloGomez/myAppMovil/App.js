import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, TouchableOpacity, View, Image } from 'react-native';

const PlaceholderImage = require('./assets/imagenes/animePrimerImagen.jpg');

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={PlaceholderImage} style={styles.image} />
      </View>

      <Text style={styles.title} >Welcome</Text>
      <Text style={styles.subtitle}>Sign in to your account</Text>
      <TextInput style={styles.textInput} placeholder="Nombre" />
      <TextInput style={styles.textInput} placeholder="Apellido" />
      <TextInput style={styles.textInput} placeholder="Telefono" />
      <Button onPress={()=>console.log('Mi mensaje uno')} title="REGISTRAR"/>

      <StatusBar style="auto" />

    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 80,
    color: "#000",
    fontWeight: "bold"
  },
  subtitle: {
    fontSize: 20,
    color: "white",
    fontWeight: "condensedBold"
  },
  textInput: {
    borderWidth: 1,
    borderColor: "gray",
    padding: 10,
    width: "80%",
    height: 50,
    marginTop: 20,
    borderRadius: 30,
    backgroundColor: "white",
  },
  imageContainer: {
    flex: 1,
  },
  image: {
    width: 360,
    height: 810,
    borderRadius: 18,
  }
});