import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, ImageBackground } from 'react-native';
import FormItem from './components/controls/FormItem';
import Wrapper from './components/layout/Wrapper';
import Header from './components/layout/Header';
export default function App() {
  return (
    <Wrapper>
      <Header title="Componentes Base"/>
      <View style={styles.container}>
        <Text>Sin etiqueta</Text>
        <FormItem/>
        <Text>Con etiqueta</Text>
        <FormItem label={"Correo electronico"}/>
        <StatusBar style="auto"/>
      </View>
    </Wrapper>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 40,
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
