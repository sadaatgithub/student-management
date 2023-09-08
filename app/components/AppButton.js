import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import colors from "../config/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const AppButton = ({ title, onPress, color = "primary", style,icon}) => {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: colors[color] },style]}
      onPress={onPress}
    >
      {icon&& <MaterialCommunityIcons  name={icon} size={35} color="white" />}
      {title && <Text style={styles.text}>{title}</Text>}
    </TouchableOpacity>
  );
};

export default AppButton;

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    shadowColor:"gray",
    shadowOffset:5,
    
  },
  text: {
    color: colors.white,
    fontSize: 18,
    fontWeight:'bold',
    textTransform:"uppercase",
    letterSpacing:1
  },
});
