import {StyleSheet, Animated, Text, View, TextInput, Image} from 'react-native';
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
            opacity: fade
        }}
        >
            <Image source={require('../Images/tesla-shadow-logo.png')} style={{width: 250, height: 250, alignSelf: 'center', marginTop: 70}}/>
            <TextInput placeholder="Email" style={{borderWidth: 2, borderRadius: 10, height: 40, marginHorizontal: 10}}/>
            <TextInput placeholder="Password" style={{borderWidth: 2, borderRadius: 10, marginTop: 30, height: 40, marginHorizontal: 10}}/>
        </Animated.View>
    )
};

export default LoginScreen;