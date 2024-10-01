import React, { useState } from "react";
import { View, TextInput, Text, Alert } from "react-native";
import PrimaryBtn from "../components/ui/PrimaryBtn";
import { StyleSheet } from "react-native";
import Colors from "../constants/colors";
import ScreenTitle from "../components/ui/ScreenTitle";
import Card from "../components/ui/Card";
const StartGameScreen = ({ onPick }) => {
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

    onPick(enteredNum);
  }
  return (
    <View style={styles.rootContainer}>
      <ScreenTitle>Guess The Number</ScreenTitle>
      <Card>
        <Text style={{fontSize:24, fontFamily:'open-sans-bold',color:Colors.primary}}>Enter your number:</Text>
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
      </Card>
    </View>
  );
};

export default StartGameScreen;

const styles = StyleSheet.create({
  rootContainer:{
    flex:1,
    marginTop:100,
    alignItems:'center'
  },
  
  input: {
    height: 50,
    width: 50,
    fontSize: 32,
    borderBottomColor: Colors.primary,
    borderBottomWidth: 2,
    color: Colors.primary,
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
