import React, { useState } from 'react'
import { StyleSheet, Text, View, Image, SafeAreaView, FlatList, Dimensions } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'

const Details = (props) => {
    const resepid = props.route.params?.resepid ?? null;
    const state = props.route.params?.state ?? null;
    const details = state.find((cat) => cat.id === resepid);
    const [dataFlatlist, setDataFlatlist] = useState(details.desc);

    const renderItem = ({ item }) => {
        return (
            <Text style={{ fontFamily: 'Poppins-Regular' }}>{item}</Text>
        )
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.container}>
                <Image style={styles.image} source={{ uri: details.image }} />
                <Text style={styles.title}>{details.title}</Text>


                <Text style={styles.descTitle}>Cara Memasak :</Text>
                <FlatList
                    data={dataFlatlist}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id}
                    showsVerticalScrollIndicator={false}
                />
            </View>
        </SafeAreaView>

    )
}

export default Details

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,

    },
    image: {
        width: 320,
        height: 250,
        borderRadius: 10
    },
    title: {
        marginTop: 10,
        textAlign: 'center',
        fontFamily: 'Poppins-Bold',
        fontSize: 25
    },
    descTitle: {
        fontFamily: 'Poppins-Bold',
    },
    desc: {
        fontFamily: 'Poppins-Regular'
    }
})
