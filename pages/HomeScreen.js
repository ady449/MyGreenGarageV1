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
    transform: [{ translateX: shakeValue }],
  };

  const renderListItem = ({ item }) => (
    <TouchableOpacity
      style={styles.item}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      key={item.id}
      onPress={() => navigation.navigate("Car", { car: item.name })}
    >
      <Animated.View style={{ transform: [{ translateX: shakeValue }] }}>
        <View key={item.id}>
          <Text style={styles.text}>{item.name}</Text>
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
      setData(newData.data);
      console.log(newData.data[0]);
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
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderListItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5FCFF",
    padding: 20,
  },
  item: {
    backgroundColor: "#fff",
    padding: 20,
    marginBottom: 10,
    borderRadius: 10,
    elevation: 3,
    flexDirection: "row",
    alignItems: "center",
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
