import {StyleSheet, Text, View, } from "react-native";

import Wrapper from "./components/layout/Wrapper";
import Header from "./components/layout/Header";

export default function App() {
  return ( 
    <Wrapper>
      <Header/>
      <View styles = {styles.container}>
        <Text>Hola mundo</Text>
      </View>
    </Wrapper>
  );
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 70,
    color: '#fff',
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 30,
    color: '#fff',
    fontWeight: 'condensedBold',
  },
  textImput: {
    borderWidth: 1.5,
    borderRadius: 10,
    borderColor: 'purple',
    padding: 10,
    paddingStart: 30,
    width: "80%",
    height: 50,
    marginTop: 20,
  },

});
