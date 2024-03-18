import React from 'react'
import Login from '../screens/Login/Login'
import Register from '../screens/Login/Register'
import Welcome from '../screens/Login/Welcome'
import HomeScreen from '../screens/trangchu/HomeScreen'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainContainer from './MainContainer'
import PersonalScreen from '../screens/trangchu/PersonalScreen'


const Stack = createNativeStackNavigator();


function LoginNavigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen options={{ headerShown: false }} name="Welcome" component={Welcome} />
                <Stack.Screen options={{ headerShown: false }} name="Login" component={Login} />
                <Stack.Screen options={{ headerShown: false }} name="Register" component={Register} />
                <Stack.Screen options={{ headerShown: false }} name="HomeScreen" component={HomeScreen} />
                <Stack.Screen options={{ headerShown: false }} name="MainContainer" component={MainContainer} />
                <Stack.Screen options={{ headerShown: false }} name="Personal" component={PersonalScreen} />


            


            </Stack.Navigator>
        </NavigationContainer>
    );
}
export default LoginNavigation;
