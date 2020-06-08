import React from "react";
import { Text, StyleSheet } from "react-native";

const ComponentScreen = () => {
  return <Text style={styles.textStyle}>this is a new component </Text>;
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30,
  },
});

export default ComponentScreen;
