import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    ScrollView,
    Switch,
    Image,
    SafeAreaView,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useTheme } from '../../config/theme/ThemeConfig';
import { logout } from '../../services/authentication/authService';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../App';
import { useNavigation } from '@react-navigation/native';

export default function SettingsScreen() {
    const { theme, isDark, toggleTheme } = useTheme();
    const styles = createSettingsStyles(theme);
    
    const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
    const handleLogout = async () => {
        await logout();
        navigation.reset({
            index: 0,
            routes: [{ name: 'Login' }],
        });
    };

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView >
                <View style={styles.header}>
                    <Image
                        source={require('../../assets/delivery-bike.png')}
                        style={styles.avatar}
                />
                <Text style={styles.title}>Paramètres</Text>
            </View>

            <View style={styles.section}>
                <SettingsItem
                    icon="person-outline"
                    label="Profil"
                    onPress={() => {}}
                />
                <SettingsItem
                        icon="moon-outline"
                        label="Thème sombre"
                        rightElement={<Switch
                            value={isDark}
                            onValueChange={toggleTheme}
                            trackColor={{
                                false: theme.border.medium,
                                true: theme.primary.light,
                            }}
                            thumbColor={isDark ? theme.primary.main : theme.surface.main} />}
                        showArrow={false} onPress={function (): void {
                            throw new Error('Function not implemented.');
                        } }                />
            </View>

            <View style={styles.section}>
                <SettingsItem
                    icon="notifications-outline"
                    label="Notifications"
                    onPress={() => {}}
                />
                <SettingsItem
                    icon="language-outline"
                    label="Langue"
                    onPress={() => {}}
                />
            </View>

            <View style={styles.section}>
                <SettingsItem
                    icon="help-circle-outline"
                    label="Centre d'aide"
                    onPress={() => {}}
                />
                <SettingsItem
                    icon="document-text-outline"
                    label="Politique de confidentialité"
                    onPress={() => {}}
                />
                <SettingsItem
                    icon="information-circle-outline"
                    label="À propos"
                    onPress={() => {}}
                />
            </View>

            <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
                <Ionicons name="log-out-outline" size={22} color={theme.status.error.main} />
                <Text style={styles.logoutText}>Déconnexion</Text>
            </TouchableOpacity>
        </ScrollView>
    </SafeAreaView>
    );
}

type SettingsItemProps = {
    icon: string;
    label: string;
    onPress: () => void;
    rightElement?: React.ReactNode;
    showArrow?: boolean;
};

const SettingsItem = ({ icon, label, onPress, rightElement, showArrow = true }: SettingsItemProps) => {
    const { theme } = useTheme();
    const itemStyles = createItemStyles(theme);
    return (
        <TouchableOpacity style={itemStyles.item} onPress={onPress}>
            <View style={itemStyles.left}>
                <Ionicons name={icon} size={22} color={theme.primary.main} style={{ marginRight: 16 }} />
                <Text style={[itemStyles.label, { color: theme.text.primary }]}>{label}</Text>
            </View>
            <View style={itemStyles.right}>
                {rightElement}
                {showArrow && <Ionicons name="chevron-forward" size={20} color={theme.text.quaternary} />}
            </View>
        </TouchableOpacity>
    );
};

const createSettingsStyles = (theme: any) => StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.background.secondary,
    },
    header: {
        alignItems: 'center',
        paddingVertical: 32,
        backgroundColor: theme.background.primary,
    },
    avatar: {
        width: 80,
        height: 80,
        borderRadius: 40,
        marginBottom: 12,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: theme.text.primary,
    },
    section: {
        backgroundColor: theme.surface.main,
        borderRadius: 16,
        marginHorizontal: 16,
        marginTop: 24,
        paddingVertical: 4,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.04,
        shadowRadius: 3,
        elevation: 1,
    },
    logoutButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 40,
        marginBottom: 32,
        marginHorizontal: 16,
        paddingVertical: 14,
        backgroundColor: theme.status.error.background,
        borderRadius: 12,
    },
    logoutText: {
        color: theme.status.error.main,
        fontWeight: 'bold',
        fontSize: 16,
        marginLeft: 8,
    },
});
const createItemStyles = (theme: any) => StyleSheet.create({
    item: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 18,
        paddingHorizontal: 20,
        borderBottomWidth: 0.5,
        borderBottomColor: '#eee',
    },
    left: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    label: {
        fontSize: 16,
        color: theme.text.primary
    },
    right: {
        flexDirection: 'row',
        alignItems: 'center',
    },
});