import { StyleSheet, Text, View, style} from 'react-native';
import Wrapper from './components/Layout/Wrapper';
import Header from './components/Layout/Header';
import { StatusBar } from 'expo-status-bar';
import FormItem from './components/controls/Formitem';


export default function App() {
  return (
    <Wrapper>
      <Header title="Componentes Bases"/>
        <View style={styles.container}>
          <Text>sin etiqueta</Text>
          <FormItem/>
          <Text>con etiqueta</Text>
          <FormItem label={"Correo electronico"} />
          <StatusBar style="auto"/>
        </View>
    </Wrapper>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
    paddingHorizontal: 40,
    justifyContent: "center",
  },
  image: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    borderRadius: 18,
  },
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(37, 41, 46, 0.8)',
  },
  title: {
    fontSize: 40,
    color: '#8000',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  textInput: {
    borderWidth: 2,
    borderColor: 'gray',
    padding: 10,
    width: 200,
    marginTop: 20,
    borderRadius: 30,
  },
  
});