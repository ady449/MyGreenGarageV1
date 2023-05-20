import React from "react";
import Background from "../components/Background";
import Logo from "../components/Logo";
import Header from "../components/Header";
import Button from "../components/Button";
import Paragraph from "../components/Paragraph";
import Title from "../components/Title";

export default function StartScreen({ navigation }) {
  return (
    <Background style={{ padding: 20, maxWidth: 340 }}>
      <Logo />

      <Title>Welcome!</Title>

      <Paragraph>The easiest way to start manage you garage</Paragraph>
      <Button
        mode="contained"
        onPress={() => navigation.navigate("LoginScreen")}
      >
        Login
      </Button>
      <Button
        mode="outlined"
        onPress={() => navigation.navigate("RegisterScreen")}
      >
        Sign Up
      </Button>
    </Background>
  );
}
