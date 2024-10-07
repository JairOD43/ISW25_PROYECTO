import { StatusBar } from "expo-status-bar";
import {Button, StyleSheet, Text, TextInput, TouchableOpacity, View, Image} from 'react-native';
import Wrapper from './components/layout/Wrapper';
import Header from './components/layout/Header';
export default function App() {
  return (
    <Wrapper>
      <Header/>
      <View style={styles.container}>
        <Text>Sin etiqueta</Text>

      </View>
    </Wrapper>
     
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize:70,
    color: '#000',
    fontWeight: 'bold'
  },
  subtitle: {
    fontSize: 20,
    color: 'gray',
    fontWeight: 'condenseBold'

  },
  TextInput:{
    borderWidth: 1,
    borderColor: 'black',
    padding: 10,
    width: '80%',
    height: 50,
    marginTop: 20,
    borderRadius:30,
    backgroundColor: '#fff',
    
  },
  image: 
  {
    width: '100%',
    height: '100%',
    alignContent: 'center',
    justifyContent: 'center'
  }

});
