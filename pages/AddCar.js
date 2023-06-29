import React, { useState, useEffect } from "react";
import { View, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import { Text } from "react-native-paper";
import Background from "../src/components/Background";
import Logo from "../src/components/Logo";
import Header from "../src/components/Header";
import Button from "../src/components/Button";
import Title from "../src/components/Title";
import TextInput from "../src/components/TextInput";
import BackButton from "../src/components/BackButton";
import { theme } from "../src/core/theme";

import { addCar } from "../api/node";
import { getStatusBarHeight } from "react-native-status-bar-height";

export default function AddCar({ navigation, route }) {
  //   const { username } = route.params;
  //   console.log(route.params);
  const [model, setModel] = useState({ value: "", error: "" });
  const [brand, setBrand] = useState({ value: "", error: "" });
  const [dmnf, setDmnf] = useState({ value: "", error: "" });
  const [batterylife, setBatterylife] = useState({ value: 0, error: "" });
  const [batterylevel, setBatterylevel] = useState({ value: 0, error: "" });
  const [vin, setVin] = useState({ value: "", error: "" });
  const [range, setRange] = useState({ value: 0, error: "" });
  const [km, setKm] = useState({ value: 0, error: "" });
  const [camera, setCamera] = useState({ value: false, error: "" });
  const [temperature, setTemperature] = useState({ value: 15, error: "" });
  const [isLocked, setIsLocked] = useState({ value: true, error: "" });
  const [geolocation, setGeolocation] = useState({
    value: { latitude: 23, longitude: 45 },
    error: "",
  });
  const [insurance, setInsurance] = useState({ value: "", error: "" });
  const [register, setRegister] = useState(false);
  const [errorText, setError] = useState("");

  useEffect(() => {});
  const onSignUpPressed = async () => {
    const registerCheck = await addCar(
      username.value,
      brand.value,
      model.value,
      dmnf.value,
      batterylife.value,
      batterylevel.value,
      vin.value,
      range.value,
      km.value,
      camera.value,
      insurance.value,
      temperature.value,
      isLocked.value,
      geolocation.value
    );
    if (registerCheck === false) {
      setError(true);
    }
    setRegister(registerCheck);
  };

  return (
    <Background>
      <Header>
        <BackButton goBack={navigation.goBack} />
        <Text style={[styles.text, { marginLeft: 20 }]}>Add Car</Text>
      </Header>
      <ScrollView style={{ width: 340 }}>
        <TextInput
          label="Model"
          returnKeyType="next"
          value={model.value}
          onChangeText={(text) => setModel({ value: text, error: "" })}
          error={!!model.error}
          errorText={model.error}
        />
        <TextInput
          label="Brand"
          returnKeyType="next"
          value={brand.value}
          onChangeText={(text) => setBrand({ value: text, error: "" })}
          error={!!brand.error}
          errorText={brand.error}
          autoCapitalize="none"
        />
        <TextInput
          label="Date of manufacture"
          returnKeyType="next"
          value={dmnf.value}
          onChangeText={(text) => setDmnf({ value: text, error: "" })}
          error={!!dmnf.error}
          errorText={dmnf.error}
        />
        <TextInput
          label="Battery life"
          returnKeyType="next"
          value={batterylife.value}
          onChangeText={(text) => setBatterylife({ value: text, error: "" })}
          error={!!batterylife.error}
          errorText={batterylife.error}
        />
        <TextInput
          label="Battery level"
          returnKeyType="next"
          value={batterylevel.value}
          onChangeText={(text) => setBatterylevel({ value: text, error: "" })}
          error={!!batterylevel.error}
          errorText={batterylevel.error}
        />
        <TextInput
          label="VIN"
          returnKeyType="next"
          value={vin.value}
          onChangeText={(text) => setVin({ value: text, error: "" })}
          error={!!vin.error}
          errorText={vin.error}
        />
        <TextInput
          label="Range"
          returnKeyType="next"
          value={range.value}
          onChangeText={(text) => setRange({ value: text, error: "" })}
          error={!!range.error}
          errorText={range.error}
        />
        <TextInput
          label="Kilometer"
          returnKeyType="next"
          value={km.value}
          onChangeText={(text) => setKm({ value: text, error: "" })}
          error={!!km.error}
          errorText={km.error}
        />
        <TextInput
          label="Insurance"
          returnKeyType="done"
          value={insurance.value}
          onChangeText={(text) => setInsurance({ value: text, error: "" })}
          error={!!insurance.error}
          errorText={insurance.error}
        />
      </ScrollView>

      <Button
        mode="contained"
        onPress={onSignUpPressed}
        style={{ marginTop: 24, width: 300 }}
      >
        AddCar
      </Button>
    </Background>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    marginTop: 4,
  },
  link: {
    fontWeight: "bold",
    color: theme.colors.primary,
  },
  error: {
    fontSize: 13,
    color: theme.colors.error,
    paddingTop: 8,
  },
});
