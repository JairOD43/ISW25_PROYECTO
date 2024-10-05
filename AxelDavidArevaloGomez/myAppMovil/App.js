import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, TouchableOpacity, View, Image } from 'react-native';

import Wrapper from './components/layout/Wrapper';
import Header from './components/layout/Header';
// const PlaceholderImage = require('./assets/imagenes/animePrimerImagen.jpg');

export default function App() {
  return (
    <Wrapper>
      <Header/>
      <View style={styles.container}>
        <Text>Sin Etiqueta</Text>
      </View>
    </Wrapper>
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