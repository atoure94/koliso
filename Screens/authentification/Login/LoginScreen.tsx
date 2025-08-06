import React, {useState} from 'react';
import {
    Alert,
    Dimensions,
    KeyboardAvoidingView,
    Platform,
    SafeAreaView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from 'react-native';
import {borderRadius, fontSize, fontWeight, spacing, useTheme} from "../../../config/theme/ThemeConfig";
import {useNavigation} from "@react-navigation/native";
import {login} from "../../../services/authentication/authService";
import {Image} from 'react-native';


const {width} = Dimensions.get('window');

export function LoginScreen() {
    const {theme, isDark, toggleTheme} = useTheme();
    const styles = createThemedStyles(theme);
    const navigation = useNavigation();

    const [phoneNumber, setPhoneNumber] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handleLogin = async () => {
    if (!phoneNumber.trim()) {
        Alert.alert('Erreur', 'Veuillez entrer votre numéro de téléphone');
        return;
    }
    if (!password.trim()) {
        Alert.alert('Erreur', 'Veuillez entrer votre mot de passe');
        return;
    }

    setIsLoading(true);

    try {
        await login(phoneNumber, password);
        Alert.alert('Succès', 'Connexion réussie');
        navigation.navigate('Home');
    } catch (error: any) {
        Alert.alert('Erreur', error.message);
    } finally {
        setIsLoading(false);
    }
};

    return (
        <KeyboardAvoidingView
            style={{flex: 1}}
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 20} // ajuste si besoin
        >
            <SafeAreaView style={styles.container}>
                {/* Header avec gradient subtil */}
            
                <View style={styles.header}>
                    <View style={styles.headerGradient}>
                        <Text style={styles.title}>Bienvenue</Text>
                        <Text style={styles.subtitle}>Connectez-vous à votre compte</Text>
                    </View>

                     <View style={{ alignItems: 'center', marginBottom: 10 }}>
        <Image
            source={require('../../../assets/delivery-bike.png')}
            style={{ width: 180, height: 180, resizeMode: 'contain' }}
        />
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
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <TextInput
                style={[
                    styles.input,
                    password && styles.inputFilled,
                    { flex: 1 }
                ]}
                placeholder="Entrez votre mot de passe"
                placeholderTextColor={theme.text.tertiary}
                secureTextEntry={!showPassword}
                value={password}
                onChangeText={setPassword}
                autoCapitalize="none"
                autoCorrect={false}
            />
            <TouchableOpacity
                onPress={() => setShowPassword(!showPassword)}
                style={{ marginLeft: 8, padding: 4 }}
            >
                <Text style={{ color: theme.text.secondary }}>
                    {showPassword ? '🙈' : '👁️'}
                </Text>
            </TouchableOpacity>
        </View>
    </View>
                </View>

                {/* Options additionnelles */}
                <View style={styles.optionsContainer}>
                    <TouchableOpacity onPress={()=> navigation.navigate('ForgotPassword')} style={styles.forgotPassword}>
                        <Text style={styles.forgotPasswordText}>
                            Mot de passe oublié ?
                        </Text>
                    </TouchableOpacity>
                </View>

                {/* Bouton de connexion */}
                <View style={styles.buttonContainer}>
                    <TouchableOpacity
                        style={[
                            styles.loginButton,
                            isLoading && styles.loginButtonDisabled
                        ]}
                        onPress={handleLogin}
                        activeOpacity={0.8}
                        disabled={isLoading}
                    >
                        <Text style={styles.loginButtonText}>
                            {isLoading ? 'Connexion...' : 'Se connecter'}
                        </Text>
                    </TouchableOpacity>

                    {/* Bouton secondaire */}
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Registration')}
                        style={styles.secondaryButton}
                        activeOpacity={0.7}
                    >
                        <Text style={styles.secondaryButtonText}>
                            Créer un compte
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
        paddingHorizontal: spacing.lg,

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
        marginBottom: spacing.sm,
        marginRight: spacing.lg,
    },

    forgotPassword: {
        paddingVertical: spacing.sm,
    },

    forgotPasswordText: {
        fontSize: fontSize.sm,
        color: theme.text.link,
        fontWeight: fontWeight.medium,
    },

    buttonContainer: {
        gap: spacing.md,
        padding: spacing.lg
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