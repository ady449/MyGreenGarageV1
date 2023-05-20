import React, { useState, useEffect } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { Text } from "react-native-paper";
import Background from "../components/Background";
import Logo from "../components/Logo";
import Header from "../components/Header";
import Button from "../components/Button";
import Title from "../components/Title";
import TextInput from "../components/TextInput";
import BackButton from "../components/BackButton";
import { theme } from "../core/theme";
import { emailValidator } from "../helpers/emailValidator";
import { passwordValidator } from "../helpers/passwordValidator";
import { nameValidator } from "../helpers/nameValidator";
import { registerUser } from "../../api/node";
import { getStatusBarHeight } from "react-native-status-bar-height";

export default function RegisterScreen({ navigation }) {
  const [username, setUsername] = useState({ value: "", error: "" });
  const [email, setEmail] = useState({ value: "", error: "" });
  const [password, setPassword] = useState({ value: "", error: "" });
  const [register, setRegister] = useState(false);
  const [errorText, setError] = useState("");

  useEffect(() => {
    // This effect will run whenever the value of `register` changes

    if (register === true) {
      //   console.log(typeof register); // You will see the updated value of `register` here
      // Perform any action you want after the state update is complete
      // For exampregisterUserle, navigate to a different screen
      navigation.navigate("LoginScreen");
    }
  }, [register, navigation]);
  const onSignUpPressed = async () => {
    const usernameError = nameValidator(username.value);
    const emailError = emailValidator(email.value);
    const passwordError = passwordValidator(password.value);
    if (emailError || passwordError || usernameError) {
      setUsername({ ...username, error: usernameError });
      setEmail({ ...email, error: emailError });
      setPassword({ ...password, error: passwordError });
      return;
    }

    const registerCheck = await registerUser(
      username.value,
      password.value,
      email.value
    );
    if (registerCheck === false) {
      setError(true);
    }
    setRegister(registerCheck);
  };

  return (
    <Background style={{ padding: 20, maxWidth: 340 }}>
      <BackButton
        goBack={navigation.goBack}
        style={{ position: "absolute", top: 10 + getStatusBarHeight() }}
      />
      <Logo />

      <Title>Create Account</Title>

      {errorText ? <Text style={styles.error}>User already exist!</Text> : null}

      <TextInput
        label="Username"
        returnKeyType="next"
        value={username.value}
        onChangeText={(text) => setUsername({ value: text, error: "" })}
        error={!!username.error}
        errorText={username.error}
      />
      <TextInput
        label="Email"
        returnKeyType="next"
        value={email.value}
        onChangeText={(text) => setEmail({ value: text, error: "" })}
        error={!!email.error}
        errorText={email.error}
        autoCapitalize="none"
        autoCompleteType="email"
        textContentType="emailAddress"
        keyboardType="email-address"
      />
      <TextInput
        label="Password"
        returnKeyType="done"
        value={password.value}
        onChangeText={(text) => setPassword({ value: text, error: "" })}
        error={!!password.error}
        errorText={password.error}
        secureTextEntry
      />
      <Button
        mode="contained"
        onPress={onSignUpPressed}
        style={{ marginTop: 24 }}
      >
        Sign Up
      </Button>
      <View style={styles.row}>
        <Text>Already have an account? </Text>
        <TouchableOpacity onPress={() => navigation.replace("LoginScreen")}>
          <Text style={styles.link}>Login</Text>
        </TouchableOpacity>
      </View>
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
