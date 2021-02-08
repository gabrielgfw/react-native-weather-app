import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { colors } from '../utils/index'
import { FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons'

export default function WeatherDetails({ currentWeather, unitsSystem }) {
    const {
        main: { feels_like, humidity, pressure },
        wind: { speed },
    } = currentWeather;

    const windSpeed = unitsSystem === 'metric' ? `${Math.round(speed)} m/s` : `${Math.round(speed)} miles/h`

    return (
        <View style={styles.weatherDetails}>
            <View style={styles.weatherDetailsRow}>
                <View style={styles.weatherDetailsBox} blurRadius={1}>
                    <View style={styles.iconBox}>
                        <FontAwesome5 style={styles.iconStyle} name="temperature-high" size={30} color={colors.STRONG_COLOR}/>
                    </View>
                    <View style={styles.textBox}>
                        <Text style={styles.titleText}>Feels Like</Text>
                        <Text style={styles.valueText}>    { feels_like.toFixed(0) }°</Text>
                    </View>
                </View>
                <View style={styles.weatherDetailsBox}>
                    <View style={styles.iconBox}>
                        <MaterialCommunityIcons style={styles.iconStyle} name="water" size={35} color={colors.STRONG_COLOR}/> 
                    </View>
                    <View style={styles.textBox}>
                        <Text style={styles.titleText}>Humidity</Text>
                        <Text style={styles.valueText}>   { humidity }%</Text>
                    </View>
                </View>
            </View>

            <View style={styles.weatherDetailsRow}>
                <View style={styles.weatherDetailsBox} blurRadius={1}>
                    <View style={styles.iconBox}>
                        <MaterialCommunityIcons style={styles.iconStyle} name="weather-windy" size={30} color={colors.STRONG_COLOR}/>
                    </View>
                    <View style={styles.textBox}>
                        <Text style={styles.titleText}>Wind Speed</Text>
                        <Text style={styles.valueText}>{ windSpeed }</Text>
                    </View>
                </View>
                <View style={styles.weatherDetailsBox} blurRadius={1}>
                    <View style={styles.iconBox}>
                        <MaterialCommunityIcons style={styles.iconStyle} name="speedometer" size={30} color={colors.STRONG_COLOR}/>
                    </View>
                    <View style={styles.textBox}>
                        <Text style={styles.titleText}>Pressure</Text>
                        <Text style={styles.valueText}>{ pressure } hPa</Text>
                    </View>
                </View>
            </View>


        </View>
    )
}

const styles = StyleSheet.create({
    weatherDetails: {
        marginTop: 'auto',
        alignContent: 'center',
        justifyContent: 'center',
    },
    weatherDetailsRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 5,
        paddingBottom: 25,
    },
    weatherDetailsBox: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignContent: 'center',
        padding: 5,
        borderRadius: 10,
        backgroundColor: 'rgba(86,219,147,1)',
        width: 150,
        height: 70,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 9,
        },
        shadowOpacity: 0.48,
        shadowRadius: 11.95,

        elevation: 18,
    },
    textBox: {
        padding: 2,
        paddingRight: 5,
        paddingLeft: 5,
        justifyContent: 'center',
        alignContent: 'center',
    },
    valueText: {
        fontWeight: 'bold',
        color: colors.PRIMARY_COLOR,
        fontSize: 18,
    },
    titleText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'rgba(36,71,90,1)',
    },
    iconBox: {
        justifyContent: 'center',
        alignContent: 'center',
    },
    iconStyle: {
        padding: 5,
    }
});
