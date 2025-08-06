import React, {useRef, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {Animated, Dimensions, ScrollView, StatusBar, Text, TouchableOpacity, View} from 'react-native';
import {ChevronRight, Clock, MapPin, Moon, Sun, Truck} from 'lucide-react-native';
import {darkTheme, lightTheme} from "../../config/theme/ThemeConfig";
import { RootStackParamList } from '../../App';
import {StackNavigationProp} from '@react-navigation/stack';

const {width, height} = Dimensions.get('window');

const OnBoardingScreen = () => {
     const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isDark, setIsDark] = useState(false);
    const scrollViewRef = useRef<ScrollView>(null);
    const fadeAnim = useRef(new Animated.Value(1)).current;

    const theme = isDark ? darkTheme : lightTheme;

    const slides = [
        {
            id: 1,
            title: "Livraison Rapide",
            subtitle: "Recevez vos commandes en moins de 30 minutes",
            icon: <Truck size={80} color={theme.iconColors[0]}/>,
            bgColor: theme.background.slides[0]
        },
        {
            id: 2,
            title: "Suivi en Temps Réel",
            subtitle: "Suivez votre commande de la préparation à la livraison",
            icon: <MapPin size={80} color={theme.iconColors[1]}/>,
            bgColor: theme.background.slides[1]
        },
        {
            id: 3,
            title: "Disponible 24/7",
            subtitle: "Commandez à tout moment, nous sommes toujours là",
            icon: <Clock size={80} color={theme.iconColors[2]}/>,
            bgColor: theme.background.slides[2]
        }
    ];

    const nextSlide = () => {
        Animated.timing(fadeAnim, {
            toValue: 0,
            duration: 150,
            useNativeDriver: true,
        }).start(() => {
            if (currentSlide < slides.length - 1) {
                setCurrentSlide(currentSlide + 1);
                scrollViewRef.current?.scrollTo({
                    x: (currentSlide + 1) * width,
                    animated: true,
                });
            }

            Animated.timing(fadeAnim, {
                toValue: 1,
                duration: 150,
                useNativeDriver: true,
            }).start();
        });
    };

    const prevSlide = () => {
        if (currentSlide > 0) {
            Animated.timing(fadeAnim, {
                toValue: 0,
                duration: 150,
                useNativeDriver: true,
            }).start(() => {
                setCurrentSlide(currentSlide - 1);
                scrollViewRef.current?.scrollTo({
                    x: (currentSlide - 1) * width,
                    animated: true,
                });

                Animated.timing(fadeAnim, {
                    toValue: 1,
                    duration: 150,
                    useNativeDriver: true,
                }).start();
            });
        }
    };

    const skip = () => {
        setCurrentSlide(slides.length - 1);
        scrollViewRef.current?.scrollTo({
            x: (slides.length - 1) * width,
            animated: true,
        });
    };

    const toggleTheme = () => {
        setIsDark(!isDark);
    };

    return (
        <View style={{flex: 1, backgroundColor: slides[currentSlide].bgColor}}>
            <StatusBar barStyle="default" backgroundColor={slides[currentSlide].bgColor}/>

            {/* Header */}
            <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingTop: 60,
                paddingHorizontal: 20,
                paddingBottom: 20
            }}>
                <TouchableOpacity onPress={prevSlide} disabled={currentSlide === 0}>
                    <Text style={{
                        fontSize: 16,
                        color: currentSlide === 0 ? 'transparent' : theme.text.primary,
                        fontWeight: '600'
                    }}>
                        Retour
                    </Text>
                </TouchableOpacity>

                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    {slides.map((_, index) => (
                        <Animated.View
                            key={index}
                            style={{
                                width: index === currentSlide ? 24 : 8,
                                height: 8,
                                borderRadius: 4,
                                backgroundColor: index === currentSlide ? theme.primary.main : theme.border.medium,
                                marginHorizontal: 4,
                            }}
                        />
                    ))}
                </View>

                <TouchableOpacity onPress={skip}>
                    <Text style={{
                        fontSize: 16,
                        color: currentSlide === slides.length - 1 ? 'transparent' : theme.text.primary,
                        fontWeight: '600'
                    }}>
                        Passer
                    </Text>
                </TouchableOpacity>
            </View>

            {/* Theme Toggle Button */}
            <View style={{
                position: 'absolute',
                top: 120,
                right: 20,
                zIndex: 10
            }}>
                <TouchableOpacity
                    onPress={toggleTheme}
                    style={{
                        width: 50,
                        height: 50,
                        borderRadius: 25,
                        backgroundColor: theme.surface.elevated,
                        alignItems: 'center',
                        justifyContent: 'center',
                        shadowColor: '#000',
                        shadowOffset: {width: 0, height: 4},
                        shadowOpacity: isDark ? 0.3 : 0.15,
                        shadowRadius: 8,
                        elevation: 6
                    }}
                >
                    {isDark ? (
                        <Sun size={24} color="#FBBF24"/>
                    ) : (
                        <Moon size={24} color="#64748B"/>
                    )}
                </TouchableOpacity>
            </View>

            {/* Content */}
            <ScrollView
                ref={scrollViewRef}
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                scrollEnabled={false}
                style={{flex: 1}}
            >
                {slides.map((slide, index) => (
                    <Animated.View
                        key={slide.id}
                        style={{
                            width,
                            flex: 1,
                            alignItems: 'center',
                            justifyContent: 'center',
                            paddingHorizontal: 40,
                            opacity: fadeAnim
                        }}
                    >
                        {/* Icon Container */}
                        <View style={{
                            width: 160,
                            height: 160,
                            borderRadius: 80,
                            backgroundColor: theme.surface.main,
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginBottom: 60,
                            shadowColor: '#000',
                            shadowOffset: {width: 0, height: 10},
                            shadowOpacity: isDark ? 0.3 : 0.1,
                            shadowRadius: 20,
                            elevation: 10
                        }}>
                            {slide.icon}
                        </View>

                        {/* Title */}
                        <Text style={{
                            fontSize: 32,
                            fontWeight: 'bold',
                            color: theme.text.primary,
                            textAlign: 'center',
                            marginBottom: 20,
                            lineHeight: 40
                        }}>
                            {slide.title}
                        </Text>

                        {/* Subtitle */}
                        <Text style={{
                            fontSize: 18,
                            color: theme.text.secondary,
                            textAlign: 'center',
                            lineHeight: 28,
                            paddingHorizontal: 20
                        }}>
                            {slide.subtitle}
                        </Text>
                    </Animated.View>
                ))}
            </ScrollView>

            {/* Bottom Actions */}
            <View style={{
                paddingHorizontal: 20,
                paddingBottom: 50,
                paddingTop: 20
            }}>
                {currentSlide === slides.length - 1 ? (
                    <View style={{gap: 15}}>
                        <TouchableOpacity
                            onPress={() => navigation.navigate('Registration')}
                            style={{
                                backgroundColor: theme.primary.main,
                                paddingVertical: 18,
                                borderRadius: 16,
                                alignItems: 'center',
                                shadowColor: theme.primary.main,
                                shadowOffset: {width: 0, height: 8},
                                shadowOpacity: 0.3,
                                shadowRadius: 16,
                                elevation: 8
                            }}
                        >
                            <Text style={{
                                color: theme.primary.contrast,
                                fontSize: 18,
                                fontWeight: 'bold'
                            }}>
                                Commencer
                            </Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={() => navigation.navigate('Login')}
                            style={{
                                paddingVertical: 18,
                                borderRadius: 16,
                                alignItems: 'center',
                                borderWidth: 2,
                                borderColor: theme.border.light,
                                backgroundColor: 'transparent'
                            }}
                        >
                            <Text style={{
                                color: theme.text.primary,
                                fontSize: 18,
                                fontWeight: '600'
                            }}>
                                J'ai déjà un compte
                            </Text>
                        </TouchableOpacity>
                    </View>
                ) : (
                    <TouchableOpacity
                        onPress={nextSlide}
                        style={{
                            backgroundColor: theme.primary.main,
                            paddingVertical: 18,
                            paddingHorizontal: 32,
                            borderRadius: 16,
                            alignItems: 'center',
                            flexDirection: 'row',
                            justifyContent: 'center',
                            shadowColor: theme.primary.main,
                            shadowOffset: {width: 0, height: 8},
                            shadowOpacity: 0.3,
                            shadowRadius: 16,
                            elevation: 8
                        }}
                    >
                        <Text style={{
                            color: theme.primary.contrast,
                            fontSize: 18,
                            fontWeight: 'bold',
                            marginRight: 8
                        }}>
                            Suivant
                        </Text>
                        <ChevronRight size={20} color={theme.primary.contrast}/>
                    </TouchableOpacity>
                )}
            </View>
        </View>
    );
};

export default OnBoardingScreen;