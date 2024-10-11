// construir formulario, campo de texto y label
import {View, Text, TextInput, StyleSheet} from 'react-native';
import fonts from '../../constants/fonts';
import colors from '../../constants/colors';

export default function FormItem({label}){
    return(
        <View style={styles.container}>
            {label && <Text style={styles.label}>{label}</Text>}
            <TextInput style={styles.input}/>
        </View>
    );
};
const styles = StyleSheet.create({
    container: 
    {
        marginBottom: 10,
        width: '100%',

    },
    label:
    {
        color: colors.oldSilver,
        fontSize: fonts.size.small,
        fontFamily: fonts.family.regular,
        textAlign: 'center',

    },
    input:
    {
        borderBottomColor: colors.cinnabar,
        borderBottomWidth: 3,
        color: colors.jet,
        fontSize: fonts.size.normal,
        paddingBottom : 5,
        paddingTop: 5,
    },
});