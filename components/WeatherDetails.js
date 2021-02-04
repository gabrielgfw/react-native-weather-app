import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { colors } from '../utils/index'
import { FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons'

export default function WeatherDetails({ currentWeather }) {
    const {
        main: {feels_like, humidity}
    } = currentWeather;

    return (
        <View style={styles.weatherDetails}>
            <View style={styles.weatherDetailsRow}>
                <View style={styles.weatherDetailsBox}>
                    <FontAwesome5 name="temperature-low" size={25} color={colors.COOLER_COLOR}/>
                    <Text style={styles.weatherDetailsText}>{ feels_like }</Text>
                </View>
                <View style={styles.weatherDetailsBox}>
                    <Text style={styles.weatherDetailsText}>{ humidity }</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    weatherDetails: {
        marginTop: 'auto',
    },
    weatherDetailsRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 10,
        paddingBottom: 30,
    },
    weatherDetailsBox: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignContent: 'center',
        borderStyle: 'solid',
        padding: 20,
        borderRadius: 10,
        backgroundColor: '#bdc9c1',
        width: 150,
        borderTopWidth: 1,
        borderLeftWidth: 1,
        borderColor: '#efefef',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: 0.46,
        shadowRadius: 0,
        elevation: 15,
    },
    weatherDetailsText: {
        fontSize: 22,
        fontWeight: 'bold',
        color: colors.PRIMARY_COLOR,
        paddingLeft: 20,
    }
});
