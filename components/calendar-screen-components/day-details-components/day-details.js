import { StyleSheet, View } from 'react-native';
import { STATUSBAR_HEIGHT} from '../../../const';
import DayDetailsHeader from './day-details-header';
import DayDetailsOptions from './day-details-options';
import Gradient from '../../Gradient';


export default function DayDetails({ route }) {
      const { date } = route.params;
    return (
        <Gradient>
            <View style={styles.container}>
                <DayDetailsHeader date={date} />
                <DayDetailsOptions />
            </View>
        </Gradient>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: STATUSBAR_HEIGHT
    },
});
