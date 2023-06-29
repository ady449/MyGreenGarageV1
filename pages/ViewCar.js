import React, { useMemo } from "react";
import _ from "lodash";

import { View, Dimensions, StyleSheet } from "react-native";
import Image360Viewer from "@hauvo/react-native-360-image-viewer";

const { width, height } = Dimensions.get("window");

const images = _.reverse([
  require("../img/car2/1.png"),
  require("../img/car2/2.png"),
  require("../img/car2/3.png"),
  require("../img/car2/4.png"),
]);

const App = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", marginLeft: width / 6 }}>
      <Image360Viewer
        srcset={images}
        width={width / 1.5}
        height={height / 1.5}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  viewer: {
    height: 230,
  },
});
export default App;
