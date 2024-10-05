import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground, TextInput, Button } from 'react-native';
import React from 'react';

export default function App() {
  return (
    <ImageBackground
      source={{ uri: 'https://images2.alphacoders.com/602/602223.jpg' }}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.container}>
        <Text style={styles.title}>WELCOME</Text>
        <Text style={styles.subtitle}>Sign in to your account</Text>


        <TextInput
          placeholder="aaa@mx.com"
          style={styles.textInput}
        />

        
        <TextInput
          placeholder="Password"
          style={styles.textInput}
          secureTextEntry={true}
        />

   <TextInput
          placeholder="Nombre"
          style={styles.textInput}
          secureTextEntry={true}
        />
          <TextInput
          placeholder="Telefono"
          style={styles.textInput}
          secureTextEntry={true}
        />


        <Button title="Sign In" onPress={() => alert('Mi mensaje uno')}  color="#841584"/>
        <StatusBar style="auto" />
        
        <Button title="sign out" onPress={() => alert('Registro')}  color="#841584"/>
        <StatusBar style="auto" />
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
    width: '80%', // Ajustado para que los inputs no llenen toda la pantalla
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(37, 41, 46, 0.8)', 
    padding: 20,
    borderRadius: 10, 
  },
  title: {
    fontSize: 36, // Reducido para mejor visualizaci en moiles
    color: "#fff",
    fontWeight: "bold",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    color: "gray",
    fontWeight: "600", // Valores vlidos para fontWeight
    marginBottom: 20,
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#fff",
    padding: 10,
    width: '100%',
    height: 50,
    marginTop: 10,
    borderRadius: 30,
    backgroundColor: '#fff',
    marginBottom: 15,
  },
});