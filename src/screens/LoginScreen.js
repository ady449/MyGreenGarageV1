import React, { useState, useEffect } from "react";
import { TouchableOpacity, StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";
import Background from "../components/Background";
import Logo from "../components/Logo";
import Header from "../components/Header";
import Button from "../components/Button";
import Title from "../components/Title";
import TextInput from "../components/TextInput";
import BackButton from "../components/BackButton";
import { theme } from "../core/theme";
import { usernameValidator } from "../helpers/usernameValidator";
import { passwordValidator } from "../helpers/passwordValidator";
import { getStatusBarHeight } from "react-native-status-bar-height";

import { loginUser } from "../../api/node";

export default function LoginScreen({ navigation }) {
  const [username, setUsername] = useState({ value: "", error: "" });
  const [password, setPassword] = useState({ value: "", error: "" });
  const [auth, setAuth] = useState(false);

  useEffect(() => {
    // This effect will run whenever the value of `auth` changes
    if (auth === true) {
      //   console.log(typeof auth); // You will see the updated value of `auth` here
      // Perform any action you want after the state update is complete
      // For example, navigate to a different screen
      navigation.navigate("Home");
    }
  }, [auth, navigation]);

  const onLoginPressed = async () => {
    const usernameError = usernameValidator(username.value);
    const passwordError = passwordValidator(password.value);
    if (usernameError || passwordError) {
      setUsername({ ...username, error: usernameError });
      setPassword({ ...password, error: passwordError });
      return;
    }

    const authenticated = await loginUser(username.value, password.value);
    setAuth(authenticated);
  };

  return (
    <Background style={{ padding: 20, maxWidth: 340 }}>
      <BackButton
        goBack={navigation.goBack}
        style={{ position: "absolute", top: 10 + getStatusBarHeight() }}
      />

      <Logo />
      <Title>Login</Title>
      <TextInput
        label="username"
        returnKeyType="next"
        value={username.value}
        onChangeText={(text) => setUsername({ value: text, error: "" })}
        error={!!username.error}
        errorText={username.error}
        autoCapitalize="none"
        autoCompleteType="username"
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
      <View style={styles.forgotPassword}>
        <TouchableOpacity
          onPress={() => navigation.navigate("ResetPasswordScreen")}
        >
          <Text style={styles.forgot}>Forgot your password?</Text>
        </TouchableOpacity>
      </View>
      <Button mode="contained" onPress={onLoginPressed}>
        Login
      </Button>
      <View style={styles.row}>
        <Text>Don’t have an account? </Text>
        <TouchableOpacity onPress={() => navigation.replace("RegisterScreen")}>
          <Text style={styles.link}>Sign up</Text>
        </TouchableOpacity>
      </View>
    </Background>
  );
}

const styles = StyleSheet.create({
  forgotPassword: {
    width: "100%",
    alignItems: "flex-end",
    marginBottom: 24,
  },
  row: {
    flexDirection: "row",
    marginTop: 4,
  },
  forgot: {
    fontSize: 13,
    color: theme.colors.secondary,
  },
  link: {
    fontWeight: "bold",
    color: theme.colors.primary,
  },
});
