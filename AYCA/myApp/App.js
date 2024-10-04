import { StatusBar } from "expo-status-bar";
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>WELCOME</Text>
      <Text style={styles.subtitle}>Sign in to your account</Text>
      <TextInput placeholder="aaa@xxx.com" style={styles.textInput} />
      <TextInput placeholder="password" style={styles.textInput} />
      <Button onPress={() => console.log("Mi mensaje uno")} title="boton 1" />
      <StatusBar style="auto" />
      <TouchableOpacity onPress={() => console.log("Mi mensaje dos")}>
        <Text
          style={{
            padding: 10,
            color: "white",
            fontSize: 30,
            backgroundColor: "gray",
          }}
        >
          Boyon 2
        </Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
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
