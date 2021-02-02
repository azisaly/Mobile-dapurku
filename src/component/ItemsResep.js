import React from 'react'
import { StyleSheet, Text, Image } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

const ItemsResep = () => {
    return (

        <TouchableOpacity style={styles.itemsCard}>
            <Image style={styles.image} source={require('../assets/food/opor.png')} />
            <Text style={styles.title}>Ayam goreng kecap manis</Text>
        </TouchableOpacity>
    )
}

export default ItemsResep

const styles = StyleSheet.create({
    itemsCard: {
        marginTop: 8,
        width: 160,
        height: 200,
        marginRight: 5,
        borderRadius: 5,
        backgroundColor: '#f3f3f3'
    },

    title: {
        textAlign: 'center',
        fontFamily: 'Poppins-Regular',
        color: '#080808',
        marginTop: 5,
    },

    image: {
        width: 160,
        height: 150,
        borderRadius: 5
    }
})
