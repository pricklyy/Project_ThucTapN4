import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import MainContainer from './navigators/MainContainer';
import LoginNavigation from './navigators/Loginnavigation';
import RewardsScreen from './screens/trangchu/RewardsScreen ';
import Login from './screens/Login/Login';
import Register from './screens/Login/Register';
export default function App() {
  return (
    <LoginNavigation />
  );
}

