import React from 'react'
import { View, Platform } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

export default function ReloadIcon() {
    const realoadIconName = Platform.OS === "ios" ? "ios-refresh" : "md-refresh";

    return (
        <View>
            <Ionicons name="ios-refresh" size={24} color="black" />
        </View>
    );
}
