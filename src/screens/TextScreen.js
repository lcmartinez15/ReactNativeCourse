import React, { useState } from "react";
import { Text, StyleSheet, View, TextInput } from "react-native";
import Imagedetail from "../components/Imagedetail";

const TextScreen = () => {
  const [name, setName] = useState("");
  const [pass, setPass] = useState("");
  return (
    <View>
      <Text>Enter name:</Text>
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        value={name}
        onChangeText={(newValue) => setName(newValue)}
      />
      <Text>My Name is {name}</Text>

      <Text>Enter Password:</Text>
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        value={pass}
        onChangeText={(newValue) => setPass(newValue)}
      />
      {pass.length < 5 ? (
        <Text>Password must be longer than 5 characters</Text>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    margin: 15,
    borderColor: "black",
    borderWidth: 1,
  },
});

export default TextScreen;
