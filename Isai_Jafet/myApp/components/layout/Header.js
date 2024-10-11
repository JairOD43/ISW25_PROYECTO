import { View, Image, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons, EvilIcons } from '@expo/vector-icons';
import Colors from '../../constants/Colors';
import Fonts from '../../constants/Fonts';

export default function Header() {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Ionicons name="arrow-back-outline" size={50} color="black" />
      </TouchableOpacity>

      <View style={styles.logoContainer}>
        <Text></Text>
        <Image style={styles.logo} source={require('../../assets/icon.png')} />
      </View>

      <TouchableOpacity>
        <EvilIcons name="cart" size={50} color="black" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: "space-between",
    paddingBottom: 30,
    paddingHorizontal: 30,
    paddingTop: 30,
  },
  title: {
    backgroundColor: Colors.white,
    borderColor: Colors.platinum,
    borderRadius: 20,
    borderWidth: 1,
    color: Colors.jet,
    fontFamily: Fonts.family.bold,
    fontSize: Fonts.size.normal,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginBottom: 10,
  },
  logo: {
    height: 30,
    width: 30,
  },
  logoContainer: {
    alignItems: 'center',
  },
});
