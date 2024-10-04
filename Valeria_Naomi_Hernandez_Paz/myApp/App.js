import { ImageBackground, StyleSheet, Text, TextInput,TouchableOpacity,  View } from 'react-native';

const image = { uri: "https://docs.expo.dev/static/images/tutorial/background-image.png" };

export default function App() {
  return (
  <View style={styles.container}>
    <ImageBackground source={image} style={styles.image}>
     
      <TextInput style={styles.TextInput}placeholder='Nombres'/>
      <TextInput style={styles.TextInput}placeholder='Telefono'/>
    
         <TouchableOpacity onPress={()=>console.log("Ha sido registrado")}>
          <Text style={{padding:10, color:'white', fontSize:30,borderWidth: 1, marginTop: 40,borderRadius: 20, width: '50%', }}>Registrar</Text>
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
