import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import OnBoardingScreen from "./Screens/onBoarding/OnBoardingScreen";
import HomeScreen from "./Screens/Home/HomeScreen";
import {LoginScreen} from "./Screens/authentification/login/LoginScreen";
import {RegistrationScreen} from "./Screens/authentification/registration/Registration";
import SplashScreen from "./config/splashScreen/SplashScreen";
import {OtpVerificationScreen} from "./Screens/authentification/otp/OtpVerificationScreen";
import {ForgotPasswordScreen} from "./Screens/authentification/forgotPassword/forgotPasswordScreen";


export type RootStackParamList = {
    Splash: undefined;
    OnBoarding: undefined;
    Login: undefined;
    Registration: undefined;
    OTPVerification: undefined;
    ForgotPassword: undefined;
    ResetPassord: undefined;
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
                <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} options={{headerShown: false}}/>

                <Stack.Screen name="Home" component={HomeScreen} options={{headerShown: false}}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}
