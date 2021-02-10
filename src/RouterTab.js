import React from 'react'
import { View, Image } from 'react-native'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'


import BooksMenu from './screens/BooksMenu'
import HomeScreen from './screens/HomeScreen'
import Favorite from './screens/Favorite'
import Setting from './screens/Setting'


const Tab = createMaterialBottomTabNavigator()

const BottomNavigator = () => {
    return (
        <Tab.Navigator
            shifting={false}
            initialRouteName="Home"
            activeColor="#FFFF00"
            barStyle={{ backgroundColor: '#EAEAE0', borderRadius: 10 }}

        >

            <Tab.Screen name="Home" component={HomeScreen}
                options={{
                    tabBarLabel: '',
                    tabBarIcon: ({ color }) => (
                        <View>
                            {
                                color == "#FFFF00" ?
                                    <Image source={require('./assets/image/Home-active.png')} style={{ height: 30, width: 30 }} />
                                    : <Image source={require('./assets/image/Home.png')} style={{ height: 25, width: 25 }} />
                            }

                        </View>
                    )
                }} />

            <Tab.Screen name="Books" component={BooksMenu}
                options={{
                    tabBarLabel: '',
                    tabBarIcon: ({ color }) => (
                        <View>
                            {
                                color == "#FFFF00" ?
                                    <Image source={require('./assets/image/Buku-active.png')} style={{ height: 30, width: 30 }} />
                                    : <Image source={require('./assets/image/Buku.png')} style={{ height: 25, width: 25 }} />
                            }

                        </View>
                    )
                }} />


            <Tab.Screen name="Favorite" component={Favorite}
                options={{
                    tabBarLabel: '',
                    tabBarIcon: ({ color }) => (
                        <View>
                            {
                                color == "#FFFF00" ?
                                    <Image source={require('./assets/image/Favoriet-active.png')} style={{ height: 30, width: 30 }} />
                                    : <Image source={require('./assets/image/Favoriet.png')} style={{ height: 25, width: 25 }} />
                            }

                        </View>
                    )
                }}
            />

            <Tab.Screen name="Setting" component={Setting}
                options={{
                    tabBarLabel: '',
                    tabBarIcon: ({ color }) => (
                        <View>
                            {
                                color == "#FFFF00" ?
                                    <Image source={require('./assets/image/Setting-active.png')} style={{ height: 30, width: 30 }} />
                                    : <Image source={require('./assets/image/setting.png')} style={{ height: 30, width: 25 }} />
                            }

                        </View>
                    )
                }}
            />
        </Tab.Navigator>
    )
};

export default BottomNavigator