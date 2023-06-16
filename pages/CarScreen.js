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
import { Switch, Snackbar } from "react-native-paper";
import Header from "../src/components/Header";
import { theme } from "../src/core/theme";
import BackButton from "../src/components/BackButton";
import Background from "../src/components/Background";
import { updateCar, getCarById } from "../api/node";

function CarScreen({ navigation, route }) {
  const [car, setCar] = useState({});
  const { carIdName } = route.params;

  const [temp, setTemp] = useState(car.temperature);
  const [tempPrev, setTempprev] = useState(car.temperature);
  const [tempControls, setTempControls] = useState(false);

  const [carlockControls, setCarlockControls] = useState(false);
  const [isSwitchOn, setIsSwitchOn] = useState(car.isLocked);
  const [visible, setVisible] = useState(false);
  const onToggleSwitch = () => {
    setIsSwitchOn(!isSwitchOn);
    setVisible(!visible);
  };

  const onToggleSnackBar = () => setVisible(!visible);
  const onDismissSnackBar = () => setVisible(false);

  async function getData() {
    const carData = await getCarById(carIdName.id);

    if (Object.keys(carData).length > 0) {
      setCar(carData);
      setTemp(carData.temperature);
      setTempprev(carData.temperature);
      setIsSwitchOn(carData.isLocked);
    }
  }
  useEffect(() => {
    if (Object.keys(car).length === 0) {
      getData();
    }
    car.temperature = temp;
    const previusIsLocked = car.isLocked;
    car.isLocked = isSwitchOn;
    if (Object.keys(car).length > 0) {
      setTempprev(temp);
    }

    if (temp != tempPrev || isSwitchOn != previusIsLocked) {
      updateCar(car);
    }
  }, [tempControls, carlockControls]);

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

  const SCREEN_HEIGHT = Dimensions.get("window").height;
  const SCREEN_WIDTH = Dimensions.get("window").width;

  return (
    <Background style={{ backgroundColor: "white" }}>
      <Header>
        <BackButton goBack={navigation.goBack} />
        <Text style={[styles.text, { marginLeft: 20 }]}>{car.name}</Text>
      </Header>
      <TouchableOpacity
        onPress={() => navigation.navigate("Detail", { carIdName: carIdName })}
      >
        <Image style={styles.carimg} source={require("../img/tesla2.png")} />
      </TouchableOpacity>

      <Divider bold={true} leftInset={true} style={styles.devider} />

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
    </Background>
  );
}

const styles = StyleSheet.create({
  devider: {
    width: "80%",
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 18 },
    shadowColor: "green", // Set the shadow color here

    elevation: 4,
  },
  text: {
    fontSize: 18,
    marginRight: 10,
  },
  carimg: {
    flex: 0,
    height: 200,
    marginTop: "40%",
    resizeMode: "contain",
  },
  icons: {
    flex: 1,
    flexDirection: "row",
    padding: 20,
    justifyContent: "space-between",
  },
  header: {
    // marginTop: 20,
    alignSelf: "center",
    backgroundColor: theme.colors.header,
    color: theme.colors.text,
    width: "100%",
  },
});
export default CarScreen;
