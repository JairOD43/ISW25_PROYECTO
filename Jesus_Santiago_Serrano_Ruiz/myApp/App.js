import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, ImageBackground } from 'react-native';

export default function App() {
  return (
    <ImageBackground 
      source={{uri: 'https://i.pinimg.com/736x/8d/62/1f/8d621fdcbda3cac762100b026f3e7db7.jpg'}} 
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <Text style={styles.text}>Welcome to My App!</Text>
        <Button 
          title="Press Me"
          onPress={() => alert('Button Pressed!')}
        />
        <StatusBar style="auto" />
      </View>
    </ImageBackground>
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
    color: '#fff',
    fontSize: 24,
    marginBottom: 20,
  },
});
