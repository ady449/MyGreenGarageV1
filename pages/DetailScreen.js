import React from "react";
import TableView from "../stuff/TableView";
import {
  Animated,
  View,
  Text,
  StyleSheet,
  Dimensions,
  Button,
} from "react-native";
import Divider from "@mui/material/Divider";
import {
  useFonts,
  Montserrat_400Regular,
  Montserrat_600SemiBold,
  Montserrat_700Bold,
} from "@expo-google-fonts/montserrat";
import { State, PanGestureHandler } from "react-native-gesture-handler";

function DetailScreen({ navigation, route }) {
  //   const { car } = route.params;

  let [fontsLoaded] = useFonts({
    Montserrat_400Regular,
    Montserrat_600SemiBold,
    Montserrat_700Bold,
  });
  const { car } = "";
  const windowWidth = Dimensions.get("window").width;
  const circleRadius = 30;

  const _touchX = new Animated.Value(windowWidth / 2 - circleRadius);
  const _onPanGestureEvent = Animated.event([{ nativeEvent: { x: _touchX } }], {
    useNativeDriver: true,
  });

  const _handleStateChange = ({ nativeEvent }) => {
    if (nativeEvent.state === State.ACTIVE) {
      navigation.navigate("Home");
    }
  };

  return (
    <PanGestureHandler onHandlerStateChange={_handleStateChange}>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text style={styles.title}>Status</Text>
        <Divider style={{ marginTop: 60 }} variant="middle" />
        <TableView />
      </View>
    </PanGestureHandler>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#121212",
  },
  img: {
    height: "50%",
    width: "120%",
    resizeMode: "contain",
  },
  title: {
    fontFamily: "Montserrat_700Bold",
    fontSize: 30,
    marginTop: 20,
  },
  detail: {
    color: "#FFF",
    fontFamily: "Montserrat_400Regular",
    fontSize: 18,
    textAlign: "center",
    paddingHorizontal: 20,
    lineHeight: 30,
    marginTop: 30,
  },
  btn: {
    marginTop: 80,
    backgroundColor: "#E2443B",
    paddingHorizontal: 140,
    paddingVertical: 10,
    borderRadius: 30,
  },
  text: {
    fontFamily: "Montserrat_600SemiBold",
    fontSize: 30,
    color: "#FFF",
  },
});

export default DetailScreen;
