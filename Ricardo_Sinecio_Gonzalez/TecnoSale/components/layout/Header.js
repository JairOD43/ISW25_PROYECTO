import {View, Image, Text, StyleSheet,TouchableOpacity} from 'react-native';
import {Ionicons, EvilIcons} from '@expo/vector-icons';
import Colors  from '../../constans/Colors';
import Fonts from '../../constans/Fonts';

export default function Header ({}) {
    return(
        <View style = {styles.container}>
            <TouchableOpacity >
                <Ionicons name = "arrow-back-outline" size = {50} color = "black"/>
            </TouchableOpacity>

            <View style = {styles.container_logo}>
                {<Text></Text>}
                <Image style = {styles.logo} sourse={require('../../assets/icon.png')}/>
            </View>

            <TouchableOpacity>
                <EvilIcons name = "cart" size = {50} color = "black"/>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
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
  container_logo: {
    alignItems: 'center',
  },
  logo: {
    with: 30,
    height: 30,
  },

  textImput: {
    borderWidth: 1.5,
    borderRadius: 10,
    borderColor: 'purple',
    padding: 10,
    paddingStart: 30,
    width: "80%",
    height: 50,
    marginTop: 20,
  },



});
