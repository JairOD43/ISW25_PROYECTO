import React from 'react';

import { ImageBackground, Pressable, StyleSheet, Text, View, TextInput, Button, TouchableOpacity } from 'react-native';

const image = { uri: "https://statics.eleconomista.com.ar/2021/09/crop/614e5c0185278__420x280.webp" };

export default function App() {
  const [text, onChangeText] = React.useState('Useless Text');
  const [number, onChangeNumber] = React.useState('');
  return (
  <View style={styles.container}>
  
    <ImageBackground source={image} style={styles.image}>
      <Text style={styles.text}>WELCOME</Text>
      <Text style={styles.text2}>sign in to your account</Text>

    <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="Nombre"
        keyboardType="text"
      />
    <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="Apellido"
        keyboardType="numeric"

      />
    <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="Telefono"
        keyboardType="numeric"

      />
      <Button style={styles.buttowwn}
        onPress={()=>console.log("Mi mensaje uno")}
        title = "Registrarte"
      />
      <TouchableOpacity onPress={()=> console.log("Mi mensaje uno")} >
        <Text style={{ padding:10, color:"black", fontSize:30}}>touchable</Text>
      </TouchableOpacity>

    </ImageBackground>


  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#000000a0',
  },
  buttowwn: {
    width: "50%"
    
  },
  text2: {
    color: 'red',
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#fff',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderWidth: 1.5,
    borderColor: "red",
    borderRadius:30

  },
});
