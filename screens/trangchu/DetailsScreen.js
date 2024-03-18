import * as React from 'react';
import { View, Text } from 'react-native';

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
const Tab = createMaterialTopTabNavigator();
import AllScreen from '../mission/AllScreen'
import DoingScreen from '../mission/DoingScreen'
import DoneScreen from '../mission/DoneScreen'
import ChiTietScreen from '../mission/ChiTietScreen';
export default function DetailsScreen() {
    return (
    <Tab.Navigator>
      <Tab.Screen name='All' component={AllScreen} options={{tabBarLabel:'Tất cả'}}/>
      <Tab.Screen name='Doing' component={DoingScreen} options={{tabBarLabel:'Đang làm'}}/>
      <Tab.Screen name='Done' component={DoneScreen} options={{tabBarLabel:'Hoàn thành'}}/>
      <Tab.Screen name='Detail' component={ChiTietScreen} options={{tabBarLabel:'Chi tiết NV'}}/>
  </Tab.Navigator>
    );
}