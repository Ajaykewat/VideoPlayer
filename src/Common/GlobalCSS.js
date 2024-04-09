import { StyleSheet, View } from "react-native";


const  FlexBox = ({children,style}) =>(
    <View style={[styles.flexBox,style]}>
{children}
    </View>
)




export {
    FlexBox
}
 const styles = StyleSheet.create({
    flexBox:{
      flexDirection:"row",
      justifyContent:"flex-start",
      alignItems:"center"
    }
})