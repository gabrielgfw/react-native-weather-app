import React from 'react'
import { View, StyleSheet, Platform } from 'react-native'
import { Picker } from '@react-native-community/picker'

export default function UnitsPicker({ unitsSystem, setUnitsSystem }) {
    return (
        <View style={[styles.pickerStyle]}>
            <Picker 
                selectedValue={unitsSystem} 
                onValueChange={ (item) => setUnitsSystem(item)}
                mode="dropdown"
                itemStyle={{
                    fontSize: 12,
                    }}>

                <Picker.Item label="C°" value="metric"/>
                <Picker.Item label="F°" value="imperial"/>
            </Picker>
        </View>
    );
}

const styles = StyleSheet.create({
    pickerStyle: {

        ...Platform.select({
            ios: {
                top: -20,
            },
            android: {
                top: 25,
            },
        }),
        flex: 0,
        position: 'absolute',
        height: 20,
        width: 90,
        paddingBottom: 100,
    },
});

