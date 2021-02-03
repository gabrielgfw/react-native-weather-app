import React from 'react'
import { View, Platform, StyleSheet } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

export default function ReloadIcon() {
    const reloadIconName = Platform.OS === "ios" ? "ios-refresh" : "md-refresh";

    return (
        <View style={styles.reloadIcon}>
            <Ionicons name={reloadIconName} size={24} color="black" />
        </View>
    );
}

const styles = StyleSheet.create({
    reloadIcon: {
    }
});