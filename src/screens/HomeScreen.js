import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.text}>Hi laura! how are you</Text>
      <Button
        onPress={() => navigation.navigate("Components")}
        title="Go to componnents demo"
      ></Button>
      <Button
        onPress={() => navigation.navigate("List")}
        title="Go to List Demo"
      ></Button>
      {/* <TouchableOpacity onPress={() => console.log("press")}>
        <Text>Go to List Demo</Text>
      </TouchableOpacity> */}
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 50,
  },
});

export default HomeScreen;
