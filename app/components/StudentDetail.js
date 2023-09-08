import { StyleSheet, Text, View } from "react-native";
import React from "react";
import AppText from "./heading/AppText";
import colors from "../config/colors";

const StudentDetail = ({ label, value }) => {
  return (
    <View style={styles.textDetailContainer}>
      <AppText style={styles.text}>
        {label} {"  "}
      </AppText>
      <AppText style={styles.text}>{value}</AppText>
    </View>
  );
};

export default StudentDetail;

const styles = StyleSheet.create({
  textDetailContainer: {
    flexDirection: "row",
    paddingHorizontal: 10,
    paddingVertical: 6,
  },
  text:{
    color:colors.medium,
    width: "50%",
    fontSize:16
  }
});
