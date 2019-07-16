import React from "react";
import { Text, ImageBackground, StyleSheet } from "react-native";
import { images } from "../../../assets/images";

function Category(props) {
  return (
    <ImageBackground style={styles.wrapper} source={images[props.id]}>
      <Text style={styles.genre}>{props.name}</Text>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    width: 210,
    height: 80,
    borderRadius: 10,
    overflow: "hidden",
    justifyContent: "center",
    alignItems: "center"
  },
  genre: {
    color: "white",
    fontSize: 32,
    fontWeight: "bold",
    textShadowColor: "rgba(0, 0, 0, 0.75)",
    textShadowOffset: { width: -2, height: 2 },
    textShadowRadius: 10
  }
});

export default Category;
