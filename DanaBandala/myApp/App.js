import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, ImageBackground } from 'react-native';

const backgroundImage = require('./assets/images/background-image.png'); 

export default function App() {
  return (
    <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
      <View style={styles.container}>
        <Text style={styles.title}>Welcome to</Text>
        <Text style={styles.subtitle}>PET BOND</Text>
        <TextInput placeholder="Nombre y Apellido" placeholderTextColor={'#AAA'} style={styles.textInput} />
        <TextInput placeholder="Telefono" placeholderTextColor={'#AAA'} secureTextEntry={true} style={styles.textInput} />
        <StatusBar style="auto" />
        <TouchableOpacity style={styles.button} onPress={() => console.log('Mi mensaje dos')}>
          <Text style={styles.buttonText}>Registrarse</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover', 
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)', 
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