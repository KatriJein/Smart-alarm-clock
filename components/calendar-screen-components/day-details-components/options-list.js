import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { vw } from 'react-native-expo-viewport-units';


export default function OptionsList(props) {
    const { data } = props;

    function listItem({ text, index }) {
        return (<TouchableOpacity key={index}>
            <View style={[styles.listItem]}>
                <Text style={[styles.description, styles.text]}>{text}</Text>
            </View>
        </TouchableOpacity>);
    };

    return (
        <View key={data.title} style={styles.container}>
            <Text style={[styles.text, styles.title]}>{data.title}</Text>
            <View style={styles.containerList}>{data.options.map((text, index) => listItem({ text, index }))}</View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 'auto',
    },
    text: {
        fontFamily: 'kyiv-type',
        color: '#000'
    },
    title: {
        fontSize: Math.round(vw(6.5)),
        paddingHorizontal: 10,
        paddingTop: 6
    },
    description: {
        fontSize: Math.round(vw(4.5)),
        marginTop: '0.5%'
    },
    containerList: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 10,
        justifyContent: 'center',
        margin: 10
    },
    listItem: {
        width: 'auto',
        height: 'auto',
        paddingVertical: 8,
        paddingHorizontal: 10,
        borderColor: '#fdddeb',
        backgroundColor: '#fdddeb',
        borderRadius: 13
    },
    listItemChecked: {
        borderColor: 'white',
        backgroundColor: 'white',
    }
});

