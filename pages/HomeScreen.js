import React, { useRef, useState, useEffect, useCallback } from "react";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
  BackHandler,
  Animated,
} from "react-native";
import { AddCar } from "../src/screens";

import { fetchData } from "../api/node";
import Header from "../src/components/Header";
import { theme } from "../src/core/theme";
// import Background from "../src/components/Background";

// const CustomDrawerContent = (props) => {
//   return (
//     <DrawerContentScrollView {...props}>
//       <DrawerItemList {...props} />
//     </DrawerContentScrollView>
//   );
// };
const handlePressOut = () => {
  // Animated.spring(animation, {
  //   toValue: 0,
  //   friction: 10,
  //   useNativeDriver: true,
  // }).start();
};
const handlePressIn = () => {
  // Animated.timing(animation, {
  //   toValue: 2,
  //   duration: 4,
  //   useNativeDriver: true,
  // }).start();
};

const renderListItem = ({ item }) => (
  <TouchableOpacity
    style={styles.item}
    key={item.id}
    onPress={() => this.props.navigation.navigate("Car", { carIdName: item })}
  >
    <Animated.View>
      <View key={item.id}>
        <Text style={styles.text}>{item.brand + " " + item.model}</Text>
        <View style={styles.imageContainer}></View>
      </View>
    </Animated.View>
  </TouchableOpacity>
);

function Home({ navigation, route }) {
  const { userName } = route.params;
  const [items, setItems] = useState([]);
  const [data, setData] = useState([]);

  async function getData() {
    const newData = await fetchData(userName);
    setData(newData);
  }
  useEffect(() => {
    const disableGesture = navigation.addListener("beforeRemove", (e) => {
      // Block the gesture-enabled "go back" action
      if (e.data.action.type === "GO_BACK") {
        e.preventDefault();
      }
    });

    disableGesture;
    const intervalId = setInterval(() => {
      getData();
    }, 5000);
    return () => {
      clearInterval(intervalId);
    };
  }, [navigation]);
  return (
    <View>
      <Header>
        <Text style={[styles.text, { marginLeft: 10 }]}>Home</Text>
      </Header>

      <View style={styles.container}>
        <FlatList
          data={data}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.item}
              key={item.id}
              onPress={() => navigation.navigate("Car", { carIdName: item })}
            >
              <Animated.View>
                <View key={item.id}>
                  <Text style={styles.text}>
                    {item.brand + " " + item.model}
                  </Text>
                </View>
              </Animated.View>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item.id}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    marginTop: 20,
    alignSelf: "center",
    backgroundColor: theme.colors.header,
    color: theme.colors.text,
    width: "100%",
  },
  container: {
    padding: 20,
  },
  item: {
    backgroundColor: "#fff",
    padding: 20,
    marginBottom: 10,
    borderRadius: 10,
    // elevation: 3,
    flexDirection: "row",
    alignItems: "center",
    shadowColor: "green", // Set the shadow color here
    shadowOpacity: 0.5, // Set the opacity of the shadow
    shadowRadius: 5, // Set the radius of the shadow
    elevation: 3, // On Android, use elevation instead of shadow properties
  },
  text: {
    fontSize: 18,
    marginRight: 10,
  },
  imageContainer: {
    width: 30,
    height: 30,
    marginLeft: "auto",
    backgroundColor: "#fff",
    borderRadius: 50,
    elevation: 3,
    overflow: "hidden",
  },
  image: {
    width: 30,
    height: 30,
  },
});

const drawerStyles = StyleSheet.create({
  drawer: { shadowColor: "#000000", shadowOpacity: 0.8, shadowRadius: 3 },
  main: { paddingLeft: 3 },
});
export default Home;
