import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../pages/HomeScreen.js";
import CarScreen from "../pages/CarScreen.js";
import DetailScreen from "../pages/DetailScreen.js";

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator
      initialRouteName="Detail"
      screenOptions={{
        headerStyle: {
          backgroundColor: "#5B7553",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: "Home",
        }}
      />
      <Stack.Screen
        name="Car"
        component={CarScreen}
        options={{
          title: "Car",
        }}
      />
      <Stack.Screen
        name="Detail"
        component={DetailScreen}
        options={{
          title: "Detail",
        }}
      />
    </Stack.Navigator>
  );
}

export default MyStack;
