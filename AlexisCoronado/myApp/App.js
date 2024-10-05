import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, ImageBackground } from 'react-native';

const backgroundImage = require('./assets/images/background-image.png'); // Asegúrate de que la ruta sea correcta

export default function App() {
  return (
    <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
      <View style={styles.container}>
        <Text style={styles.title}>SecondoLife</Text>
        <Text style={styles.subtitle}>Bienvenido a SecondoLife</Text>
        <TextInput placeholder="nombre y apellido" placeholderTextColor={'#AAA'} style={styles.textInput} />
        <TextInput placeholder="celular" placeholderTextColor={'#AAA'} style={styles.textInput} />
        <StatusBar style="auto" />
        <TouchableOpacity style={styles.button} onPress={() => console.log('Mi mensaje dos')}>
          <Text style={styles.buttonText}>Registrar</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex:1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 60,
    color: '#fff',
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 20,
    color: 'gray',
    fontWeight: 'normal',
    marginBottom: 20,
  },
  textInput: {
    borderWidth: 2,
    borderColor: 'gray',
    padding: 10,
    width: "80%",
    height: 50,
    marginTop: 20,
    borderRadius: 30,
    color: '#fff',
  },
  button: {
    marginTop: 20,
    backgroundColor: 'gray',
    padding: 15,
    borderRadius: 30,
    width: "80%",
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
