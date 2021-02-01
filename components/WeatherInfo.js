import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import { colors } from '../utils/index'

const { PRIMARY_COLOR, SECONDARY_COLOR, SIMPLE_TEXT_COLOR } = colors;

export default function WeatherInfo({ currentWeather }) {
    const { 
        main: { temp },
        weather: [ details ],
        name
    } = currentWeather;

    const { icon, main, description } = details;
    const iconUrl = `https://openweathermap.org/img/wn/${icon}@4x.png`;

    return (
        <View style={styles.weatherInfo}>

            <Text style={styles.cityText}> {name} </Text>

            <Image style={styles.weatherIcon} source={{ uri: iconUrl }}></Image>

            <Text style={styles.textPrimary}> {temp.toFixed(1)}° </Text>
            <Text style={styles.weatherDescText}> {description} </Text>
            <Text style={styles.textSecondary}> {main} </Text>   
            
        </View>
    );
}


const styles = StyleSheet.create({
    weatherInfo: {
        alignItems: "center",
    },

    weatherIcon: {
        width: 100,
        height: 100,        
    },

    cityText: {
        color: SIMPLE_TEXT_COLOR,
        fontSize: 30,
    },
    /*
    weatherText: {
        color: '#ffffff',
        fontSize: 25,
        fontWeight: 'bold',
    },
    
    weatherMainText: {
        color: '#ffffff',
        fontSize: 20,
    },
    */

    weatherDescText: {
        color: SIMPLE_TEXT_COLOR,
        fontSize: 20,
        textTransform: 'capitalize',
    },


    textPrimary: {
        fontSize: 40,
        color: PRIMARY_COLOR,
    },

    textSecondary: {
        fontSize: 20,
        color: SECONDARY_COLOR,
        fontWeight: 'bold',
        marginTop: 10,
    },
});