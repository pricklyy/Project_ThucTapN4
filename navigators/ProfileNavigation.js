import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProfileScreen from '../screens/Profile/ProfileScreen';
import EditProfileScreen from '../screens/Profile/EditProfile';

const Stack = createNativeStackNavigator();
function ProfileNavigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen options={{ headerShown: false }} name="Profile" component={ProfileScreen} />
                {/* <Stack.Screen options={{ headerShown: false }} name="EditProfile" component={EditProfileScreen} /> */}
            
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default ProfileNavigation;