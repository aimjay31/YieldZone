import React, { useEffect } from "react";
import { View, Image, StyleSheet, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const LoadingScreen = ({ onFinish }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onFinish();
    }, 2500); // 2.5 seconds splash time

    return () => clearTimeout(timer);
  }, []);

  return (
    <LinearGradient
      colors={["#159947", "#06373A"]}
      style={styles.container}
    >
      <Image
        source={require("../assets/logo3.png")}
        style={styles.logo}
        resizeMode="contain"
      />
      <Text style={styles.text}>YieldZone</Text>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 180,
    height: 180,
  },
  text: {
    marginTop: 20,
    color: "white",
    fontSize: 28,
    fontWeight: "bold",
  },
});

export default LoadingScreen;
