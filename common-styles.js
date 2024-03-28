import { StyleSheet } from "react-native";
import { Platform } from "react-native";
import { StatusBar } from "react-native";

const commonStyles = StyleSheet.create({
    container: {
        marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export { commonStyles };
