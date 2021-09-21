import {StyleSheet, Animated, Text, View, TextInput} from 'react-native';
import React, {useEffect, useRef} from 'react';

const LoginScreen = () => {
    
    const fade = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        Animated.timing(fade, 
           {toValue: 1,
        duration: 10000
        } 
            ).start();
    }, [fade]);
    return(
        <Animated.View
        style={{
            opacity=fade
        }}
        >
            <Image source={require('../Images/tesla-shadow-logo.png')} />
            <TextInput placeholder="Email" />
            <TextInput placeholder="Password" />
        </Animated.View>
    )
};

export default LoginScreen;