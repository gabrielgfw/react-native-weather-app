import React from 'react'
import { View, StyleSheet, Platform } from 'react-native'
import { Picker } from '@react-native-community/picker'

export default function UnitsPicker({ unitsSystem, setUnitsSystem }) {
    return (
        <View>
            <Picker
                style={styles.pickerStyle} 
                selectedValue={unitsSystem} 
                onValueChange={ (item) => setUnitsSystem(item)}
                mode="dropdown">
                <Picker.Item label="C°" value="metric"/>
                <Picker.Item label="F°" value="imperial"/>
            </Picker>
        </View>
    );
}

const styles = StyleSheet.create({
    pickerStyle: {
        /* 
        ...Platform.select({
            ios: {
                top: -20,
            },
            android: {
                top: 25,
            },
        }),
        */
        height: 20,
        width: 90,
        paddingBottom: 50,        
    },
});

