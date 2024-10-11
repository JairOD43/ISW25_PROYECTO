import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Text,} from 'react-native';
import  Wrapper  from "./components/layout/Wrapper";
import  Header  from "./components/layout/Header";

export default function App() {
  return (
    <Wrapper>
      <Header></Header>

      <View style={styles.container}>
        <Text>Sin</Text>
        <StatusBar style="auto"></StatusBar>
      </View>
    </Wrapper>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title:{
    fontSize: 80,
    color: '#000',
    fontWeight:"bold",
  },
  subtitle:{
    fontSize: 20,
    color: 'gray',
    fontWeight: "condensedBold",
  },
  TextInput:{
    padding:20,
    paddingStart: 30,
    width: "80%",
    height: 50,
    marginTop: 20,
    borderRadius: 30,
    backgroundColor: '#FFFFFF',
  },
});
