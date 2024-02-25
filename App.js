import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import MainContainer from './navigators/MainContainer';
import LoginNavigation from './navigators/Loginnavigation';
export default function App() {
  return (
    <LoginNavigation />
  );
}

