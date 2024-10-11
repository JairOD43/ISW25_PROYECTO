import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Image, Pressable, Text, TextInput, Button, TouchableOpacity, ImageBackground } from 'react-native';

const PlaceholderImage = require('./assets/images/montefuji.jpg');

import Wrapper from './components/layout/Wrapper';
import Header from './components/layout/Header';

export default function App() 
{
  return (
   <Wrapper>
      <Header/>
      <View style={styles.container}>
        <Text>Sin etiqueta</Text>
      </View>
   </Wrapper>
  );
}
//Nose que hice ayudaaaaaaa
const styles = StyleSheet.create({
  container: 
  {
    flex: 1,
    alignItems: 'center',
    justifyContent: "center",
  },

  title:
  {
    fontSize: 25,
    color:"black",
    fontWeight: "bold"
  },

  subtitle:
  {
    fontSize:20,
    color:'gray',
    fontWeight: "bold"
  },

  text_input:
  {
    borderWidth: 2,
    borderColor: 'purple',
    borderRadius: 30,
    padding: 10,
    width: "75%",
    height: "auto",
    marginTop:20,
  },

  fondo:
  {
    flex:1,
    resizeMode: 'cover',
    justifyContent: "center",
  }
});


