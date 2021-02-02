import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Favorite = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Favoriet</Text>
        </View>
    )
}

export default Favorite

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 15,
        paddingTop: 20

    },
    title: {
        fontSize: 20,
        fontWeight: '500',
        color: '#41423f',
        textAlign: 'center'
    }
})
