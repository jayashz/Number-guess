import React from "react";
import { StyleSheet, Text, View } from "react-native";
import ScreenTitle from "../components/ui/ScreenTitle";
import { Image } from "react-native";
import Colors from "../constants/colors";
import PrimaryBtn from "../components/ui/PrimaryBtn";
const GameOverScreen = ({ guessRounds, onStartNewGame, userNum }) => {
  return (
    <View style={style.mainContainer}>
      <ScreenTitle>Gameover!!</ScreenTitle>
      <View style={style.imgContainer}>
        <Image
          source={require("../images/giphy.gif")}
          style={{ width: "100%", height: "100%" }}
        />
      </View>
      <View>
        <Text style={style.desc}>
          Your phone took <Text style={style.descHighlight}>{guessRounds}</Text> rounds to
          guess your number <Text style={style.descHighlight}>{userNum}</Text>.
        </Text>
      </View>
      <PrimaryBtn onPress={onStartNewGame}>Start New Game</PrimaryBtn>
    </View>
  );
};

export default GameOverScreen;

const style = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  imgContainer: {
    width: 300,
    height: 300,
    marginTop: 40,
    borderRadius: 200,
    overflow: "hidden",
    borderWidth: 2,
  },
  desc: {
    fontFamily: "open-sans",
    fontSize: 24,
    marginVertical: 25,
    textAlign: "center",
    paddingHorizontal:10
  },
  descHighlight: {
    fontFamily: "open-sans-bold",
    color: Colors.highlight,
  },
});
