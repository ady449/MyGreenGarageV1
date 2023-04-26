import React, { useState } from "react";
import {
  View,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Animated,
} from "react-native";

const ShakeButton = ({ children }) => {
  const [animation] = useState(new Animated.Value(0));

  const handlePressIn = () => {
    Animated.timing(animation, {
      toValue: 1,
      duration: 600,
      useNativeDriver: true,
    }).start();
  };

  const handlePressOut = () => {
    Animated.spring(animation, {
      toValue: 0,
      friction: 5,
      useNativeDriver: true,
    }).start();
  };

  const interpolatedValue = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 10],
  });

  const animatedStyle = {
    transform: [{ translateX: interpolatedValue }],
  };

  return (
    <Animated.View onPressIn={handlePressIn} onPressOut={handlePressOut}>
      {children}
    </Animated.View>
  );
};

export default ShakeButton;
