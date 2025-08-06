import React, { useEffect } from 'react';
import { ActivityIndicator, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AuthLoadingProps } from '../../constants/interfaces/auth';



export default function AuthLoading({ navigation }: AuthLoadingProps) {
    useEffect(() => {
        const checkAuth = async () => {
            const token = await AsyncStorage.getItem('access_token');
            if (token) {
                navigation.reset({
                    index: 0,
                    routes: [{ name: 'Home' }],
                });
            } else {
                navigation.reset({
                    index: 0,
                    routes: [{ name: 'OnBoarding' }],
                });
            }
        };
        checkAuth();
    }, [navigation]);

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <ActivityIndicator size="large" />
        </View>
    );
}