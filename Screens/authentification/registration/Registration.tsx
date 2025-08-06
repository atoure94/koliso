import React, {useState} from 'react';
import {
    Alert,
    KeyboardAvoidingView,
    Platform,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from 'react-native';
import {borderRadius, fontSize, fontWeight, spacing, useTheme} from "../../../config/theme/ThemeConfig";
import {useNavigation} from "@react-navigation/native";


export function RegistrationScreen() {
    const {theme, isDark, toggleTheme} = useTheme();
    const styles = createThemedStyles(theme);

    const navigation = useNavigation();

    const [name, setName] = useState('');
    const [firstName, setFirstName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleRegistration = async () => {
        if (!phoneNumber.trim()) {
            Alert.alert('Erreur', 'Veuillez entrer votre numéro de téléphone');
            return;
        }
        if (!password.trim()) {
            Alert.alert('Erreur', 'Veuillez entrer votre mot de passe');
            return;
        }
        if (password !== confirmPassword) {
            Alert.alert('Mots de passe differents')
        }

        setIsLoading(true);

        // Simulation d'une requête
        setTimeout(() => {
            setIsLoading(false);
            console.log('Registration attempt:', {firstName, name, phoneNumber, password});
            // Alert.alert('Enregistrement', 'Tentative...');
            navigation.navigate('Home');
        }, 1000);
    };

    return (
        <KeyboardAvoidingView
            style={{flex: 1}}
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 20} // ajuste si besoin
        >
            <SafeAreaView style={styles.container}>
                {/* Header avec gradient subtil */}
                <ScrollView
                    contentContainerStyle={{flexGrow: 1}}
                    keyboardShouldPersistTaps="handled"
                    showsVerticalScrollIndicator={false}
                >
                    <View style={styles.header}>
                        <View style={styles.headerGradient}>
                            <Text style={styles.title}>Bienvenue</Text>
                            <Text style={styles.subtitle}>Créer un compte</Text>
                        </View>

                        {/* Toggle theme button */}
                        <TouchableOpacity
                            style={styles.themeToggle}
                            onPress={toggleTheme}
                            activeOpacity={0.7}
                        >
                            <Text style={styles.themeToggleText}>
                                {isDark ? '☀️' : '🌙'}
                            </Text>
                        </TouchableOpacity>
                    </View>

                    {/* Formulaire dans une carte */}

                    <View style={styles.inputContainer}>
                        <View style={styles.inputWrapper}>
                            <Text style={styles.inputLabel}>Prénom</Text>
                            <TextInput
                                style={[
                                    styles.input,
                                    firstName && styles.inputFilled
                                ]}
                                placeholder="Entrez votre prénom"
                                placeholderTextColor={theme.text.tertiary}
                                value={firstName}
                                onChangeText={setFirstName}
                                autoCorrect={false}
                            />
                        </View>

                        <View style={styles.inputWrapper}>
                            <Text style={styles.inputLabel}>Nom</Text>
                            <TextInput
                                style={[
                                    styles.input,
                                    name && styles.inputFilled
                                ]}
                                placeholder="Entrez votre nom"
                                placeholderTextColor={theme.text.tertiary}
                                value={name}
                                onChangeText={setName}
                                autoCorrect={false}
                            />
                        </View>
                        <View style={styles.inputWrapper}>
                            <Text style={styles.inputLabel}>Numéro de téléphone</Text>
                            <TextInput
                                style={[
                                    styles.input,
                                    phoneNumber && styles.inputFilled
                                ]}
                                placeholder="Entrez votre numéro"
                                placeholderTextColor={theme.text.tertiary}
                                keyboardType="phone-pad"
                                value={phoneNumber}
                                onChangeText={setPhoneNumber}
                                autoCapitalize="none"
                                autoCorrect={false}
                            />
                        </View>

                        <View style={styles.inputWrapper}>
                            <Text style={styles.inputLabel}>Mot de passe</Text>
                            <TextInput
                                style={[
                                    styles.input,
                                    password && styles.inputFilled
                                ]}
                                placeholder="Entrez votre mot de passe"
                                placeholderTextColor={theme.text.tertiary}
                                secureTextEntry={true}
                                value={password}
                                onChangeText={setPassword}
                                autoCapitalize="none"
                                autoCorrect={false}
                            />
                        </View>
                        <View style={styles.inputWrapper}>
                            <Text style={styles.inputLabel}>Confirmer le mot de passe</Text>
                            <TextInput
                                style={[
                                    styles.input,
                                    confirmPassword && styles.inputFilled
                                ]}
                                placeholder="Entrez votre mot de passe"
                                placeholderTextColor={theme.text.tertiary}
                                secureTextEntry={true}
                                value={confirmPassword}
                                onChangeText={setConfirmPassword}
                                autoCapitalize="none"
                                autoCorrect={false}
                            />
                        </View>
                    </View>

                    {/* Bouton de connexion */}
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity
                            style={[
                                styles.loginButton,
                                isLoading && styles.loginButtonDisabled
                            ]}
                            onPress={handleRegistration}
                            activeOpacity={0.8}
                            disabled={isLoading}
                        >
                            <Text style={styles.loginButtonText}>
                                {isLoading ? 'Inscription en cours...' : 'Creez le compte'}
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.gotoLoginButton} onPress={() => navigation.navigate('Login')}>
                            <Text style={styles.gotoLoginText}>
                                Vous avez un compte ?

                                <Text style={styles.linkText}> Connectez-vous</Text>

                            </Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </KeyboardAvoidingView>
    );
}

const createThemedStyles = (theme: any) => StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.background.primary,
    },

    header: {
        paddingHorizontal: spacing.lg,
        paddingTop: spacing.xl,
        paddingBottom: spacing.lg,
        position: 'relative',
    },

    headerGradient: {
        alignItems: 'center',
        marginBottom: spacing.md,
    },

    title: {
        fontSize: fontSize['4xl'],
        fontWeight: fontWeight.bold,
        color: theme.text.primary,
        marginBottom: spacing.xs,
        textAlign: 'center',
    },

    subtitle: {
        fontSize: fontSize.lg,
        fontWeight: fontWeight.normal,
        color: theme.text.secondary,
        textAlign: 'center',
        lineHeight: fontSize.lg * 1.4,
    },

    themeToggle: {
        position: 'absolute',
        top: spacing.lg,
        right: spacing.lg,
        width: 44,
        height: 44,
        borderRadius: borderRadius.round,
        backgroundColor: theme.surface.elevated,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },

    themeToggleText: {
        fontSize: fontSize.lg,
    },

    inputContainer: {
        justifyContent: "center",
        marginBottom: spacing.xs,
        padding: spacing.lg,
    },

    inputWrapper: {
        marginBottom: spacing.lg,
    },

    inputLabel: {
        fontSize: fontSize.sm,
        fontWeight: fontWeight.medium,
        color: theme.text.secondary,
        marginBottom: spacing.xs,
        marginLeft: spacing.xs,
    },

    input: {
        backgroundColor: theme.background.secondary,
        borderRadius: borderRadius.lg,
        padding: spacing.sm,
        fontSize: fontSize.base,
        color: theme.text.primary,
        borderWidth: 2,
        borderColor: theme.border.light,
        minHeight: 56,
    },

    inputFilled: {
        borderColor: theme.primary.main,
        backgroundColor: theme.surface.main,
    },

    optionsContainer: {
        alignItems: 'flex-end',
        marginBottom: spacing.xl,
    },

    forgotPassword: {
        paddingVertical: spacing.sm,
    },

    gotoLoginButton: {
        alignItems: 'center'
    },

    gotoLoginText: {
        fontSize: fontSize.sm,
        color: theme.text,
        fontWeight: fontWeight.medium,
    },

    buttonContainer: {
        gap: spacing.md,
        paddingHorizontal: spacing.lg
    },

    loginButton: {
        backgroundColor: theme.primary.main,
        borderRadius: borderRadius.lg,
        paddingVertical: spacing.xs,
        paddingHorizontal: spacing.xl,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: theme.primary.main,
        shadowOffset: {width: 0, height: 4},
        shadowOpacity: 0.3,
        shadowRadius: 8,
        elevation: 4,
        minHeight: 56,
    },

    loginButtonDisabled: {
        backgroundColor: theme.text.disabled,
        shadowOpacity: 0,
        elevation: 0,
    },

    loginButtonText: {
        color: theme.primary.contrast,
        fontSize: fontSize.lg,
        fontWeight: fontWeight.semibold,
    },

    secondaryButton: {
        backgroundColor: 'transparent',
        borderWidth: 2,
        borderColor: theme.border.medium,
        borderRadius: borderRadius.lg,
        paddingVertical: spacing.xs,
        paddingHorizontal: spacing.xl,
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: 56,
    },

    secondaryButtonText: {
        color: theme.text.secondary,
        fontSize: fontSize.base,
        fontWeight: fontWeight.medium,
    },

    footer: {
        paddingHorizontal: spacing.xl,
        paddingVertical: spacing.lg,
        marginTop: 'auto',
    },

    footerText: {
        fontSize: fontSize.xs,
        color: theme.text.tertiary,
        textAlign: 'center',
        lineHeight: fontSize.xs * 1.5,
    },

    linkText: {
        color: theme.text.link,
        fontWeight: fontWeight.medium,
    },
});