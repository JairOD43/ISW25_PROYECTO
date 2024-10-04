import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground, Button } from 'react-native';
import React from 'react';

export default function App() {
  return (
    <ImageBackground
      source={{ uri: 'https://images2.alphacoders.com/602/602223.jpg' }}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.container}>
        <Text style={{ color: '#fff', textAlign: 'center', marginBottom: 20 }}>
          Open up App.js welcome to my App!
        </Text>
        <Button
          title="Boton"
          onPress={() => alert('Button pressed!')}
        />
        <StatusBar style="auto" />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1, 
    justifyContent: 'center',
    alignItems: 'center', 
  },
  container: {
    backgroundColor: 'rgba(37, 41, 46, 0.7)', 
    padding: 20,
    borderRadius: 10, 
  },
});