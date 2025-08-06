import React, { useEffect, useState } from "react";
import {SafeAreaView, StyleSheet, Text} from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import {User} from "../../constants/interfaces/user"; // Assure-toi que le chemin est correct


export default function HomeScreen() {
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        const fetchUser = async () => {
            const userData = await AsyncStorage.getItem('user');
            setUser(JSON.parse(userData || '{}'));
        };
        fetchUser();
    }, []);

    return (
        <SafeAreaView style={styles.conatiner}>
            <Text style={styles.text}>
                Bienvenu sur KOLISO Mr/Mme {user ? `${user.firstName} ${user.lastName}` : ""}
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