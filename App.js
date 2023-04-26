import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import MyStack from "./src/Navigation.js";
import DetailScreen from "./pages/DetailScreen";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}
