import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'

const ItemsPopular = (props) => {
    return (
        <TouchableOpacity style={styles.itemPopular} id={props.id}>
            <View style={styles.cardImage}>
                <Image source={props.Image} style={styles.image} resizeMode="stretch" />
            </View>
            <Text style={styles.titleItem}>{props.title}</Text>
        </TouchableOpacity>
    )
}

export default ItemsPopular

const styles = StyleSheet.create({
    itemPopular: {
        width: 120,
        height: 140,
        marginRight: 7,
        overflow: 'hidden',
        borderRadius: 5,
        backgroundColor: '#f3f3f3'


    },
    image: {
        width: 120,
        height: 110,
        resizeMode: 'cover',
        justifyContent: 'center',
        borderRadius: 10,

    },
    titleItem: {
        marginTop: 5,
        textAlign: 'center',
        fontFamily: 'Poppins-Regular',
        color: '#080808'
    }
})
