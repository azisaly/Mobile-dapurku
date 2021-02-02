import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { ScrollView, } from 'react-native-gesture-handler'
import Calender from '../component/Calender'




import ItemsPopular from '../component/ItemsPopular'


const HomeScreen = (props) => {

    return (


        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>Semuanya</Text>
                <Text style={styles.title2}>Bisa Jadi Koki.</Text>
                <Image style={styles.imageLogo1} source={require('../assets/image/logochef.png')} />
            </View>



            <View style={styles.carausel}>
                <Image style={{ width: 330, height: 240, resizeMode: 'cover', borderRadius: 5 }} source={require('../assets/image/jumbotron.jpg')} />
            </View>



            <View style={{ bottom: -7, marginTop: 30 }}>
                <View style={{
                    width: "50%",
                }}>
                    <Text style={{
                        fontSize: 22,
                        fontWeight: "bold"
                    }}>Menu Favorit</Text>
                </View>
                <ScrollView horizontal={true}>
                    <View style={{ marginTop: 10, display: 'flex', flexDirection: 'row' }}>
                        <ItemsPopular id={1} title="Opor Ayam" Image={require('../assets/food/opor.png')} />
                        <ItemsPopular title="Ayam kecap" Image={require('../assets/food/ayamKecap.jpg')} />
                        <ItemsPopular title="Daging Asap" Image={require('../assets/food/dagingAsap.jpg')} />
                        <ItemsPopular title="Soto Betawi" Image={require('../assets/food/soto-betawi.jpg')} />
                        <ItemsPopular title="Rawon Jawa" Image={require('../assets/food/rawon.jpeg')} />
                    </View>
                </ScrollView>
            </View>
        </View>





    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 15,
        paddingTop: 20,
    },

    header: {
        height: 100,
        display: 'flex',
        flexDirection: 'column',
        marginTop: -5,
        justifyContent: 'flex-start',
        backgroundColor: '#FFFF00',
        borderRadius: 10,
    },

    imageLogo1: {
        width: 120,
        height: 120,
        position: 'absolute',
        marginRight: 0,
        justifyContent: 'center',
        alignItems: 'center',
        right: -10,
        top: -10
    },

    imageLogo2: {
        width: 80,
        height: 80,
        position: 'absolute',
        marginRight: 0,
        justifyContent: 'center',
        alignItems: 'center',
        left: 0,
        top: 30

    },

    title: {
        fontSize: 40,
        fontWeight: '800',
        fontFamily: 'Poppins-SemiBold',
        color: '#34281e',
        padding: 5
    },

    title2: {
        marginTop: -20,
        fontFamily: 'Poppins-SemiBold',
        color: '#34281e',
        marginLeft: 125

    },

    carausel: {
        height: 240,
        backgroundColor: '#E0CACA',
        marginTop: 8,
        borderRadius: 7
    }
})
