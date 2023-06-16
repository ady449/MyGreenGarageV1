import React, { useState, useEffect } from "react";
import { View, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import { Text } from "react-native-paper";
import Background from "../components/Background";
import Logo from "../components/Logo";
import Header from "../components/Header";
import Button from "../components/Button";
import Title from "../components/Title";
import TextInput from "../components/TextInput";
import BackButton from "../components/BackButton";
import { theme } from "../core/theme";

import { addCar } from "../../api/node";
import { getStatusBarHeight } from "react-native-status-bar-height";

export default function AddCar({ navigation }) {
  const [model, setModel] = useState({ value: "", error: "" });
  const [brand, setBrand] = useState({ value: "", error: "" });
  const [dmnf, setDmnf] = useState({ value: "", error: "" });
  const [batterylife, setBatterylife] = useState({ value: "", error: "" });
  const [batterylevel, setBatterylevel] = useState({ value: "", error: "" });
  const [vin, setVin] = useState({ value: "", error: "" });
  const [range, setRange] = useState({ value: "", error: "" });
  const [km, setKm] = useState({ value: "", error: "" });
  const [camera, setCamera] = useState({ value: true, error: "" });
  const [temperature, setTemperature] = useState({ value: "", error: "" });
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
    console.log(registerCheck);
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
        style={{ marginTop: 24 }}
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
