// themes/themeConfig.js
import {useState} from "react";

export const lightTheme = {
    // Couleurs primaires - Orange vibrant mais élégant
    primary: {
        main: '#FF6B35',
        light: '#FF8A65',
        dark: '#E55722',
        contrast: '#FFFFFF'
    },

    // Couleurs secondaires - Teal sophistiqué
    secondary: {
        main: '#00B4A6',
        light: '#4ECDC4',
        dark: '#00695C',
        contrast: '#FFFFFF'
    },

    // Couleur d'accent - Bleu moderne
    accent: {
        main: '#667EEA',
        light: '#8B9CF9',
        dark: '#4C63D2',
        contrast: '#FFFFFF'
    },

    // Couleurs d'arrière-plan
    background: {
        primary: '#FFFFFF',
        secondary: '#FAFBFC',
        tertiary: '#F4F6F8',
        card: '#FFFFFF',
        gradient: {
            primary: 'linear-gradient(135deg, #FF6B35 0%, #F093FB 100%)',
            secondary: 'linear-gradient(135deg, #00B4A6 0%, #4ECDC4 100%)',
            accent: 'linear-gradient(135deg, #667EEA 0%, #764BA2 100%)',
            neutral: 'linear-gradient(135deg, #F7FAFC 0%, #EDF2F7 100%)'
        },
        slides: ['#FFF8F6', '#F0FDFC', '#F7FAFF']
    },

    // Couleurs de surface avec plus de nuances
    surface: {
        main: '#FFFFFF',
        elevated: '#FFFFFF',
        paper: '#FAFBFC',
        disabled: '#F4F6F8',
        overlay: 'rgba(0, 0, 0, 0.05)'
    },

    // Système de texte hiérarchique
    text: {
        primary: '#1A202C',
        secondary: '#4A5568',
        tertiary: '#718096',
        quaternary: '#A0AEC0',
        disabled: '#CBD5E0',
        inverse: '#FFFFFF',
        link: '#667EEA',
        success: '#38A169',
        warning: '#D69E2E',
        error: '#E53E3E'
    },

    // Bordures cohérentes
    border: {
        light: '#E2E8F0',
        medium: '#CBD5E0',
        dark: '#A0AEC0',
        focus: '#667EEA',
        error: '#FC8181'
    },

    // États enrichis
    status: {
        success: {
            main: '#38A169',
            light: '#9AE6B4',
            dark: '#2F855A',
            background: '#F0FFF4'
        },
        warning: {
            main: '#D69E2E',
            light: '#F6E05E',
            dark: '#B7791F',
            background: '#FFFBEB'
        },
        error: {
            main: '#E53E3E',
            light: '#FC8181',
            dark: '#C53030',
            background: '#FED7D7'
        },
        info: {
            main: '#667EEA',
            light: '#A3BFFA',
            dark: '#5A67D8',
            background: '#EBF4FF'
        }
    },

    // Système d'ombres raffiné
    shadow: {
        xs: '0 1px 2px rgba(0, 0, 0, 0.05)',
        sm: '0 2px 4px rgba(0, 0, 0, 0.08)',
        md: '0 4px 8px rgba(0, 0, 0, 0.12)',
        lg: '0 8px 16px rgba(0, 0, 0, 0.15)',
        xl: '0 12px 24px rgba(0, 0, 0, 0.18)',
        primary: '0 8px 25px rgba(255, 107, 53, 0.25)',
        secondary: '0 8px 25px rgba(0, 180, 166, 0.25)',
        accent: '0 8px 25px rgba(102, 126, 234, 0.25)'
    },

    // Couleurs d'icônes harmonisées
    iconColors: ['#FF6B35', '#00B4A6', '#667EEA', '#38A169', '#D69E2E'],
    statusBar: 'dark-content'
};

export const darkTheme = {
    // Couleurs primaires - Orange plus doux pour le dark
    primary: {
        main: '#FF8A65',
        light: '#FFAB91',
        dark: '#FF6B35',
        contrast: '#0D1117'
    },

    // Couleurs secondaires - Teal lumineux
    secondary: {
        main: '#4ECDC4',
        light: '#7EDDD6',
        dark: '#00B4A6',
        contrast: '#0D1117'
    },

    // Couleur d'accent - Bleu violet
    accent: {
        main: '#8B9CF9',
        light: '#A3BFFA',
        dark: '#667EEA',
        contrast: '#0D1117'
    },

    // Arrière-plans sombres élégants
    background: {
        primary: '#0D1117',
        secondary: '#161B22',
        tertiary: '#21262D',
        card: '#161B22',
        gradient: {
            primary: 'linear-gradient(135deg, #FF8A65 0%, #FF6B35 100%)',
            secondary: 'linear-gradient(135deg, #4ECDC4 0%, #00B4A6 100%)',
            accent: 'linear-gradient(135deg, #8B9CF9 0%, #667EEA 100%)',
            neutral: 'linear-gradient(135deg, #161B22 0%, #21262D 100%)'
        },
        slides: ['#1C1F26', '#1A2332', '#1F1B2E']
    },

    // Surfaces avec élévation
    surface: {
        main: '#161B22',
        elevated: '#21262D',
        paper: '#30363D',
        disabled: '#484F58',
        overlay: 'rgba(255, 255, 255, 0.05)'
    },

    // Texte optimisé pour la lisibilité
    text: {
        primary: '#F0F6FC',
        secondary: '#C9D1D9',
        tertiary: '#8B949E',
        quaternary: '#6E7681',
        disabled: '#484F58',
        inverse: '#0D1117',
        link: '#8B9CF9',
        success: '#56D364',
        warning: '#F0B90B',
        error: '#FF7B72'
    },

    // Bordures subtiles
    border: {
        light: '#30363D',
        medium: '#484F58',
        dark: '#6E7681',
        focus: '#8B9CF9',
        error: '#FF7B72'
    },

    // États pour mode sombre
    status: {
        success: {
            main: '#56D364',
            light: '#7DD87A',
            dark: '#3FB950',
            background: '#0D2818'
        },
        warning: {
            main: '#F0B90B',
            light: '#F2CC60',
            dark: '#D29922',
            background: '#2B1B00'
        },
        error: {
            main: '#FF7B72',
            light: '#FF9492',
            dark: '#FF6058',
            background: '#2C1617'
        },
        info: {
            main: '#8B9CF9',
            light: '#A3BFFA',
            dark: '#6366F1',
            background: '#161B30'
        }
    },

    // Ombres pour mode sombre
    shadow: {
        xs: '0 1px 2px rgba(0, 0, 0, 0.3)',
        sm: '0 2px 4px rgba(0, 0, 0, 0.4)',
        md: '0 4px 8px rgba(0, 0, 0, 0.5)',
        lg: '0 8px 16px rgba(0, 0, 0, 0.6)',
        xl: '0 12px 24px rgba(0, 0, 0, 0.7)',
        primary: '0 8px 25px rgba(255, 138, 101, 0.4)',
        secondary: '0 8px 25px rgba(78, 205, 196, 0.4)',
        accent: '0 8px 25px rgba(139, 156, 249, 0.4)'
    },

    // Icônes pour mode sombre
    iconColors: ['#FF8A65', '#4ECDC4', '#8B9CF9', '#56D364', '#F0B90B'],
    statusBar: 'light-content'
};

// Thème par défaut
export const defaultTheme = lightTheme;

// Constantes de design system
export const spacing = {
    ls: '5px',
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
    xxl: 48,
    xxxl: 64
};

export const borderRadius = {
    xs: 4,
    sm: 8,
    md: 12,
    lg: 16,
    xl: 20,
    xxl: 24,
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
    '4xl': 36,
    '5xl': 48
};

export const fontWeight = {
    light: '300',
    normal: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
    extrabold: '800',
    black: '900'
};

// Utilitaires pour React Native améliorés
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
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 4,
        borderWidth: 1,
        borderColor: theme.border.light
    },

    cardElevated: {
        backgroundColor: theme.surface.elevated,
        borderRadius: borderRadius.xl,
        padding: spacing.xl,
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 4},
        shadowOpacity: 0.15,
        shadowRadius: 12,
        elevation: 6
    },

    button: {
        backgroundColor: theme.primary.main,
        paddingVertical: spacing.md,
        paddingHorizontal: spacing.lg,
        borderRadius: borderRadius.lg,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: theme.primary.main,
        shadowOffset: {width: 0, height: 4},
        shadowOpacity: 0.3,
        shadowRadius: 8,
        elevation: 4
    },

    buttonSecondary: {
        backgroundColor: theme.secondary.main,
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
        fontSize: fontSize['4xl'],
        fontWeight: fontWeight.bold,
        color: theme.text.primary,
        marginBottom: spacing.md,
        lineHeight: fontSize['4xl'] * 1.2
    },

    subtitle: {
        fontSize: fontSize.xl,
        fontWeight: fontWeight.medium,
        color: theme.text.secondary,
        lineHeight: fontSize.xl * 1.4
    },

    body: {
        fontSize: fontSize.base,
        color: theme.text.primary,
        lineHeight: fontSize.base * 1.5
    },

    caption: {
        fontSize: fontSize.sm,
        color: theme.text.tertiary,
        lineHeight: fontSize.sm * 1.4
    }
});

// Hook pour React (web) amélioré
export const useTheme = () => {
    const [isDark, setIsDark] = useState(false);

    const toggleTheme = () => setIsDark(!isDark);

    const theme = isDark ? darkTheme : lightTheme;

    return {theme, isDark, toggleTheme};
};