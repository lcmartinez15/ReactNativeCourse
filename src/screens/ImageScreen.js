import React from "react";
import { Text, StyleSheet, View } from "react-native";
import Imagedetail from "../components/Imagedetail";

const ImageScreen = () => {
  return (
    <View>
      <Imagedetail
        title="Forest"
        imageUrl={require("../../assets/forest.jpg")}
        score={9}
      />
      <Imagedetail
        title="Beach"
        imageUrl={require("../../assets/beach.jpg")}
        score={5}
      />
      <Imagedetail
        title="Mountain"
        imageUrl={require("../../assets/mountain.jpg")}
        score={7}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30,
  },
});

export default ImageScreen;
