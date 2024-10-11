import { View, ScrollView, TouchableOpacity } from "react-native";
import Colors from '../../constants/Colors';
import Fonts from '../../constants/Fonts';

export default function Header({}) {
return (
<View>
	<TouchableOpacity>
		<Ionicons name="arrow-back-outline" size={50} color="black"/>
		</Ionicons>
	</TouchableOpacity>
	<View>
		<Image></Image>
	</View>
	<TouchableOpacity>
		<Evillcons name="cart" size={50} color="black"/>
	</TouchableOpacity>
</View>
);
}
const styles = StyleSheet.create({
		container: {
		},
		title: {
		},
		subtitle: {
		},
		textInput: {
		},