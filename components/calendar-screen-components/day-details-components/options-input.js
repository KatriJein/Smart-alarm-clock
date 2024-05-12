import { StyleSheet, Text, TextInput, View } from 'react-native';
import { vw } from 'react-native-expo-viewport-units';

export default function OptionsInput(props) {
    const { selectedOption, onSelect, optionTitle, optionPlaceholder } = props;
    return (
        <View style={styles.container}>
            <Text style={[styles.text, styles.title]}>{optionTitle}:</Text>
            <TextInput
                placeholder={optionPlaceholder}
                style={[styles.text, styles.input]}
                keyboardType='numeric' value={selectedOption}
                onChangeText={onSelect}
                maxLength={2}>
            </TextInput>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 'auto',
        flexDirection: 'row',
        padding: 10,
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    text: {
        fontFamily: 'lato-regular',
        color: '#000'
    },
    title: {
        fontSize: Math.round(vw(6.5)),
        width: '80%',
    },
    input: {
        borderColor: '#000',
        borderWidth: 1,
        fontSize: Math.round(vw(5.5)),
        paddingHorizontal: 9,
        paddingVertical: 3,
        textAlign: 'center',
        borderRadius: 13,
        height: 40,
        width: 45,
        marginRight: 2
    }
});

