import React from "react";
import { Text, StyleSheet, View } from "react-native";

const BoxScreen = () => {
  return (
    <View style={styles.viewStyle}>
      <View style={styles.ViewStyleOne}></View>
      <View style={styles.ViewStyleTwo}></View>
      <View style={styles.ViewStyleThree}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    borderWidth: 3,
    borderColor: "black",
    //alignItems: "center",
    flexDirection: "row",
    height: 100,
    justifyContent: "space-between",
  },
  ViewStyleOne: {
    height: 50,
    width: 50,
    backgroundColor: "red",
    // borderWidth: 3,
    // borderColor: "red",
    // alignSelf: "flex-end",
    //flex: 1,
    // margin: 20,
  },
  ViewStyleTwo: {
    height: 50,
    width: 50,
    backgroundColor: "green",
    alignSelf: "flex-end",
    //marginTop: 50,
    // borderWidth: 3,
    // borderColor: "red",
    // flex: 2,
    // margin: 20,
  },
  ViewStyleThree: {
    height: 50,
    width: 50,
    backgroundColor: "purple",
    // borderWidth: 3,
    // borderColor: "red",
    // flex: 1,
    // margin: 20,
  },
});

export default BoxScreen;
