import { StyleSheet, Text, View } from 'react-native';
import { NAME_OF_MONTHS } from '../../../const';
import { vw, vh, vmin, vmax } from 'react-native-expo-viewport-units';


export default function DayDetailsHeader(props) {
    const { date } = props;
    return (
        <View style={styles.header}>
            <Text style={[styles.text, styles.text1]}>{date.day} {NAME_OF_MONTHS[date.month]}</Text>
            <Text style={[styles.text, styles.text2]}>{date.year}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        height: '20%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontFamily: 'montserrat-alt-medium',
        color: '#000'
    },
    text1: {
        fontSize: Math.round(vw(8))
    },
    text2: {
        fontSize: Math.round(vw(6.5)),
        marginTop: '0.5%'
    }
});

