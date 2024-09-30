import React from 'react'
import { StyleSheet,Text } from 'react-native'
import Colors from '../../constants/colors'
const ScreenTitle = ({children}) => {
  return (
    <Text style={styles.title}>{children}</Text>
  )
}

export default ScreenTitle

const styles= StyleSheet.create({
    title:{
        fontSize:25,
        fontWeight:"bold",
        color:'#059212',
        textAlign:'center',
        borderWidth:2,
        borderColor:Colors.primaryMoreDarker,
        padding:8,
        borderRadius:15,
    }
});