import { StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function Gradient({ children }) {
    return (
        <LinearGradient
            style={styles.container}
            colors={['rgba(250, 208, 196, 1)', 'rgba(251, 194, 235, 1)']}
            start={{ x: 1, y: 0 }}
            end={{ x: 0, y: 1 }}>
            {children}
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});
