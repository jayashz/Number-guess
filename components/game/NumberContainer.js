import { StyleSheet, Text, View, Dimensions } from "react-native";
import Colors from "../../constants/colors";

function  NumberContainer ({children}){
return(
    <View style={styles.constainer}>
        <Text style={styles.number}>{children}</Text>
    </View>
)
}
export default NumberContainer;
const deviceWidth = Dimensions.get('window').width;
const styles = StyleSheet.create({
    constainer:{
        borderWidth:2,
        borderRadius:15,
        padding:deviceWidth<450 ? 12 : 24,
        margin:25,
        borderColor:Colors.primaryMoreDarker,
        alignItems:'center',
        justifyContent:'center',
    },
    number:{
        color: Colors.primary,
        fontWeight:'bold',
        fontSize:36,
        
    }
});