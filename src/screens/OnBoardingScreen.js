import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import Onboarding from 'react-native-onboarding-swiper';



const OnBoardingScreen = ({ navigation, TabActions }) => {
    return (
        <Onboarding
            onSkip={() => navigation.navigate("BottomNavigator")}
            onDone={() => navigation.navigate("BottomNavigator")}
            pages={[
                {
                    backgroundColor: '#fdeb93',
                    image: <Image source={require('../assets/image/onboarding1.png')} />,
                    title: 'Mau masak apa hari ini?',
                    subtitle: '',

                },
                {
                    backgroundColor: '#fff',
                    image: <Image source={require('../assets/image/onboarding2.png')} />,
                    title: 'Banyak bahan tapi bingung?',
                    subtitle: '',
                },
                {
                    backgroundColor: '#fdeb93',
                    image: <Image source={require('../assets/image/onboarding4.png')} />,
                    title: 'Yuk jelajahi menu bersama Dapurku',
                    subtitle: '',
                },

            ]}
        />
    )
}

export default OnBoardingScreen

const styles = StyleSheet.create({})
