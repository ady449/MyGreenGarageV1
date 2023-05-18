import React, { useState, useEffect } from "react";
import {
  Dimensions,
  Animated,
  View,
  StyleSheet,
  Button,
  Image,
  TouchableOpacity,
} from "react-native";
import { Divider, Text } from "react-native-paper";
import { Ionicons } from "@expo/vector-icons";
import { updateTemp } from "../api/node";
import { Switch, Snackbar } from "react-native-paper";

function CarScreen({ navigation, route }) {
  //   const { car } = route.params;
  const car = { name: "", id: "6463fbc8fb561988e5988c6b", temperature: 15 };

  const [temp, setTemp] = useState(car.temperature);
  const [tempPrev, setTempprev] = useState(car.temperature);
  const [tempControls, setTempControls] = useState(false);

  const [isSwitchOn, setIsSwitchOn] = React.useState(false);
  const onToggleSwitch = () => {
    setIsSwitchOn(!isSwitchOn);
    setVisible(!visible);
  };

  const [visible, setVisible] = React.useState(false);
  const onToggleSnackBar = () => setVisible(!visible);
  const onDismissSnackBar = () => setVisible(false);

  useEffect(() => {
    car.temperature = temp;
    setTempprev(temp);
    if (temp != tempPrev) {
      updateTemp(car.id, car.temperature);
    }
  }, [tempControls]);

  const incrementTemp = () => {
    if (temp < 33) {
      setTemp(temp + 1);
    }
  };

  const decrementTemp = () => {
    if (temp > 15) {
      setTemp(temp - 1);
    }
  };

  const [carlockControls, setCarlockControls] = useState(false);

  const SCREEN_HEIGHT = Dimensions.get("window").height;
  const SCREEN_WIDTH = Dimensions.get("window").width;

  return (
    <View
      style={{
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <TouchableOpacity onPress={() => navigation.navigate("Detail")}>
        <Image style={styles.carimg} source={require("../img/tesla2.png")} />
      </TouchableOpacity>

      <Divider
        bold={true}
        leftInset={true}
        style={{
          width: "80%",
          shadowColor: "#000000",
          shadowOffset: { width: 0, height: 18 },
          shadowOpacity: 0.1,
          shadowRadius: 11,
          elevation: 4,
        }}
      />
      {/* <Icon name="key-outline" /> */}

      <View style={styles.icons}>
        <TouchableOpacity
          onPress={() => {
            setCarlockControls(!carlockControls);
            setTempControls(false);
          }}
        >
          <Ionicons name={"key-outline"} size={23} style={{ width: 50 }} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setTempControls(!tempControls);
            setCarlockControls(false);
          }}
        >
          <Ionicons name={"thermometer"} size={23} style={{ width: 50 }} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("ViewCar")}>
          <Ionicons name={"videocam"} size={23} style={{ width: 50 }} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Map")}>
          <Ionicons name={"map"} size={23} style={{ width: 50 }} />
        </TouchableOpacity>
      </View>
      {tempControls && (
        <View style={{ flex: 3 }}>
          <Text
            style={{ fontSize: 24, textAlign: "center", marginVertical: 20 }}
          >
            {temp}
          </Text>
          <Button title="+" onPress={incrementTemp} />
          <Button title="-" onPress={decrementTemp} />
        </View>
      )}
      {carlockControls && (
        <View style={{ flex: 3 }}>
          <Switch value={isSwitchOn} onValueChange={onToggleSwitch} />
        </View>
      )}
      <Snackbar
        visible={visible}
        onDismiss={onDismissSnackBar}
        action={{
          label: "Undo",
          onPress: () => {
            setIsSwitchOn(false);
          },
        }}
      >
        Car is locked!
      </Snackbar>
    </View>
  );
}

const styles = StyleSheet.create({
  carimg: {
    flex: 0,
    height: 200,
    marginTop: "40%",
    resizeMode: "contain",
    // justifyContent: "center",
  },
  icons: {
    flex: 1,
    flexDirection: "row",
    padding: 20,
    justifyContent: "space-between",
  },
});
export default CarScreen;
