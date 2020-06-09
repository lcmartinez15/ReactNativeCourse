import React, { useState } from "react";
import { Text, StyleSheet, Button, View, FlatList } from "react-native";
import ColorCounter from "../components/ColorCounter";

const COLORVARIANT = 15;

const SquareScreen = () => {
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);

  const setColor = (color, change) => {
    switch (color) {
      case "red":
        red + change > 255 || red + change < 0 ? null : setRed(red + change);
        return;
      case "green":
        green + change > 255 || green + change < 0
          ? null
          : setGreen(green + change);
        return;
      case "blue":
        blue + change > 255 || blue + change < 0
          ? null
          : setBlue(blue + change);
        return;

      default:
        break;
    }
  };

  return (
    <View>
      <ColorCounter
        color="Red"
        onIncrease={() => setColor("red", COLORVARIANT)}
        onDecrease={() => setColor("red", -1 * COLORVARIANT)}
      />
      <ColorCounter
        color="Blue"
        onIncrease={() => setColor("blue", COLORVARIANT)}
        onDecrease={() => setColor("blue", -1 * COLORVARIANT)}
      />
      <ColorCounter
        color="Green"
        onIncrease={() => setColor("green", COLORVARIANT)}
        onDecrease={() => setColor("green", -1 * COLORVARIANT)}
      />

      <View
        style={{
          height: 100,
          width: 100,
          backgroundColor: `rgb(${red}, ${green}, ${blue})`,
        }}
      ></View>
    </View>
  );
};

const randomRgb = () => {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);

  return `rgb(${red}, ${green}, ${blue})`;
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30,
  },
});

export default SquareScreen;
