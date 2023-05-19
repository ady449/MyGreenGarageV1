import React from "react";
import TableView from "../stuff/TableView";
import {
  Animated,
  View,
  Text,
  StyleSheet,
  Dimensions,
  Button,
} from "react-native";
import { Divider } from "@react-native-material/core";
import Header from "../src/components/Header";
import { theme } from "../src/core/theme";
import BackButton from "../src/components/BackButton";
import Background from "../src/components/Background";

function DetailScreen({ navigation, route }) {
  //   const { car } = route.params;

  const { car } = "";
  const windowWidth = Dimensions.get("window").width;
  const circleRadius = 30;

  return (
    <Background>
      <Header>
        <BackButton goBack={navigation.goBack} />
      </Header>
      <View style={styles.container}>
        <Text style={styles.title}>Status</Text>
        <Divider style={{ marginTop: 30 }} variant="middle" />
        <TableView />
      </View>
    </Background>
  );
}

const styles = StyleSheet.create({
  backButton: {},

  header: {
    marginTop: 20,
    alignSelf: "center",
    backgroundColor: theme.colors.header,
    color: theme.colors.text,
    width: "100%",
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  title: {
    fontSize: 30,
    marginTop: 20,
  },

  text: {
    fontSize: 30,
    color: "#FFF",
  },
});

export default DetailScreen;
