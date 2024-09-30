import React from "react";
import { View, Text, Pressable } from "react-native";
import { StyleSheet } from "react-native";
import Colors from '../../constants/colors'

const PrimaryBtn = ({ children,onPress }) => {
  
  return (
    <View style={styles.mainContainer}>
      <Pressable onPress={onPress} style={({pressed})=>pressed ? [styles.container,styles.btnPressed]: styles.container} android_ripple={{ color: Colors.primaryDarker }}>
        <Text style={styles.text}>{children}</Text>
      </Pressable>
    </View>
  );
};

export default PrimaryBtn;

const styles = StyleSheet.create({
  mainContainer: {
    overflow:'hidden',
    borderRadius:20
  },
  container: {
    backgroundColor: Colors.primary,
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 4,
    margin: 4,
    borderRadius:20,
  },
  text: {
    textAlign: "center",
    fontSize: 16,
    fontWeight:'bold'
  },
  btnPressed:{
    backgroundColor:Colors.primaryDarker,
  }
});
