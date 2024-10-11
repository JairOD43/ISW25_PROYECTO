import { View, Text, StyleSheet } from 'react-native';
import Wrapper from './components/layout/Wrapper';
import Header from './components/layout/Header';

export default function App() {
  return (
    <Wrapper>
      <Header />
      <View style={styles.container}>
        <Text style={styles.title}>Título</Text>
        <Text style={styles.subtitle}>Subtítulo</Text>
      </View>
    </Wrapper>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: "#000",
    fontSize: 70,
    fontWeight: "bold",
  },
  subtitle: {
    color: "gray",
    fontSize: 30,
    fontWeight: "bold",
  },
});
