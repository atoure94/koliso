import React, {useEffect, useRef, useState} from 'react';
import {Animated, Dimensions, Image, StyleSheet, View} from 'react-native';
import {useNavigation} from "@react-navigation/native";

const SplashScreen = () => {
    const [animationPhase, setAnimationPhase] = useState('idle');
    const navigation = useNavigation();

    // Références pour les animations
    const translateX = useRef(new Animated.Value(0)).current;
    const scale = useRef(new Animated.Value(1)).current;
    const opacity = useRef(new Animated.Value(1)).current;

    const screenWidth = Dimensions.get('window').width;

    useEffect(() => {
        const startAnimation = () => {
            // Phase 1: Tremblement de démarrage
            const shakingAnimation = Animated.sequence([
                Animated.timing(translateX, {
                    toValue: 10,
                    duration: 100,
                    useNativeDriver: true,
                }),
                Animated.timing(translateX, {
                    toValue: -10,
                    duration: 100,
                    useNativeDriver: true,
                }),
                Animated.timing(translateX, {
                    toValue: 5,
                    duration: 100,
                    useNativeDriver: true,
                }),
                Animated.timing(translateX, {
                    toValue: 0,
                    duration: 100,
                    useNativeDriver: true,
                }),
            ]);

            // Phase 2: Mouvement vers la gauche
            const movingAnimation = Animated.parallel([
                Animated.timing(translateX, {
                    toValue: screenWidth + 200, // Sort complètement de l'écran
                    duration: 2000,
                    useNativeDriver: true,
                }),
                // Léger zoom pendant le mouvement
                Animated.sequence([
                    Animated.timing(scale, {
                        toValue: 1.1,
                        duration: 300,
                        useNativeDriver: true,
                    }),
                    Animated.timing(scale, {
                        toValue: 0.8,
                        duration: 1700,
                        useNativeDriver: true,
                    }),
                ]),
                // Fade out à la fin
                Animated.timing(opacity, {
                    toValue: 0,
                    duration: 500,
                    delay: 1500,
                    useNativeDriver: true,
                }),
            ]);

            // Séquence complète
            const fullSequence = Animated.sequence([
                Animated.delay(500), // Attendre 0.5s
                shakingAnimation,    // Tremblement (0.4s)
                Animated.delay(500), // Pause (0.5s)
                movingAnimation,     // Mouvement (2s)
            ]);

            // Démarrer l'animation
            fullSequence.start(() => navigation.navigate('OnBoarding'));

            // Changer les phases pour le texte
            setTimeout(() => setAnimationPhase('starting'), 500);
            setTimeout(() => setAnimationPhase('moving'), 1500);
        };

        startAnimation();
    }, [translateX, scale, opacity, screenWidth]);

    return (
        <View style={styles.container}>
            {/* Image animée */}
            <Animated.View
                style={[
                    styles.imageContainer,
                    {
                        transform: [
                            {translateX},
                            {scale},
                        ],
                        opacity,
                    },
                ]}
            >
                <Image
                    source={require('../../assets/delivery-bike.png')}
                    style={styles.deliveryImage}
                    resizeMode="contain"
                />
            </Animated.View>

            {/* Texte de chargement (optionnel) */}
            <View style={styles.textContainer}>
                <Animated.Text style={[styles.loadingText, {opacity}]}>
                    {animationPhase === 'idle' && "Chargement..."}
                    {animationPhase === 'starting' && "Démarrage du moteur..."}
                    {animationPhase === 'moving' && "Livraison en cours !"}
                </Animated.Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f0f8ff',
        justifyContent: 'center',
        alignItems: 'center',
    },
    imageContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    deliveryImage: {
        width: 200,
        height: 200,
    },
    textContainer: {
        position: 'absolute',
        bottom: 80,
        alignSelf: 'center',
    },
    loadingText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
        textAlign: 'center',
    },
});

export default SplashScreen;