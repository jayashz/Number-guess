import React from 'react'
import { StyleSheet,Text } from 'react-native'
import Colors from '../../constants/colors';

const ScreenTitle = ({children}) => {
  return (
    <Text style={styles.title}>{children}</Text>
  )
}

export default ScreenTitle

const styles= StyleSheet.create({
    title:{
        fontFamily:'open-sans-bold',
        fontSize:25,
        color:Colors.highlight,
        textAlign:'center',
        borderWidth:2,
        borderColor:Colors.primaryMoreDarker,
        padding:8,
        borderRadius:15,
        maxWidth:'80%',
        width:300,
        marginTop:15
    }
});