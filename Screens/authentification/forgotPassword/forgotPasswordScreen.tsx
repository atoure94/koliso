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
    View,
    Image,
} from 'react-native';
import { fontSize, fontWeight, spacing, useTheme } from '../../../config/theme/ThemeConfig';
import { sendForgotPasswordOtp } from '../../../services/authentication/authService';
import { ForgotPasswordScreenProps } from '../../../constants/interfaces/auth';

export function ForgotPasswordScreen({ navigation }: ForgotPasswordScreenProps) {
    const { theme } = useTheme();
    const styles = createThemedStyles(theme);

    const [phone, setPhone] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleSendOtp = async () => {
        if (!phone.trim()) {
            Alert.alert('Erreur', 'Veuillez entrer votre numéro de téléphone');
            return;
        }
        setIsLoading(true);
        try {
            // Appelle ici ton service pour envoyer l'OTP de réinitialisation
            await sendForgotPasswordOtp(phone);
            Alert.alert('Succès', 'Un code a été envoyé à votre téléphone');
            navigation.navigate('OTPVerification', { phone });
        } catch (error: any) {
            Alert.alert('Erreur', error.message);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <KeyboardAvoidingView
            style={{ flex: 1 }}
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 20}
        >
            <SafeAreaView style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.title}>Mot de passe oublié</Text>
                    <Text style={styles.subtitle}>
                        Entrez votre numéro de téléphone pour recevoir un code de réinitialisation.
                    </Text>
                </View>
                <View style={{ alignItems: 'center', marginBottom: 24 }}>
                    <Image
                        source={require('../../../assets/delivery-bike.png')}
                        style={{ width: 180, height: 180, resizeMode: 'contain' }}
                    />
                </View>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.input}
                        placeholder="Numéro de téléphone"
                        placeholderTextColor={theme.text.tertiary}
                        keyboardType="phone-pad"
                        value={phone}
                        onChangeText={setPhone}
                        autoCapitalize="none"
                        autoCorrect={false}
                    />
                </View>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity
                        style={[
                            styles.sendButton,
                            isLoading && styles.sendButtonDisabled
                        ]}
                        onPress={handleSendOtp}
                        disabled={isLoading}
                        activeOpacity={0.8}
                    >
                        <Text style={styles.sendButtonText}>
                            {isLoading ? 'Envoi...' : 'Envoyer le code'}
                        </Text>
                    </TouchableOpacity>
                </View>
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
        fontWeight: "bold",
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
        fontSize: fontSize.lg,
        color: theme.text.primary,
    },
    buttonContainer: {
        paddingHorizontal: spacing.xl,
        marginBottom: spacing.md,
    },
    sendButton: {
        backgroundColor: theme.primary.main,
        borderRadius: 12,
        paddingVertical: spacing.md,
        alignItems: 'center',
        justifyContent: 'center',
    },
    sendButtonDisabled: {
        backgroundColor: theme.text.disabled,
    },
    sendButtonText: {
        color: theme.primary.contrast,
        fontSize: fontSize.lg,
        fontWeight: "600",
    },
});