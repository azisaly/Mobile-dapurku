import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, Image, TextInput, Dimensions, Button } from 'react-native'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/dist/FontAwesome5';
import ItemsResep from '../component/ItemsResep';
import TestCamera from '../component/TestCamera';

import { RNCamera } from 'react-native-camera';
import { useCamera } from 'react-native-camera-hooks';





const BooksMenu = (props, { initialProps }) => {
    const [resep, setResep] = useState([]);
    const [loading, setLoading] = useState(false);
    const [search, setSearch] = useState("");
    const [filterResep, setFilterResep] = useState([]);



    const [
        { cameraRef, type, ratio, autoFocus, autoFocusPoint, isRecording },
        {
            toggleFacing,
            textRecognized,
            facesDetected,
            recordVideo,
            setIsRecording,
        },
    ] = useCamera(initialProps);


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
                <TouchableOpacity style={styles.btn}><Text style={styles.btnTitle}>Cari</Text></TouchableOpacity>
            </View>


            <View style={styles.camera}>

                <Text style={styles.jelajahi}>Jelajahi Dengan Camera</Text>
                {/* <RNCamera
                ref={cameraRef}
                autoFocusPointOfInterest={autoFocusPoint.normalized}
                type={type}
                ratio={ratio}
                style={styles.cam}
                autoFocus={autoFocus}
                onTextRecognized={textRecognized}
                onFacesDetected={facesDetected}
            /> */}
            </View>



            <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 2 }}>
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
        justifyContent: 'flex-start',
    },
    btn: {
        display: 'flex',
        alignItems: 'center',
        backgroundColor: '#C1D00D',
        height: 50,
        width: 70,
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        marginHorizontal: 20
    },

    btnTitle: {
        color: '#0E416B',
        fontWeight: "bold"
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
        height: 50,
        backgroundColor: '#F7F1F1',
        marginTop: 5,
        borderRadius: 10,
        paddingHorizontal: 20,
        flexDirection: 'row',
        alignItems: 'center',

    },

    camera: {
        height: 200,
        backgroundColor: '#E0CACA',
        marginTop: 10,
        flexDirection: 'row',
        backgroundColor: '#DADAD5',
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    },

    jelajahi: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    // cam: {
    //     flex: 2,
    //     width: '100%',
    //     height: '50%'

    // },


    conatainerResep: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        flex: 1

    }
})
