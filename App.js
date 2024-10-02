import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { ImageBackground, SafeAreaView, StyleSheet, Text, View } from "react-native";
import StartGameScreen from "./screens/StartGameScreen";
import { LinearGradient } from "expo-linear-gradient";
import GameScreen from "./screens/GameScreen";
import GameOverScreen from'./screens/GameOverScreen';
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
import { Platform } from "react-native";
export default function App() {
  const [userInp,setUserInp] = useState(null);
  const [gameOver,setGameOver] =useState(true);
  const [guessRounds,setGuessRounds] = useState(0);

 
  

  function loadingHandler(){
    return <AppLoading />
  }
  function pickedNumHandler(pickedNum){
    setUserInp(pickedNum);
    setGameOver(false);
  }
  function gameOverhandler(numOfGuess){
    setGuessRounds(numOfGuess);
    setGameOver(true);

  };
  function startNewGameHandler(){
    setUserInp(null);
    setGuessRounds(0);
  };
  let screen = <StartGameScreen onPick={pickedNumHandler} />;


  if(userInp){
    screen=<GameScreen userNum={userInp} onGameOver={gameOverhandler} />
  }

  if(gameOver && userInp){

    screen= <GameOverScreen userNum={userInp} guessRounds={guessRounds} onStartNewGame={startNewGameHandler} />
  }
  return (
    <LinearGradient
      style={styles.container}
      colors={["#E7F0DC","#658147"]}>
        <ImageBackground source={require('./images/Dice.jpg')} resizeMode="cover" style={{flex:1}} imageStyle={styles.imageBg}>
        <SafeAreaView style={styles.container}>
        {screen}
        </SafeAreaView>
        
        </ImageBackground>
      
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageBg:{
    opacity:0.45,
  }
});
