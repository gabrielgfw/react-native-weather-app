import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import { colors } from '../utils/index'

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

            <View style={styles.viewInfo}>
                <Text style={styles.cityName}> {name} </Text>
                <Text style={styles.weatherDescText}> {description} </Text>
                <Text style={styles.secondaryText}> {main} </Text> 
            </View>
            
            <View style={styles.viewTemp}>
                <Image style={styles.weatherIcon} source={{ uri: iconUrl }}></Image>
                <Text style={styles.tempValueText}> {temp.toFixed(1)}° </Text>
            </View>
              
        </View>
    );
}

const styles = StyleSheet.create({
    viewInfo: {
        padding: 20,
        paddingBottom: 0,
    },
    weatherInfo: {
        alignItems: "flex-start",
        paddingBottom: 20,
    },
    viewTemp: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    weatherIcon: {
        width: 100,
        height: 100,        
    },
    cityName: {
        color: colors.STRONG_COLOR,
        fontSize: 25,
        fontWeight: 'bold',
        padding: 20,
        paddingTop: 5,
        paddingLeft: 0,
        paddingBottom: 0,
    },
    weatherDescText: {
        color: colors.SIMPLE_TEXT_COLOR,
        fontSize: 20,
        textTransform: 'capitalize',
        padding: 10,
        paddingBottom: 5,
        paddingTop: 5,
        paddingLeft: 0,
    },
    tempValueText: {
        fontSize: 40,
        color: colors.PRIMARY_COLOR,
    },
    secondaryText: {
        fontSize: 20,
        color: colors.SECONDARY_COLOR,
        fontWeight: 'bold',
        padding: 10,
        paddingTop: 0,
        paddingLeft: 0,
    },
});