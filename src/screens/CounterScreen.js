import React, { useState } from "react";
import { Text, StyleSheet, View, Button } from "react-native";
import Imagedetail from "../components/Imagedetail";

const CounterScreen = () => {
  const [counter, setCounter] = useState(0);

  return (
    <View>
      <Button
        title="increment"
        onPress={() => {
          setCounter(counter + 1);
        }}
      ></Button>
      <Button
        title="decrement"
        onPress={() => {
          setCounter(counter - 1);
        }}
      ></Button>
      <Text style={styles.textStyle}>Current Counter {counter}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30,
  },
});

export default CounterScreen;
