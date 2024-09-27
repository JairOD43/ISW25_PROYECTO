import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Image, Button } from 'react-native';

const PlaceholderImage = require('./assets/background.jpg');

export default function App() {
  const handlePress = () => {
    alert('Botón presionado');
  };
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={PlaceholderImage} style={styles.image} />
      </View>
      <Button title="Presionar" onPress={handlePress} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageContainer: {
    flex: 1,
    paddingTop: 58,
    justifyContent: 'center',
  },
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
});