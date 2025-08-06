import type { StackNavigationProp } from '@react-navigation/stack';

type ForgotPasswordScreenNavigationProp = StackNavigationProp<any, any>;

type OtpVerificationScreenProps = {
    route: {
        params?: {
            phone?: string;
        };
    };
    navigation: any;
};

type AuthStackParamList = {
    Registration: undefined;
    Login: undefined;
    ForgotPassword: undefined;
    OTPVerification: { phone: string };
    Home: undefined;
};

type AuthLoadingProps = {
    navigation: StackNavigationProp<any>;
};

interface ForgotPasswordScreenProps {
    navigation: ForgotPasswordScreenNavigationProp;
}


export {
    ForgotPasswordScreenProps,
    type ForgotPasswordScreenNavigationProp, OtpVerificationScreenProps, AuthStackParamList, AuthLoadingProps
}
