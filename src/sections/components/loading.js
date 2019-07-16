import React from "react";
import {
  View,
  Image,
  ImageBackground,
  StyleSheet,
  ActivityIndicator
} from "react-native";

function Loading(props) {
  return (
    <ImageBackground
      style={styles.container}
      source={require("../../../assets/welcome_background.png")}
    >
      <Image source={require("../../../assets/logo.png")} style={styles.logo} />
      <ActivityIndicator />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    height: "100%",
    resizeMode: "contain"
  },
  logo: {
    width: 140,
    height: 70,
    resizeMode: "contain",
    marginBottom: 10,
    marginTop: 180
  }
});

export default Loading;
