import React from 'react'
import { StyleSheet,View } from 'react-native'

const Card = ({children}) => {
  return (
    <View style={styles.inpContainer}>
        {children}
    </View>
  )
}

export default Card

const styles=StyleSheet.create({
    inpContainer: {
        marginHorizontal: 24,
        padding: 16,
        marginTop: 50,
        backgroundColor: "#E7F0DC",
        borderRadius: 16,
        elevation: 10,
        shadowColor: "black",
        shadowOpacity: 2,
        shadowOffset: { width: -2, height: 2 },
        shadowRadius: 5,
        shadowOpacity: 0.3,
        justifyContent: "center",
        alignItems: "center",
        opacity:0.95
      },
});