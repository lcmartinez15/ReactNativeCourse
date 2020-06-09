import React from "react";
import { View, Text, StyleSheet, Image, Button } from "react-native";

const ColorCounter = ({ color, onIncrease, onDecrease }) => {
  return (
    <View>
      <Text>{color}</Text>
      <Button
        onPress={() => onIncrease()}
        title={`Increment ${color}`}
      ></Button>
      <Button
        onPress={() => onDecrease()}
        title={`Decrement ${color}`}
      ></Button>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30,
  },
});

export default ColorCounter;
