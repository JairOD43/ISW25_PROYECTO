import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, ImageBackground } from 'react-native';
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
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 60,
    color: '#fff',
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 20,
    color: 'gray',
    fontWeight: 'normal',
    marginBottom: 20,
  },
});
