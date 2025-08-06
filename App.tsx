import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import OnBoardingScreen from "./Screens/onBoarding/OnBoardingScreen";
import HomeScreen from "./Screens/Home/HomeScreen";
import {LoginScreen} from "./Screens/authentification/Login/LoginScreen";
import {RegistrationScreen} from "./Screens/authentification/registration/Registration";
import SplashScreen from "./config/splashScreen/SplashScreen";
import {OtpVerificationScreen} from "./Screens/authentification/otpverification/otpVerificationScreen";


export type RootStackParamList = {
    Splash: undefined;
    OnBoarding: undefined;
    Login: undefined;
    Registration: undefined;
    OTPVerification: undefined;
    Home: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Splash">
                <Stack.Screen name="Splash" component={SplashScreen} options={{headerShown: false}}/>
                <Stack.Screen name="OnBoarding" component={OnBoardingScreen} options={{headerShown: false}}/>
                <Stack.Screen name="Login" component={LoginScreen} options={{headerShown: false}}/>
                <Stack.Screen name="Registration" component={RegistrationScreen} options={{headerShown: false}}/>
                <Stack.Screen name="OTPVerification" component={OtpVerificationScreen} options={{headerShown: false}}/>
                <Stack.Screen name="Home" component={HomeScreen} options={{headerShown: false}}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}
