import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Image, Pressable, Text } from 'react-native';

const PlaceholderImage = require('./assets/images/montefuji.jpg');

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={PlaceholderImage} style={styles.image} />
      </View>

      <Pressable style={styles.button} onPress={() => alert('¡Botón presionado!')}>
        <Text style={styles.buttonLabel}>Presionaaaaaa</Text>
      </Pressable>

      <Pressable style={styles.button} onPress={() => alert('!Saliste!')}>
        <Text style={styles.buttonLabel}>Salir</Text>
      </Pressable>

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
  imageContainer: {
    flex: 1,
    paddingTop: 58,
    justifyContent: 'center', // Centrar la imagen
  },
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
  // Estilos para el botón
  button: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 5,
    marginBottom: 30, // Un poco de espacio debajo del botón
  },
  buttonLabel: {
    color: 'black',
    fontSize: 16,
  },
});


