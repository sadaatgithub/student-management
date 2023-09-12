import { StyleSheet, Text, View } from "react-native";
import React from "react";
import AppText from "./AppText";
import colors from "../../config/colors";

const StudentDetailHeading = ({ title }) => {
  return <AppText style={styles.text}>{title}</AppText>;
};

export default StudentDetailHeading;

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    marginBottom: 8,
    backgroundColor: colors.light,
    padding: 6,
    fontWeight:"bold",
    // color:colors.medium
  },
});
