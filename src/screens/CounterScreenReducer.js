import React, { useState, useReducer } from "react";
import { Text, StyleSheet, View, Button } from "react-native";
import Imagedetail from "../components/Imagedetail";

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { ...state, counter: state.counter + 1 };
    case "decrement":
      return { ...state, counter: state.counter - 1 };
    default:
      return state;
  }
};

const CounterScreenReducer = () => {
  const [state, dispatch] = useReducer(reducer, { counter: 0 });
  const { counter } = state;

  return (
    <View>
      <Button
        title="increment"
        onPress={() => {
          dispatch({ type: "increment" });
        }}
      ></Button>
      <Button
        title="decrement"
        onPress={() => {
          dispatch({ type: "decrement" });
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

export default CounterScreenReducer;
