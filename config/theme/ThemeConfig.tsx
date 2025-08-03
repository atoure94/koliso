// themes/themeConfig.js
import {useState} from "react";

export const lightTheme = {
    // Couleurs primaires
    primary: {
        main: '#FF6B35',
        light: '#FF8A65',
        dark: '#E55722',
        contrast: '#FFFFFF'
    },

    // Couleurs secondaires
    secondary: {
        main: '#4ECDC4',
        light: '#7EDDD6',
        dark: '#26A69A',
        contrast: '#FFFFFF'
    },

    // Couleurs d'arrière-plan
    background: {
        primary: '#FFFFFF',
        secondary: '#F8FAFC',
        tertiary: '#F1F5F9',
        gradient: {
            orange: 'linear-gradient(135deg, #FFF5F2 0%, #FFEBE6 100%)',
            teal: 'linear-gradient(135deg, #F0FFFE 0%, #E6FFFA 100%)',
            blue: 'linear-gradient(135deg, #F0F9FF 0%, #E0F2FE 100%)'
        },
        slides: ['#FFF5F2', '#F0FFFE', '#F0F9FF'],
    },

    // Couleurs de surface
    surface: {
        main: '#FFFFFF',
        elevated: '#FFFFFF',
        disabled: '#F1F5F9'
    },

    // Couleurs de texte
    text: {
        primary: '#1E293B',
        secondary: '#64748B',
        tertiary: '#666666',
        disabled: '#94A3B8',
        inverse: '#FFFFFF'
    },

    // Couleurs de bordure
    border: {
        light: '#E2E8F0',
        medium: '#CBD5E1',
        dark: '#94A3B8'
    },

    // Couleurs d'état
    status: {
        success: '#10B981',
        warning: '#F59E0B',
        error: '#EF4444',
        info: '#3B82F6'
    },

    // Ombres
    shadow: {
        light: '0 1px 3px rgba(0, 0, 0, 0.1)',
        medium: '0 4px 6px rgba(0, 0, 0, 0.1)',
        heavy: '0 10px 25px rgba(0, 0, 0, 0.15)',
        colored: '0 8px 25px rgba(255, 107, 53, 0.3)'
    },
    iconColors: ['#FF6B35', '#4ECDC4', '#45B7D1'],
    statusBar: 'dark-content'
};

export const darkTheme = {
    // Couleurs primaires
    primary: {
        main: '#FF8A65',
        light: '#FFB74D',
        dark: '#FF6B35',
        contrast: '#121212'
    },

    // Couleurs secondaires
    secondary: {
        main: '#7EDDD6',
        light: '#A7F3D0',
        dark: '#4ECDC4',
        contrast: '#121212'
    },

    // Couleurs d'arrière-plan
    background: {
        primary: '#0F172A',
        secondary: '#1E293B',
        tertiary: '#334155',
        gradient: {
            orange: 'linear-gradient(135deg, #1E293B 0%, #374151 100%)',
            teal: 'linear-gradient(135deg, #134E4A 0%, #1F2937 100%)',
            blue: 'linear-gradient(135deg, #1E3A8A 0%, #1E293B 100%)'
        },
        slides: ['#1E293B', '#134E4A', '#1E3A8A']
    },

    // Couleurs de surface
    surface: {
        main: '#1E293B',
        elevated: '#334155',
        disabled: '#475569'
    },

    // Couleurs de texte
    text: {
        primary: '#F8FAFC',
        secondary: '#CBD5E1',
        tertiary: '#94A3B8',
        disabled: '#64748B',
        inverse: '#0F172A'
    },

    // Couleurs de bordure
    border: {
        light: '#334155',
        medium: '#475569',
        dark: '#64748B'
    },

    // Couleurs d'état
    status: {
        success: '#34D399',
        warning: '#FBBF24',
        error: '#F87171',
        info: '#60A5FA'
    },

    // Ombres
    shadow: {
        light: '0 1px 3px rgba(0, 0, 0, 0.3)',
        medium: '0 4px 6px rgba(0, 0, 0, 0.4)',
        heavy: '0 10px 25px rgba(0, 0, 0, 0.5)',
        colored: '0 8px 25px rgba(255, 138, 101, 0.4)'
    },
    iconColors: ['#FF8A65', '#7EDDD6', '#60A5FA'],
    statusBar: 'light-content'
};

// Thème par défaut
export const defaultTheme = lightTheme;

// Constantes communes
export const spacing = {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
    xxl: 48
};

export const borderRadius = {
    sm: 8,
    md: 12,
    lg: 16,
    xl: 20,
    round: 9999
};

export const fontSize = {
    xs: 12,
    sm: 14,
    base: 16,
    lg: 18,
    xl: 20,
    '2xl': 24,
    '3xl': 30,
    '4xl': 36
};

export const fontWeight = {
    normal: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
    extrabold: '800'
};

// Utilitaires pour React Native
export const createStyles = (theme: any) => ({
    container: {
        flex: 1,
        backgroundColor: theme.background.primary
    },

    card: {
        backgroundColor: theme.surface.main,
        borderRadius: borderRadius.lg,
        padding: spacing.lg,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 4
    },

    button: {
        backgroundColor: theme.primary.main,
        paddingVertical: spacing.md,
        paddingHorizontal: spacing.lg,
        borderRadius: borderRadius.lg,
        alignItems: 'center',
        justifyContent: 'center'
    },

    buttonText: {
        color: theme.primary.contrast,
        fontSize: fontSize.lg,
        fontWeight: fontWeight.semibold
    },

    title: {
        fontSize: fontSize['3xl'],
        fontWeight: fontWeight.bold,
        color: theme.text.primary,
        marginBottom: spacing.md
    },

    subtitle: {
        fontSize: fontSize.lg,
        color: theme.text.secondary,
        lineHeight: fontSize.lg * 1.5
    },

    iconColors: ['#FF8A65', '#7EDDD6', '#60A5FA'],
    statusBar: 'light-content'
});

// Hook pour React (web)
export const useTheme = () => {
    const [isDark, setIsDark] = useState(false);

    const toggleTheme = () => setIsDark(!isDark);

    const theme = isDark ? darkTheme : lightTheme;

    return { theme, isDark, toggleTheme };
};