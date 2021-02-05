import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, Image, TextInput } from 'react-native'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/dist/FontAwesome5';
import ItemsResep from '../component/ItemsResep';





const BooksMenu = props => {
    const [resep, setResep] = useState([]);
    const [loading, setLoading] = useState(false);
    const [search, setSearch] = useState("");
    const [filterResep, setFilterResep] = useState([]);


    useEffect(() => {
        setLoading(true);
        axios.get("http://my-json-server.typicode.com/azisaly/dummydatadapurku/resep")
            .then(response => {
                setResep(response.data)
                setLoading(false)
            })
            .catch(err => console.log(err))
    }, []);



    useEffect(() => {
        setFilterResep(
            resep.filter((reseps) =>
                reseps.title.toLowerCase().includes(search.toLowerCase())
            )

        );
    }, [search, resep]);


    return (

        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.search}>
                    <Icon name="search" size={20} />
                    <TextInput placeholder="Cari Menu Kesukaanmu" onChangeText={(text) => setSearch(text)} />
                </View>
            </View>


            <TouchableOpacity onPress={() => props.navigation.navigate('Camera')}>
                <View style={styles.camera}>
                    <Image style={{ height: 200, flex: 1 }} source={require('../assets/image/kamera.png')} />
                </View>
            </TouchableOpacity>

            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.conatainerResep}>
                    {filterResep.map((e, i) => {

                        return (
                            <ItemsResep key={i} title={e.title} image={e.image} navigation={(id) => props.navigation.navigate('Details', { resepid: e.id, state: filterResep })} />
                        )

                    })}

                </View >
            </ScrollView>




        </View>
    )
}

export default BooksMenu

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 15,
        paddingTop: 20

    },
    header: {
        height: 100,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: -20,
        justifyContent: 'flex-start',

    },

    title: {
        fontSize: 20,
        fontWeight: '500',
        color: '#41423f',
        textAlign: 'center',
        display: 'flex',
        marginLeft: 100,
        marginBottom: -20
    },
    search: {
        flex: 1,
        height: 50,
        backgroundColor: '#F7F1F1',
        marginTop: 5,
        borderRadius: 10,
        paddingHorizontal: 20,
        flexDirection: 'row',
        alignItems: 'center'
    },

    camera: {
        height: 200,
        backgroundColor: '#E0CACA',
        marginTop: 10,
        flexDirection: 'row',
        backgroundColor: '#DADAD5',
        borderRadius: 5
    },
    conatainerResep: {
        flexDirection: 'row',
        flexWrap: 'wrap'
    }
})
