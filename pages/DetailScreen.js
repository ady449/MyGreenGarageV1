import React from "react";
import TableView from "../stuff/TableView";
import { View, Text, StyleSheet, Button } from "react-native";
function DetailScreen({ navigation, route }) {
  //   const { car } = route.params;
  const { car } = "";
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <TableView />
    </View>
  );
}

export default DetailScreen;
