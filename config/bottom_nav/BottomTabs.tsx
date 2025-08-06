import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../../Screens/Home/HomeScreen';
import SettingsScreen from '../../Screens/settings/SettingsScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useTheme } from '../../config/theme/ThemeConfig';

const Tab = createBottomTabNavigator();

export default function BottomTabs() {
    const { theme, isDark } = useTheme();

    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarShowLabel: true,
                tabBarActiveTintColor: theme.primary.main,
                tabBarInactiveTintColor: isDark ? '#888' : '#666',
                tabBarStyle: {
                    backgroundColor: isDark ? '#1a1a1a' : '#fff',
                    borderTopWidth: 0.5,
                    borderTopColor: isDark ? '#222' : '#eee',
                    height: 70,
                },
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName = 'ellipse-outline';
                    if (route.name === 'Accueil') {
                        iconName = focused ? 'home' : 'home-outline';
                    } else if (route.name === 'Paramètres') {
                        iconName = focused ? 'settings' : 'settings-outline';
                    }
                    return <Ionicons name={iconName} size={24} color={color} />;
                },
            })}
        >
            <Tab.Screen name="Accueil" component={HomeScreen} />
            <Tab.Screen name="Paramètres" component={SettingsScreen} />
        </Tab.Navigator>
    );
}