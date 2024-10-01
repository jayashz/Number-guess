import React, { useState } from "react";
import { Alert, ScrollView, Text, View } from "react-native";
import { StyleSheet } from "react-native";
import ScreenTitle from "../components/ui/ScreenTitle";
import NumberContainer from "../components/game/NumberContainer";
import PrimaryBtn from "../components/ui/PrimaryBtn";
import Colors from "../constants/colors";
import { useEffect } from "react";
import Card from "../components/ui/Card";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import Entypo from "@expo/vector-icons/Entypo";
import Guess from "../components/ui/Guess";

let minBoundary = 1;
let maxBoundary = 100;

function randomNumberGenerator(min, max, exclude) {
  const randNum = Math.floor(Math.random() * (max - min)) + min;
  return randNum;
}

const GameScreen = ({ userNum, onGameOver }) => {
  const initialGuess = randomNumberGenerator(1, 100, userNum);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  const [guessRounds, setGuessRounds] = useState([initialGuess]);

  useEffect(() => {
    if (currentGuess == userNum) {
      //Only executes when the game is over
      minBoundary = 1;
      maxBoundary = 100;
      onGameOver(guessRounds.length);
    }
  }, [currentGuess, userNum, onGameOver]);

  // useEffect(()=>{
  //   minBoundary=1;
  //   maxBoundary=2;
  // },[]);
  function nextGuessHandler(direc) {
    if (
      (direc === "lower" && currentGuess < userNum) ||
      (direc === "higher" && currentGuess > userNum)
    ) {
      Alert.alert("Lier!!", "The god says ur lying.", [{ text: "Sorry" }]);
      return;
    }
    if (direc === "lower") {
      maxBoundary = currentGuess;
    } else {
      minBoundary = currentGuess + 1;
    }

    const newRandomNum = randomNumberGenerator(minBoundary, maxBoundary, 0);
    setCurrentGuess(newRandomNum);
    setGuessRounds((prevGuessRounds) => [newRandomNum,...prevGuessRounds]);
  }

  return (
    <View style={styles.screen}>
      <ScreenTitle>Your phone's guess</ScreenTitle>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card>
        <View style={styles.textContainer}>
          <Text style={styles.text}>Guess higher or lower?</Text>
          <View style={styles.btnContainer}>
            <View style={styles.btnContainer2}>
              <PrimaryBtn onPress={nextGuessHandler.bind(this, "higher")}>
                <FontAwesome6 name="add" size={24} color="black" />
              </PrimaryBtn>
            </View>
            <View style={styles.btnContainer2}>
              <PrimaryBtn onPress={nextGuessHandler.bind(this, "lower")}>
                <FontAwesome6 name="minus" size={24} color="black" />
              </PrimaryBtn>
            </View>
          </View>
        </View>
      </Card>
      <ScrollView style={{marginTop:4}}>
        {guessRounds.map(guess=><Guess key={guess}>{guess}</Guess>)}
      </ScrollView>
    </View>
  );
};

export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
  },
  textContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  btnContainer: {
    flexDirection: "row",
  },
  btnContainer2: {
    flex: 1,
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    color: Colors.primary,
    marginBottom: 20,
  },
});
