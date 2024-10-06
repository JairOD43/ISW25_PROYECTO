import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Text, TextInput,ImageBackground} from "react-native";
import Wrapper from "./components/layout/Wrapper";
import Header from "./components/layout/Header";

import Button from './components/Button'; 
import ImageViewer from './components/ImageViewer'; 

const image = require("./assets/prueba.jpg"); 

export default function App() {
  return (
    <Wrapper>
      <Header>
        <View style={styles.container}>
          <Text>Sin etiqueta</Text>
        </View>
      </Header>
    </Wrapper>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
  },
  image:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: "100%"

  },
  footerContainer: {
    flex: 1 / 3,
    alignItems: 'center',
  },
  title:{
    paddingTop:50,
    fontSize:50,
    color: 'white',
    fontWeight: 'bold',
  },
  subtitle:{
    fontSize:20,
    color: 'red',
    fontWeight: 'condensedBold',
  },
  TextInput:{
    borderWidth:10,
    borderColor:'#fff',
    padding: 10,
    width:"80%",
    height:50,
    marginTop:20,
    borderRadius:30,
    backgroundColor:'#f0f0f0',
  },
});