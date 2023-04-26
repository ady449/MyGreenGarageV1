import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

function CarScreen({ navigation, route }) {
  const { car } = route.params;
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>"Car Screen {car}"</Text>
      <Button
        title="Go to Profile"
        onPress={() => navigation.navigate("Detail", { car })}
      />
    </View>
  );
}

export default CarScreen;
