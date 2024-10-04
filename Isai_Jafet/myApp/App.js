import { StatusBar } from 'expo-status-bar';
import {ImageBackground, Button, StyleSheet, View, Image, Pressable, Text, TextInput, TouchableOpacity } from 'react-native';
import FontAwesome from "@expo/vector-icons/FontAwesome";

const image = require('./assets/images/background-image.jpg');

function ImageViewer({ placeholderImageSource }) {
  return <Image source={placeholderImageSource} style={styles.image} />;
}
/*
export function Button({ label, theme }) {
  if (theme === "primary") {
    return (
      <View style={[styles.buttonContainer, { borderWidth: 4, borderColor: "#ffd33d", borderRadius: 18 }]}>
        <Pressable
          style={[styles.button, { backgroundColor: "#fff" }]}
          onPress={() => alert('You pressed a button.')}
        >
          <FontAwesome
            name="picture-o"
            size={18}
            color="#25292e"
            style={styles.buttonIcon}
          />
          <Text style={[styles.buttonLabel, { color: "#25292e" }]}>{label}</Text>
        </Pressable>
      </View>
    );
  }

  return (
    <View style={styles.buttonContainer}>
        <Pressable style={styles.button} onPress={() => alert('You pressed a button.')}>
          <Text style={styles.buttonLabel}>{label}</Text>
        </Pressable>
      </View>
  );
}

*/


export default function App() {
  return (

    <View style={styles.container}>
       <ImageBackground source={image} resizeMode="cover" style={styles.image}>

    <Text style={styles.title}>Welcome</Text>
    <Text style={styles.subtitle}>Sign in your account</Text>
    
    <TextInput placeholder="Nombre " style={styles.textInput}/>
    <TextInput placeholder="Apellido" style={styles.textInput}/>
    <TextInput placeholder="Telefono" style={styles.textInput}/> 
    
     <Button
      onPress={()=> console.log('Disfruten lo votado')}
      title= "Registrarse"
      /> 
      <StatusBar style='auto' />
      
    
      </ImageBackground>
  </View>
  );
} 
    
   /* <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer placeholderImageSource={PlaceholderImage} />
      </View>
      <View style={styles.footerContainer}>
        <Button theme="primary" label="Choose a photo"/>
        <Button label="Use this photo" />
      </View>
      <StatusBar style="auto" />
    </View>
  );
} */

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
  },
  imageContainer: {
    flex: 1,
    paddingTop: 58,
  },
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
  buttonContainer: {
    width: 320,
    height: 68,
    marginHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 3,
  },
  button: {
    borderRadius: 10,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  buttonLabel: {
    color: '#fff',
    fontSize: 16,
  },
  footerContainer: {
    flex: 1 / 3,
    alignItems: 'center',
  },
  title:{

    color:"#000",
    fontSize: 70,
    fontWeight: "bold",

  },

 subtitle:{

    color:"gray",
    fontSize:30,
    fontWeight: "bold",

  },

  textInput:{

    borderWidth:1,
    borderColor:"gray",
    padding: 10,
    width: "80%",
    height:50,
    marginTop:20,
    borderRadius:30,
    backgroundColor: "#fff",
  },
  image: {
    flex: 1,
    justifyContent: 'center',
    width: "100%",
    
  },
});


