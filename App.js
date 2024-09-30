import { StatusBar } from "expo-status-bar";
import React from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import StartGameScreen from "./screens/StartGameScreen";
import { LinearGradient } from "expo-linear-gradient";
export default function App() {
  return (
    <LinearGradient
      style={styles.container}
      colors={["#658147", "#E7F0DC"]}>
        <ImageBackground source={require('./images/Dice.jpg')} resizeMode="cover" style={{flex:1}} imageStyle={styles.imageBg}>
        <StartGameScreen />
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
