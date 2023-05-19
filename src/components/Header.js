import React from "react";
import { StyleSheet, View } from "react-native";
// import { View } from "react-native-paper";
import { theme } from "../core/theme";

export default function Header({ children, style }) {
  return <View style={[styles.header, style]}>{children}</View>;
}

const styles = StyleSheet.create({
  header: {
    fontSize: 21,
    fontWeight: "bold",
    paddingVertical: 15,
    flexDirection: "row",
    shadowColor: "green", // Set the shadow color here
    shadowOpacity: 0.5, // Set the opacity of the shadow
    shadowRadius: 5, // Set the radius of the shadow
    shadowOffset: {
      width: 0,
      height: 2,
    },
    elevation: 10, // On Android, use elevation instead of shadow properties
    backgroundColor: theme.colors.header,
    color: theme.colors.text,
    width: "100%",
  },
});
