import { StyleSheet, Text, View,Input,KeyboardAvoidingView, TextInput } from 'react-native'
import React from 'react'
import { MaterialCommunityIcons } from "@expo/vector-icons";
import defaultStyles from "../../config/styles"


const AppTextInput = ({icon,width="100%", ...otherProps}) => {
  return (
    <KeyboardAvoidingView>
      <View style={[styles.container, {width}]}>
        {icon && (
            <MaterialCommunityIcons 
               name={icon}
               size={20}
               color={defaultStyles.colors.medium}
               style={styles.icon}
               />
        )}
        <TextInput style={defaultStyles.text} {...otherProps}/>
      </View>
    </KeyboardAvoidingView>
  )
}

export default AppTextInput

const styles = StyleSheet.create({
    container: {
        backgroundColor: defaultStyles.colors.light,
        flexDirection: "row",
        // justifyContent:"center",
        alignItems: "center",
        padding: 12,
        marginVertical: 10,
        borderRadius: 8,
        gap:10
      },
      icon: {
        fontSize: 10,
      },
      
})