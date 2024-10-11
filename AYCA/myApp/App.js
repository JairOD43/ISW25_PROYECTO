import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
} from "react-native";
import FormItem from './components/controls/FormItem';
import Wrapper from "./components/layout/Wrapper";
import Header from "./components/layout/Header";
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
    alignItems: "center",
    backgroundColor: "#fff",
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 40,
  },
  title: {
    fontSize: 80,
    color: "#000",
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 20,
    color: "gray",
    fontWeight: "condensedBold",
  },
  textInput: {
    padding: 10,
    paddingStart: 30,
    width: "80%",
    height: 50,
    marginTop: 20,
    borderRadius: 30,
    backgroundColor: "#fff",
  },
});
