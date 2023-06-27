import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeScreen from "../pages/HomeScreen.js";
import CarScreen from "../pages/CarScreen.js";
import DetailScreen from "../pages/DetailScreen.js";
import MapScreen from "../pages/Map.js";

import AddCar from "../pages/AddCar.js";
import {
  StartScreen,
  LoginScreen,
  RegisterScreen,
  ResetPasswordScreen,
  Dashboard,
} from "./screens";

// import ViewCar from "../pages/ViewCar.js";
const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator
      initialRouteName="StartScreen"
      screenOptions={{
        headerShown: false,
        headerStyle: {
          backgroundColor: "#5B7553",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      {/* <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: "Home",
        }}
      /> */}
      <Drawer.Navigator screenOptions={{ headerShown: false }}>
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Add Car" component={AddCar} />
      </Drawer.Navigator>
      <Stack.Screen name="StartScreen" component={StartScreen} />
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
      <Stack.Screen name="Dashboard" component={Dashboard} />
      {/* <Stack.Screen name="AddCar" component={AddCar} /> */}
      <Stack.Screen
        name="ResetPasswordScreen"
        component={ResetPasswordScreen}
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
      <Stack.Screen
        name="Map"
        component={MapScreen}
        options={{
          title: "Map",
        }}
      />
      {/* <Stack.Screen
        name="ViewCar"
        component={ViewCar}
        options={{
          title: "Veiw Car",
        }}
      /> */}
    </Stack.Navigator>
  );
}

export default MyStack;
