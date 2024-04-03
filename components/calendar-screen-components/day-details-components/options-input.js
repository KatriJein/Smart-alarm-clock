import { StyleSheet, Text, TextInput, View } from 'react-native';
import { vw } from 'react-native-expo-viewport-units';

export default function OptionsInput(props) {
    const { selectedOption, onSelect } = props;
    return (
        <View style={styles.container}>
            <Text style={[styles.text, styles.title]}>Часов сна</Text>
            <TextInput
                placeholder='8'
                style={[styles.text, styles.input]}
                keyboardType='numeric' value={selectedOption}
                onChangeText={onSelect}>
            </TextInput>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 'auto',
        flexDirection: 'row',
        columnGap: 30,
        padding: 10
    },
    text: {
        fontFamily: 'kyiv-type',
        color: '#000'
    },
    title: {
        fontSize: Math.round(vw(6.5)),
    },
    input: {
        borderColor: '#000',
        borderWidth: 1,
        fontSize: Math.round(vw(5)),
        paddingHorizontal: 8,
        paddingVertical: 2,
        textAlign: 'center',
        borderRadius: 13
    }
});
