import { StyleSheet } from "react-native";

export const roundSelectorStyles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        width: 'auto',
        height: 'auto',
        backgroundColor: 'rgba(255, 255, 255, 0.4)',
        borderRadius: 20,
        paddingHorizontal: 10,
        paddingVertical: 5,
        alignItems: 'center',
        justifyContent: 'space-between',
        // marginTop: '6%'
    },
    text: {
        fontFamily: 'lato-medium',
        fontSize: 20,
        color: '#000',
        marginHorizontal: 3
    }
})
