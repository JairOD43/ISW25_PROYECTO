import { StatusBar } from 'react-native';
import{
  Button,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
}from "react-native";
import Wrapper from './components/layout/Wrapper';
import Header from './components/layout/Header';
const image = { uri: "https://docs.expo.dev/static/images/tutorial/background-image.png" };

export default function App() {
  return (
  <Wrapper>
    <Header/>
    <View style={styles.container}>
      <Text>Sin etiqueta</Text>
      <StatusBar style="auto"/>
    </View>
  </Wrapper>
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
    fontSize: 42,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#000000a0',
  },
  TextInput:{
    borderWidth: 1.5,
    paddingStart: 30,
    borderColor:'white',
    padding: 10,
    width: '80%',
    color: 'white',
    height: 40,
    marginTop: 20,
    borderRadius: 30,
     },
     Button: {
      borderWidth: 1,
      paddingStart: 30,
      borderColor:'gray',
      padding: 10,
      width: '50%',
      height: 50,
      marginTop: 20,
      borderRadius: 30,
     },
  
});
