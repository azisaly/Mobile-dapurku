import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import OnBoardingScreen from './screens/OnBoardingScreen'
import BottomNavigator from './RouterTab'
import Details from './component/Details';
import Camera from './component/Camera';




const Stack = createStackNavigator();
const Router = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator headerMode="none">
                <Stack.Screen name="OnBoardingScreen" component={OnBoardingScreen} />
                <Stack.Screen name="BottomNavigator" component={BottomNavigator} />
                <Stack.Screen name="Details" component={Details} />
                <Stack.Screen name="Camera" component={Camera} />
            </Stack.Navigator>
        </NavigationContainer>
    )
};

export default Router


