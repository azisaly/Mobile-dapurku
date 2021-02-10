import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Display = () => {
    return (
        // Try removing the `flex: 1` on the parent View.
        // The parent will not have dimensions, so the children can't expand.
        // What if you add `height: 300` instead of `flex: 1`?
        <View style={{ flex: 1 }}>
            <View style={{ flex: 1, width: 50, backgroundColor: 'powderblue' }} />
            {/* <View style={{ flex: 2, backgroundColor: 'skyblue' }} />
            <View style={{ flex: 4, backgroundColor: 'steelblue' }} /> */}
        </View>
    )
}

export default Display

const styles = StyleSheet.create({})
