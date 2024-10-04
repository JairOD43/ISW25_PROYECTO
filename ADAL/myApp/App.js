import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Pressable, Text, TextInput, ImageBackground } from 'react-native';
import React from 'react';

const image = { uri: 'https://images.pexels.com/photos/3117226/pexels-photo-3117226.jpeg?cs=srgb&dl=pexels-pixworthmedia-3117226.jpg&fm=jpg' };

export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground source={image} style={styles.imageBackground}>
        <Text style={styles.title}>WELCOME</Text>
        <Text style={styles.subtitle}>Sign in to your account</Text>
        <TextInput style={styles.TextInput} placeholder='Nombre y Apellido' placeholderTextColor="#aaa"></TextInput>
        <TextInput style={styles.TextInput} placeholder='Telefono' placeholderTextColor="#aaa"></TextInput>

        <Pressable style={styles.button} onPress={() => console.log("Mensaje numero uno")}>
          <Text style={styles.buttonText}>Registrar</Text>
        </Pressable>
      </ImageBackground>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
  },
  imageBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 50,
    marginTop: 50,
    fontWeight: 'bold',
    color: 'white',
  },
  subtitle: {
    color: "white",
    marginTop: 30,
  },
  TextInput: {
    borderWidth: 1,
    borderColor: "grey",
    color: "white",
    padding: 10,
    width: "80%",
    height: 50,
    marginTop: 20,
    borderRadius: 30,
  },
  button: {
    marginTop: 20,
    backgroundColor: '#1E90FF',
    paddingVertical: 15,
    paddingHorizontal: 60,
    borderRadius: 30,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  }
});
