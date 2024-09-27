import { ImageBackground, Pressable, StyleSheet, Text, View } from 'react-native';

const image = { uri: "https://statics.eleconomista.com.ar/2021/09/crop/614e5c0185278__420x280.webp" };

export default function App() {
  return (
  <View style={styles.container}>
  
    <ImageBackground source={image} style={styles.image}>
      <Text style={styles.text}>jair</Text>
      <Text style={styles.text}>in Front of</Text>
      <Text style={styles.text}>Background</Text>
    </ImageBackground>

    <Pressable style={styles.buttowwn}>
      <Text style={styles.text}>{"presioname"}</Text>
    </Pressable>
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
  buttowwn: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'black',
  }
});
