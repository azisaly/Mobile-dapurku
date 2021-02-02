import React, { useState } from 'react'
import { StyleSheet, Text, View, Image, TextInput } from 'react-native'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/dist/FontAwesome5';
import ItemsResep from '../component/ItemsResep';





const BooksMenu = () => {
    const [resep, setResep] = useState([]);
    const [loading, setLoading] = useState(false);
    const [search, setSearch] = useState("");
    const [filterResep, setFilterResep] = useState([]);

    return (
        <View style={styles.container}>
            {/* <KeyboardAvoidingView behavior="position"> */}
            <View style={styles.header}>
                <View style={styles.search}>
                    <Icon name="search" size={20} />
                    <TextInput placeholder="Cari Menu Kesukaanmu" />
                </View>
            </View>

            <ScrollView>
                <TouchableOpacity>
                    <View style={styles.camera}>
                        <Image style={{ height: 280, flex: 1 }} source={require('../assets/image/kamera.png')} />
                    </View>
                    {/* </KeyboardAvoidingView> */}
                </TouchableOpacity>


                <View style={styles.conatainerResep}>
                    <ItemsResep />
                    <ItemsResep />
                    <ItemsResep />
                    <ItemsResep />
                    <ItemsResep />
                </View>
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
        height: 260,
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
