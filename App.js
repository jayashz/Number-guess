import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { ImageBackground, SafeAreaView, StyleSheet, Text, View } from "react-native";
import StartGameScreen from "./screens/StartGameScreen";
import { LinearGradient } from "expo-linear-gradient";
import GameScreen from "./screens/GameScreen";
import GameOverScreen from'./screens/GameOverScreen';

export default function App() {
  const [userInp,setUserInp] = useState(null);
  const [gameOver,setGameOver] =useState(true);
  

  function pickedNumHandler(pickedNum){
    setUserInp(pickedNum);
    setGameOver(false);
  }
  function gameOverhandler(){
    setGameOver(true);
  };
  let screen = <StartGameScreen onPick={pickedNumHandler} />;


  if(userInp){
    screen=<GameScreen userNum={userInp} onGameOver={gameOverhandler} />
  }

  if(gameOver && userInp){
    screen= <GameOverScreen />
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
