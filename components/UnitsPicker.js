import React from 'react'
import { View, StyleSheet, Platform } from 'react-native'
import { Picker } from '@react-native-community/picker'
import { colors } from '../utils';

export default function UnitsPicker({ unitsSystem, setUnitsSystem }) {
    return (
        <View style={styles.pickerContainer}>
            <Picker
                style={styles.pickerStyle}
                selectedValue={unitsSystem} 
                onValueChange={ (item) => setUnitsSystem(item)}
                itemStyle={{ backgroundColor: "#d3d3d3" }}
                mode="dropdown"
                >
                <Picker.Item label="C°" value="metric"/>
                <Picker.Item label="F°" value="imperial"/>
            </Picker>
        </View>
    );
}

const styles = StyleSheet.create({
    pickercontainer: {
        paddingRight: 25,
    },
    
    pickerStyle: { 
        transform: [
            { scaleX: 1.3 },
            { scaleY: 1.3 },
        ],
        width: 90,
        marginLeft: -40,
        height: 55,
        color: colors.PRIMARY_COLOR,
        borderRadius: 30,
        paddingRight: 0,
    },
});

