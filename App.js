import { StatusBar } from 'expo-status-bar';
import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import * as Location from 'expo-location';
import WeatherInfo from './components/WeatherInfo';
import UnitsPicker from './components/UnitsPicker';
import ReloadIcon from './components/ReloadIcon';
import { colors } from './utils/index';
import WeatherDetails from './components/WeatherDetails';

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
                <StatusBar hidden />
                <View style={styles.main}>
                    <View style={styles.contentContainer}>
                        <View style={styles.weatherContainer}>
                            <WeatherInfo currentWeather={currentWeather}/>
                        </View>
                        <View style={styles.actionPainel}>
                            <UnitsPicker unitsSystem={unitsSystem} setUnitsSystem={setUnitsSystem}/>
                            <ReloadIcon load={load}/>
                        </View>
                    </View>
                </View>
                <View>
                    <WeatherDetails currentWeather={currentWeather}/>
                </View>
            </View>
        );

    } else if (errorMessage){
        return (
            <View style={styles.container}>
                <Text style={styles.text}>{errorMessage}</Text>
                <StatusBar hidden />
            </View>
        );
    } else {
        return (
            <View style={styles.container}>
                <ActivityIndicator size="large" color={colors.STRONG_COLOR} />
                <StatusBar hidden />
            </View>
        );
    }
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        padding: 30,
        paddingTop: 40,
        alignContent: 'center',
        justifyContent: 'center',
        backgroundColor: '#b3c2b8',
    },
    text: {
        color: '#252525',
        fontSize: 25,
    },
    main: {
        flex: 1,
        justifyContent: 'space-between',
    },
    actionPainel: {
        padding: 20,
        paddingBottom: 30,
        flexDirection: 'column',
        alignContent: 'space-between',
        justifyContent: 'space-between',
    },
    contentContainer: {
        height: 250,
        borderRadius: 25,
        flexDirection: 'row',
        backgroundColor: '#bdc9c1',
        borderTopWidth: 1,
        borderLeftWidth: 1,
        borderColor: '#efefef',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: 0.16,
        shadowRadius: 16,
        elevation: 11,
    },
    weatherContainer: {
        paddingTop: 5,
    },
});
