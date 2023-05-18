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

function DetailScreen({ navigation, route }) {
  //   const { car } = route.params;

  const { car } = "";
  const windowWidth = Dimensions.get("window").width;
  const circleRadius = 30;

  return (
    <>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text style={styles.title}>Status</Text>
        <Divider style={{ marginTop: 60 }} variant="middle" />
        <TableView />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#121212",
  },
  img: {
    height: "50%",
    width: "120%",
    resizeMode: "contain",
  },
  title: {
    fontSize: 30,
    marginTop: 20,
  },
  detail: {
    color: "#FFF",

    fontSize: 18,
    textAlign: "center",
    paddingHorizontal: 20,
    lineHeight: 30,
    marginTop: 30,
  },
  btn: {
    marginTop: 80,
    backgroundColor: "#E2443B",
    paddingHorizontal: 140,
    paddingVertical: 10,
    borderRadius: 30,
  },
  text: {
    fontSize: 30,
    color: "#FFF",
  },
});

export default DetailScreen;
