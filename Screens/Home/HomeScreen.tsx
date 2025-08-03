import {SafeAreaView, StyleSheet, Text} from "react-native";

export default function HomeScreen() {
    return (
        <SafeAreaView style={styles.conatiner}>
            <Text style={styles.text}>
                Bienvenu sur KOLISO
            </Text>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    conatiner: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 30,
        fontWeight: 'bold',
    }
})