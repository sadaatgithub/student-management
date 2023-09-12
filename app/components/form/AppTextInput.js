import { StyleSheet, Text, View,Input,KeyboardAvoidingView, TextInput } from 'react-native'
import React from 'react'
import { MaterialCommunityIcons } from "@expo/vector-icons";
import defaultStyles from "../../config/styles"
import colors from '../../config/colors';


const AppTextInput = ({icon,width="100%",iconSize=20,error, ...otherProps}) => {
  return (
    <KeyboardAvoidingView>
      <View style={[styles.container, {width,borderWidth:error? 1:0,borderColor:error? "red":"transparent"}]}>
        {icon && (
            <MaterialCommunityIcons 
               name={icon}
               size={iconSize}
               color={defaultStyles.colors.medium}
               style={styles.icon}
               />
        )}
        <TextInput style={[defaultStyles.text,styles.input]} {...otherProps}/>
      </View>
    </KeyboardAvoidingView>
  )
}

export default AppTextInput

const styles = StyleSheet.create({
    container: {
        backgroundColor: defaultStyles.colors.light,
        flexDirection: "row",
        alignItems: "center",
        padding: 12,
        borderRadius: 8,
        gap:10,
        // borderWidth:error? 1:0,
        // borderColor:"red",
      },
      icon: {
        // fontSize: 10,
      },
      input:{
        // borderWidth:1,
        width:"100%",
        fontSize:16,
        color:colors.medium
      }
      
})