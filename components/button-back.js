import { View, Text, Image, Pressable, TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import { StyleSheet } from 'react-native';

export default function ButtonBack({ onBackPress }) {
    return (
        <TouchableOpacity style={styles.pip} onPress={onBackPress}>
            <View style={styles.container}>
                <Ionicons style={styles.arrow} name="chevron-back-outline" size={25} color="black" />
                <Text style={styles.text}>Назад</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    pip: {
        position: 'absolute',
        top: 0,
        left: 5
    },
    container: {
        width: 'auto',
        flexDirection: "row",
        alignItems: "center",
        padding: 3,
    },
    text: {
        fontFamily: 'lato-regular',
        fontSize: 22,
        left: -3,
        top: -1
    },
    arrow: {
        left: -3
    }
})