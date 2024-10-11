import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, ImageBackground, TextInput, TouchableOpacity } from 'react-native';
import Wrapper from './components/layout/Wrapper';
import Header from './components/layout/Header';

export default function App() {
  return (
    <ImageBackground
      source={{ uri: 'https://wallpapers.com/images/hd/the-rock-in-gym-training-wctegg23m9yj1rb4.jpg' }}
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <Text style={styles.title}>WELCOME TO</Text>
        <Text style={styles.title}>DORIAN HOUSE</Text>
        <Text style={styles.text}>Sign in to your account</Text>
        <TextInput placeholder='Name/LastName' style={styles.textInput} />
        <TextInput placeholder='PassWord' style={styles.textInput} />
        <TextInput placeholder='PhoneNumber' style={styles.textInput} secureTextEntry={true} />
        <StatusBar style="auto" />

        <TouchableOpacity onPress={() => console.log("Me presionaste GG")}>
          <Text
            style={{
              padding: 10,
              color: "white",
              fontSize: 25,
              backgroundColor: "green",
              textAlign: "center",
              marginTop: 20,
              borderRadius: 30,
            }}
          >
            Create User
          </Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

export default function Wrapper({}) {
  return (
      <Wrapper>
        <Header/>
        <View>
          <Text>Sin etiqueta</Text>
        </View>
      </Wrapper>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover', // Ensure the image covers the whole screen
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontSize: 24,
    marginBottom: 20,
  },
  title: {
    color: 'orange',
    fontSize: 60,
    marginBottom: 20,
    fontWeight: "bold",
  },
  textInput: {
    backgroundColor:"white",
    borderWidth: 1,
    borderColor: "green",
    padding: 10,
    width: "80%",
    height: 50,
    marginTop: 20,
    borderRadius: 30,
  },
});
