import {StyleSheet, Animated, Text, View, TextInput, Image, TouchableOpacity} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';

const LoginScreen = () => {
    
    const fade = useRef(new Animated.Value(0)).current;
    const translate = useRef(new Animated.Value(0)).current;
    const xPosition = new Animated.Value(0);

    useEffect(() => {
        Animated.timing(fade, 
           {toValue: 1,
        duration: 10000
        } 
            ).start();
    
    
    Animated.timing(xPosition, {
        toValue: -200,
        duration: 1000
    }).start();
}
    , [xPosition]);
    return(
        <Animated.View
        style={{
            backgroundColor: '#0A0D1D',
            height: '100%'
        }}
        >
            
            <Animated.Image source={require('../Images/tesla-shadow-logo.png')} style={{opacity: fade,width: 250, height: 250, alignSelf: 'center', marginTop: 70}}/>
            <Animated.View style={{transform: [{translateX: xPosition}]}}>
            <TextInput placeholder="Email" style={{backgroundColor: 'white', borderWidth: 2, borderRadius: 10, height: 40, width: '90%', marginLeft: 210}}/>
            <TextInput placeholder="Password" style={{backgroundColor: 'white', borderWidth: 2, borderRadius: 10, marginTop: 30, width: '90%', height: 40, marginLeft: 210}}/>
            </Animated.View>
            <TouchableOpacity>
                <Text>Login</Text>
            </TouchableOpacity>
        </Animated.View>
    )
};

export default LoginScreen;