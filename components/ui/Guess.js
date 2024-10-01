import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import Card from "./Card";
import Colors from "../../constants/colors";
const Guess = ({ children }) => {
  return (
    <Card>

        <Text style={style.text}>
          Phone's guess:
          <Text style={{ fontFamily: "open-sans-bold" }}> {children}</Text>
        </Text>

    </Card>
  );
};

export default Guess;
const style = StyleSheet.create({
  text: {
    fontFamily: "open-sans",
    color: Colors.highlight,
  },
});
