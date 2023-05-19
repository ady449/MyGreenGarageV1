import React from "react";
import {
  ImageBackground,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  View,
} from "react-native";
import { theme } from "../core/theme";

const Safezone = ({ children, style }) => {
  const Safezone = Platform.select({
    ios: SafeAreaView,
    android: View,
  });

  return <Safezone style={style}>{children}</Safezone>;
};

export default function Background({ children, style }) {
  return (
    <ImageBackground
      source={require("../../assets/background_dot.png")}
      resizeMode="repeat"
      style={styles.background}
    >
      <KeyboardAvoidingView
        style={[styles.container, style]}
        behavior="padding"
      >
        {children}
      </KeyboardAvoidingView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: "100%",
    backgroundColor: theme.colors.surface,
  },
  container: {
    flex: 1,
    width: "100%",
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
  },
});
