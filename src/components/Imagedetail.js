import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const Imagedetail = ({ title, imageUrl, score }) => {
  return (
    <View>
      <Image source={imageUrl}></Image>
      <Text style={styles.textStyle}>{title}</Text>
      <Text style={styles.textStyle}>Score: {score}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30,
  },
});

export default Imagedetail;
