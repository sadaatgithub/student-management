import {
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  Image,
} from "react-native";
import React from "react";
import AppText from "./heading/AppText";
import colors from "../config/colors";
import ProgressBar from "react-native-progress/Bar";
// import { TouchableWithoutFeedback } from 'react-native-gesture-handler'
import { MaterialCommunityIcons } from "@expo/vector-icons";
const Card = ({ title, subtitle, imageUrl, onPress }) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.cardContainer}>
        <View style={styles.card}>
          <Image source={imageUrl} style={styles.cardImage} />
          <View style={styles.detailsContainer}>
            <AppText style={styles.title}>{title}</AppText>
            <AppText style={styles.subTitle}>{subtitle}</AppText>
            <View style={styles.progress}>
            <ProgressBar
              progress={0.6}
              width={90}
              height={4}
              borderWidth={0}
              style={{ marginTop: 8 }}
              unfilledColor={colors.light}
              color={colors.primary}
            />
            <Text style={styles.progressText}>45% completed</Text>
            </View>
          </View>
          <View style={styles.icon}>
            <MaterialCommunityIcons
              name="chevron-right"
              size={35}
              color={colors.medium}
              borderRadius={4}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Card;

const styles = StyleSheet.create({
  cardContainer: {
    padding: 12,
    marginBottom: 24,
    flex: 1,
    width: "auto",
    height: 110,
    justifyContent: "center",
  },
  card: {
    padding: 16,
    borderRadius: 12,
    backgroundColor: colors.white,
    gap: 10,
    overflow: "hidden",
    flexDirection: "row",
    borderColor: colors.light,
    borderWidth: 1,
    alignItems: "center",
    shadowColor: "gray",
    shadowOffset: {
      width: 2,
      height: 8,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 2,
  },
  cardImage: {
    width: 60,
    height: 60,
    borderRadius: 50,
  },
  title: {
    // marginBottom: 7,
    fontSize: 18,
    fontWeight: 500,
    color: colors.medium,
  },
  subTitle: {
    color: colors.secondary,
    fontWeight: "bold",
    fontSize: 14,
  },
  detailsContainer: {
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  icon: {
    position: "absolute",
    right: 5,
    top: "50%",
  },
  progress:{
    flexDirection:"row",
    alignContent:"center",
    gap:12,
    alignItems:"center"
  },
  progressText:{
    fontSize:14,
    color:colors.medium
  }
});
