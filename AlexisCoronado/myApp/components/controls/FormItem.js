import { View, Text, TextInput, StyleSheet } from 'react-native'; // Se agregó StyleSheet
import Fonts from '../../constants/Fonts';
import Colors from '../../constants/Colors';

export default function FormItem({ label }) {
  return (
    <View style={styles.container}>
      {label && <Text style={styles.label}>{label}</Text>}
      <TextInput style={styles.input} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
    width: '100%',
  },
  label: {
    color: Colors.oldSilver,
    fontSize: Fonts.size.small,
    fontFamily: Fonts.family.regular,
    textAlign: 'center',
  },
  input: {
    borderBottomColor: Colors.cinnabar,
    borderBottomWidth: 3,
    color: Colors.jet,
    fontSize: Fonts.size.normal,
    paddingBottom:5,
    paddingTop:5,
  },
});
