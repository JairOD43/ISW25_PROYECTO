import { StatusBar } from 'expo-status-bar';
import { 
  Button,
  StyleSheet,
  Text, 
  TextInput, 
  TouchableOpacity, 
  View,
} from 'react-native';
import FormItem from './components/controls/Formitem';
import Wrapper from './components/layout/wrapper';
import Header from './components/layout/Header';

export default function App() {
  return(
    <Wrapper>
      <Header title="Componentes Base"/>
        <View style={styles.container}>
          <Text>Sin etiqueta</Text>
          <FormItem/>
          <Text> Con etiqueta</Text>
          <FormItem label={"Correo electronico"}/>
          <StatusBar style="auto"/>
        </View>
    </Wrapper>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title:
  {
    fontSize: 75,
    color: '#000',
    fontWeight: "bold"
  },
  subtitle:
  {
    fontSize: 20,
    color: '#003eff',
    fontWeight: "condensedBold"
  },
  textInput:
  {
    borderWidth: 2,
    borderColor: 'gray',
    padding: 10,
    width: "80%",
    borderRadius: 20,
    marginTop: 25,
    height: 60,
    paddingStart: 30,
    backgroundColor: '#dbdcdf'
  },
  bgimage:
  {
    width: '100%',
    height: ' 100%',
    alignItems: 'center',
    justifyContent: "center",
    opacity: 0.8
  }
  
});
