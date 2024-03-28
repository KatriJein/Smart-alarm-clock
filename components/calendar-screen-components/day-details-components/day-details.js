import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { commonStyles } from '../../../common-styles';
import { LinearGradient } from 'expo-linear-gradient';
import { STATUSBAR_HEIGHT, NAME_OF_MONTHS} from '../../../const';
import { vw, vh, vmin, vmax } from 'react-native-expo-viewport-units';
import DayDetailsHeader from './day-details-header';
import DayDetailsOptions from './day-details-options';


export default function DayDetails({ route }) {
      const { date } = route.params;
    // const date = {
    //     dateString: "2024-03-15",
    //     day: 15,
    //     month: 3,
    //     timestamp: 1710460800000,
    //     year: 2024
    // }
    return (
        <LinearGradient
            style={{ flex: 1 }}
            colors={['rgba(250, 208, 196, 1)', 'rgba(251, 194, 235, 1)']}
            start={{ x: 1, y: 0 }}
            end={{ x: 0, y: 1 }}>
            <View style={styles.container}>
                <DayDetailsHeader date={date} />
                <DayDetailsOptions />
            </View>
        </LinearGradient>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: STATUSBAR_HEIGHT
    },
});
