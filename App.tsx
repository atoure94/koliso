import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import OnBoardingScreen from "./Screens/onBoarding/OnBoardingScreen";
import HomeScreen from "./Screens/Home/HomeScreen";


export type RootStackParamList = {
    OnBoarding: undefined;
    Home: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="OnBoarding">
                <Stack.Screen name="OnBoarding" component={OnBoardingScreen} options={{headerShown: false}}/>
                <Stack.Screen name="Home" component={HomeScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}
