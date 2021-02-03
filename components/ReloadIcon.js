import React from 'react'
import { View, Platform, StyleSheet } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { colors } from '../utils/index'

export default function ReloadIcon({ load }) {
    const reloadIconName = Platform.OS === "ios" ? "ios-refresh" : "md-refresh";

    return (
        <View style={styles.reloadIcon}>
            <Ionicons
                onPress={load}
                name={reloadIconName}
                size={35}
                color={colors.STRONG_COLOR} />
        </View>
    );
}

const styles = StyleSheet.create({
    reloadIcon: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        borderRadius: 15,
        height: 60,
        width: 60,

        backgroundColor: '#d0d7d2',
    }
});