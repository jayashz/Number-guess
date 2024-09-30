import React, { useState } from "react";
import { View, TextInput, Text, Alert } from "react-native";
import PrimaryBtn from "../components/PrimaryBtn";
import { StyleSheet } from "react-native";
const StartGameScreen = () => {
  const [enteredNum, setEnteredNum] = useState("");
  function numImpHandler(enteredText) {
    setEnteredNum(enteredText);
  }

  function resetHandler() {
    setEnteredNum("");
  }
  
  function confirmHandler() {
    const chosenNum = parseInt(enteredNum);
    if (isNaN(chosenNum) || chosenNum <= 0 || chosenNum > 99) {
      Alert.alert("Invalid input!!!", "Number has to be between 1 and 99", [
        { text: "Okay", style: "destructive", onPress: resetHandler },
      ]);
      return;
    }

    console.warn("Valid num");
  }
  return (
    <View style={styles.inpContainer}>
      <TextInput
        style={styles.input}
        maxLength={2}
        keyboardType="number-pad"
        value={enteredNum}
        onChangeText={numImpHandler}
      ></TextInput>
      <View style={styles.btnContainer1}>
        <View style={styles.btnContainer2}>
          <PrimaryBtn onPress={resetHandler}>Reset</PrimaryBtn>
        </View>
        <View style={styles.btnContainer2}>
          <PrimaryBtn onPress={confirmHandler}>Confirm</PrimaryBtn>
        </View>
      </View>
    </View>
  );
};

export default StartGameScreen;

const styles = StyleSheet.create({
  inpContainer: {
    marginHorizontal: 24,
    padding: 16,
    marginTop: 100,
    backgroundColor: "#E7F0DC",
    borderRadius: 8,
    elevation: 10,
    shadowColor: "black",
    shadowOpacity: 2,
    shadowOffset: { width: -2, height: 2 },
    shadowRadius: 5,
    shadowOpacity: 0.3,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    height: 50,
    width: 50,
    fontSize: 32,
    borderBottomColor: "#658147",
    borderBottomWidth: 2,
    color: "#658147",
    marginVertical: 8,
    fontWeight: "semibold",
    textAlign: "center",
  },
  btnContainer1: {
    flexDirection: "row",
  },
  btnContainer2: {
    flex: 1,
  },
});
