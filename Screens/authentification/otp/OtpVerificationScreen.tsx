import React, { useState } from 'react';
import {
    Alert,
    KeyboardAvoidingView,
    Platform,
    SafeAreaView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { fontSize, fontWeight, spacing, useTheme } from '../../../config/theme/ThemeConfig';
import { Image } from 'react-native';
import { verifyOtp } from '../../../services/authentication/authService';
import { resendOtp } from '../../../services/authentication/authService';
import { OtpVerificationScreenProps } from '../../../constants/interfaces/auth';



export function OtpVerificationScreen({ route, navigation }: OtpVerificationScreenProps) {
    const { theme } = useTheme();
    const styles = createThemedStyles(theme);

    const [otp, setOtp] = useState('');
    const [isLoading, setIsLoading] = useState(false);
const phone = route.params?.phone;

    const handleVerify = async () => {
        if (otp.length < 4) {
            Alert.alert('Erreur', 'Veuillez entrer le code OTP reçu');
            return;
        }
        if (!phone) {
            Alert.alert('Erreur', 'Numéro de téléphone manquant');
            return;
        }
        setIsLoading(true);
        try {
            await verifyOtp(phone, otp);
            navigation.navigate('Home');
        } catch (error: any) {
            Alert.alert('Erreur', error.message);
        } finally {
            setIsLoading(false);
        }
    };
    const handleResendOtp = async () => {
        if (!phone) {
            Alert.alert('Erreur', 'Numéro de téléphone manquant');
            return;
        }
        try {
            await resendOtp(phone);
            Alert.alert('Succès', 'Code OTP renvoyé avec succès');
        } catch (error: any) {
            Alert.alert('Erreur', error.message);
        }
    }
    return (
        <KeyboardAvoidingView
            style={{ flex: 1 }}
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 20}
        >
            <SafeAreaView style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.title}>Vérification OTP</Text>
                    
                    <Text style={styles.subtitle}>
                        Entrez le code reçu par SMS
                    </Text>
                </View>

                <View style={{ alignItems: 'center', marginBottom: 10 }}>
                            <Image
                                source={require('../../../assets/delivery-bike.png')}
                                style={{ width: 180, height: 180, resizeMode: 'contain' }}
                            />
                        </View>
                    
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.input}
                        placeholder="Code OTP"
                        placeholderTextColor={theme.text.tertiary}
                        keyboardType="number-pad"
                        value={otp}
                        onChangeText={setOtp}
                        maxLength={6}
                        autoFocus
                    />
                </View>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity
                        style={[
                            styles.verifyButton,
                            isLoading && styles.verifyButtonDisabled
                        ]}
                        onPress={handleVerify}
                        disabled={isLoading}
                        activeOpacity={0.8}
                    >
                        <Text style={styles.verifyButtonText}>
                            {isLoading ? 'Vérification...' : 'Vérifier'}
                        </Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity 
                onPress={handleResendOtp}
                style={styles.resendContainer}>
                    <Text style={styles.resendText}>Renvoyer le code</Text>
                </TouchableOpacity>
            </SafeAreaView>
        </KeyboardAvoidingView>
    );
}

const createThemedStyles = (theme: any) => StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.background.primary,
        justifyContent: 'center',
    },
    header: {
        alignItems: 'center',
        marginBottom: spacing.xl,
    },
    title: {
        fontSize: fontSize['3xl'],
        fontWeight: 'bold',
        color: theme.text.primary,
        marginBottom: spacing.sm,
    },
    subtitle: {
        fontSize: fontSize.base,
        color: theme.text.secondary,
        textAlign: 'center',
    },
    inputContainer: {
        paddingHorizontal: spacing.xl,
        marginBottom: spacing.lg,
    },
    input: {
        backgroundColor: theme.background.secondary,
        borderRadius: 12,
        padding: spacing.md,
        fontSize: fontSize.xl,
        color: theme.text.primary,
        textAlign: 'center',
        letterSpacing: 8,
    },
    buttonContainer: {
        paddingHorizontal: spacing.xl,
        marginBottom: spacing.md,
    },
    verifyButton: {
        backgroundColor: theme.primary.main,
        borderRadius: 12,
        paddingVertical: spacing.md,
        alignItems: 'center',
        justifyContent: 'center',
    },
    verifyButtonDisabled: {
        backgroundColor: theme.text.disabled,
    },
    verifyButtonText: {
        color: theme.primary.contrast,
        fontSize: fontSize.lg,
        fontWeight: '600',
    },
    resendContainer: {
        alignItems: 'center',
        marginTop: spacing.md,
    },
    resendText: {
        color: theme.text.link,
        fontSize: fontSize.base,
        fontWeight: '500',
    },
});