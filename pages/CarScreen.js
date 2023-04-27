import React, { useState } from "react";
import {
  Dimensions,
  Animated,
  View,
  Text,
  StyleSheet,
  Button,
  Image,
  TouchableHighlight,
} from "react-native";

function CarScreen({ navigation, route }) {
  //   const { car } = route.params;
  const { car } = "";

  const SCREEN_HEIGHT = Dimensions.get("window").height;
  const SCREEN_WIDTH = Dimensions.get("window").width;

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <TouchableHighlight onPress={() => navigation.navigate("Detail")}>
        <Image style={styles.carimg} source={require("../img/tesla2.png")} />
      </TouchableHighlight>
    </View>
  );
}

const styles = StyleSheet.create({
  carimg: {
    height: 200,
    resizeMode: "contain",
  },
});
export default CarScreen;
