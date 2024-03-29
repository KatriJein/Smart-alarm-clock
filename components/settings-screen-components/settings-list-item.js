import { StyleSheet, Text, View } from 'react-native';
import { vw } from 'react-native-expo-viewport-units';

export default function SettingsListItem({ data }) {
    return (
        <View key={data.text} style={styles.container}>
            <Text style={[styles.text, styles.title]}>{data.title}</Text>
            <Text style={[styles.text, styles.desc]}>{data.info}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row', 
        columnGap: 10,
        flexWrap: 'wrap',
        alignItems: 'center',
        marginBottom: 10,
        rowGap: 3
    },
    text: {
        fontFamily: 'montserrat-alt-medium',
        color: '#000'
    },
    title: {
        fontSize: Math.round(vw(5.5))
    },
    desc: {
        fontSize: Math.round(vw(4.5)),
    }
});
