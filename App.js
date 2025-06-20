import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from 'react-native-vector-icons/Ionicons'

import MainStackNavigator from "./navigation/MainNavigatior";

export default function App() {
  return (
    <MainStackNavigator />
  );
}