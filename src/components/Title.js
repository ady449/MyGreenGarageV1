import React from "react";
import { StyleSheet } from "react-native";
import { Text } from "react-native-paper";
import { theme } from "../core/theme";

export default function Title({ styl, ...props }) {
  return <Text style={[styles.header, styl]} {...props} />;
}

const styles = StyleSheet.create({
  header: {
    fontSize: 21,
    fontWeight: "bold",
    paddingVertical: 15,
  },
});
