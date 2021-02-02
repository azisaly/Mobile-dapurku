import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'


const Calender = () => {
    return (
        <View style={styles.calender}>
        </View>
    )
}

export default Calender

const styles = StyleSheet.create({
    calender: {
        marginTop: 7,
        flex: 1,
        height: 100,
        backgroundColor: '#E7E1E1',
        borderRadius: 5
    }
})
