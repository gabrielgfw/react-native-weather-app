import { StatusBar } from 'expo-status-bar';
import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Location from 'expo-location';

const WEATHER_API_KEY = "c1e4b5d8893a59e7de3fcb6795cd80b0";
const BASE_WEATHER_URL = "https://api.openweathermap.org/data/2.5/weather?"

export default function App() {
    const [errorMessage, setErrorMessage] = useState(null);
    const [currentWeather, setCurrentWeather] = useState(null);

    useEffect(() => {
    load()
    }, []);

    async function load() {
    try {
        let { status } = await Location.requestPermissionsAsync();
        
        if(status !== 'granted') {
        setErrorMessage('Access to location is needed to run the app.');
        return
        }

        // Get user's location:
        const location = await Location.getCurrentPositionAsync();
        const { latitude, longitude } = location.coords;

        // Setting up the weather api that will return our desired information:
        const weatherUrl = `${BASE_WEATHER_URL}lat=${latitude}&lon=${longitude}&appid=${WEATHER_API_KEY}`;
        const response = await fetch(weatherUrl);
        const result = await response.json();

        if(response.ok) {
            setCurrentWeather(result);
        } else {
            setErrorMessage(result.message);
        }

    } catch (error) {
        
        }
    }

    return (
    <View style={styles.container}>
        <Text style={styles.text}>Very funny to get started!!</Text>
        <StatusBar style="auto" />
    </View>
    );
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    text: {
        color: '#252525',
        fontSize: 25,
    }
});
