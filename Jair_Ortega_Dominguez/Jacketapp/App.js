import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, Button, TouchableOpacity } from 'react-native';

const PlaceholderImage = { uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCJC1JDEqBO6jXfLU-gufSgj5UAYz_w3tFKw&s' }; 

export default function App() {
  return (
    <View style={styles.container}>
      <Image source={PlaceholderImage} style={styles.image} />
      <View style={styles.overlay}>
        <Text style={styles.title}>Jacketapp</Text>
        <Text style={styles.title}>texto de prueba</Text>
        <TextInput placeholder="Correo" style={styles.textInput} />
        <TextInput placeholder="Contraseña" style={styles.textInput} secureTextEntry />
        <Button
          onPress={() => console.log('Inicio')} 
          title="boton 1"
        />
        <TouchableOpacity onPress={() => console.log('cargando')}>
          <Text style={styles.buttonText}>iniciar</Text>
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    borderRadius: 18,
  },
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(37, 41, 46, 0.8)',
  },
  title: {
    fontSize: 40,
    color: '#8000',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  textInput: {
    borderWidth: 2,
    borderColor: 'gray',
    padding: 10,
    width: 200,
    marginTop: 20,
    borderRadius: 30,
  },
  buttonText: {
    color: 'white',
    marginTop: 10,
  },
});