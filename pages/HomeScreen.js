import React, { useRef, useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
  Animated,
} from "react-native";
import ShakeButton from "../stuff/ShakeBttn";
import { fetchData } from "../api/node";
import Header from "../src/components/Header";
import { theme } from "../src/core/theme";
import Background from "../src/components/Header";

const HomeScreen = ({ navigation }) => {
  const [items, setItems] = useState([]);
  const [data, setData] = useState([]);
  const [rotation] = useState(new Animated.Value(0));
  const [animation] = useState(new Animated.Value(0));

  const handlePressIn = () => {
    Animated.timing(animation, {
      toValue: 2,
      duration: 4,
      useNativeDriver: true,
    }).start();
  };

  const handlePressOut = () => {
    Animated.spring(animation, {
      toValue: 0,
      friction: 10,
      useNativeDriver: true,
    }).start();
  };

  const interpolatedValue = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 12],
  });

  const shakeValue = useState(new Animated.Value(2));

  const startShake = () => {
    Animated.sequence([
      Animated.timing(shakeValue, {
        toValue: 10,
        duration: 100,
        useNativeDriver: true,
      }),
      Animated.timing(shakeValue, {
        toValue: -10,
        duration: 100,
        useNativeDriver: true,
      }),
      Animated.timing(shakeValue, {
        toValue: 10,
        duration: 100,
        useNativeDriver: true,
      }),
      Animated.timing(shakeValue, {
        toValue: 0,
        duration: 100,
        useNativeDriver: true,
      }),
    ]).start();
  };

  const animatedStyle = {
    transform: [{ translateX: startShake }],
  };

  const renderListItem = ({ item }) => (
    <TouchableOpacity
      style={styles.item}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      key={item.id}
      onPress={() => navigation.navigate("Car", { car: item.name })}
    >
      <Animated.View style={{ animatedStyle }}>
        <View key={item.id}>
          <Text style={styles.text}>{item.brand + " " + item.model}</Text>
          <View style={styles.imageContainer}>
            <Animated.Image
              source={require("../assets/favicon.png")}
              style={{
                ...styles.image,
                transform: [{ rotate: interpolatedRotation }],
              }}
            />
          </View>
        </View>
      </Animated.View>
    </TouchableOpacity>
  );

  useEffect(() => {
    // Definim o funcție async pentru a încărca datele dintr-un API
    async function getData() {
      const newData = await fetchData();
      setData(newData);
    }
    getData();

    const intervalId = setInterval(() => {
      Animated.timing(rotation, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }).start(() => {
        rotation.setValue(0);
      });
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const interpolatedRotation = rotation.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "360deg"],
  });
  return (
    <View
      style={{
        background: {
          flex: 1,
          width: "100%",
          backgroundColor: theme.colors.surface,
        },
      }}
    >
      <Header>
        <Text style={[styles.text, { marginLeft: 10 }]}>Home</Text>
      </Header>
      <View style={styles.container}>
        <FlatList
          data={data}
          renderItem={renderListItem}
          keyExtractor={(item) => item.id}
        />
      </View>
    </View>
  );
};

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
export default HomeScreen;
