import { StatusBar } from 'expo-status-bar';
import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import * as Location from 'expo-location';
import WeatherInfo from './components/WeatherInfo';
import UnitsPicker from './components/UnitsPicker';
import ReloadIcon from './components/ReloadIcon';

const WEATHER_API_KEY = "c1e4b5d8893a59e7de3fcb6795cd80b0";
const BASE_WEATHER_URL = "https://api.openweathermap.org/data/2.5/weather?"

export default function App() {
    const [errorMessage, setErrorMessage] = useState(null);
    const [currentWeather, setCurrentWeather] = useState(null);
    const [unitsSystem, setUnitsSystem] = useState("metric");

    useEffect(() => {
        load()
    }, [unitsSystem]);

    async function load() {
        setCurrentWeather(null);
        setErrorMessage(null);
        
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
            const weatherUrl = `${BASE_WEATHER_URL}lat=${latitude}&lon=${longitude}&units=${unitsSystem}&appid=${WEATHER_API_KEY}`;
            const response = await fetch(weatherUrl);
            const result = await response.json();

            if(response.ok) {
                setCurrentWeather(result);
            } else {
                setErrorMessage(result.message);
            }

        } catch (error) {
            setErrorMessage(error.message);
        }
    }

    if(currentWeather) {
        return (
            <View style={styles.container}>
                <StatusBar style="auto" />
                <View style={styles.main}>
                    <UnitsPicker unitsSystem={unitsSystem} setUnitsSystem={setUnitsSystem}/>
                    <ReloadIcon />
                    <WeatherInfo currentWeather={currentWeather}/>
                </View>
            </View>
        );

    } else if (errorMessage){
        return (
            <View style={styles.container}>
                <Text style={styles.text}>{errorMessage}</Text>
                <StatusBar style="auto" />
            </View>
        );
    } else {
        return (
            <View style={styles.container}>
                <ActivityIndicator size="large" color="#00ff00" />
                <StatusBar style="auto" />
            </View>
        );
    }
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        padding: 20,
        justifyContent: 'center',
        height: '100%',
    },
    text: {
        color: '#252525',
        fontSize: 25,
    },
    main: {
        justifyContent: 'center',
        flex: 1,
    }
});
