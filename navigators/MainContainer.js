import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import { StyleSheet } from "react-native";

// Screens
import HomeScreen from "../screens/trangchu/HomeScreen";
import DetailsScreen from "../screens/trangchu/DetailsScreen";
import SettingScreen from "../screens/trangchu/RewardsScreen ";
import PersonalScreen from "../screens/trangchu/PersonalScreen";
//Screen names
const homeName = "Trang chủ";
const detailsName = "Nhiệm vụ";
const settingsName = "Điểm thưởng";
const personalName = "Cá nhân";

const Tab = createBottomTabNavigator();

function MainContainer() {
  return (
    <NavigationContainer independent={true}>
      <Tab.Navigator
        initialRouteName={homeName}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let rn = route.name;

            if (rn === homeName) {
              iconName = focused ? "home" : "home-outline";
            } else if (rn === detailsName) {
              iconName = focused ? "list" : "list-circle-outline";
            } else if (rn === settingsName) {
              iconName = focused ? "gift" : "gift-outline";
            } else if (rn === personalName) {
              iconName = focused ? "person" : "person-outline";
            }
            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        activeColor="#e91e63"
        inactiveColor="#000000"
        barStyle={styles.tabBar}
        labeled={true}
        shifting={true}
      >
        <Tab.Screen name={homeName}  component={HomeScreen} />
        <Tab.Screen name={detailsName} component={DetailsScreen} />
        <Tab.Screen name={settingsName} component={SettingScreen} />
        <Tab.Screen name={personalName} component={PersonalScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: "#ffffff",
    paddingBottom: 5,
    height: 65,
  },
});
export default MainContainer;
