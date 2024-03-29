import { ScrollView, StyleSheet } from 'react-native';
import SettingsListItem from './settings-list-item';
import { SETTINGS } from '../../const';

export default function SettingsList() {
    return (
        <ScrollView style={styles.container}>
            {SETTINGS.map((item) => <SettingsListItem key={item.title} data={item} />)}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '65%',
        padding: 15
    },
});
