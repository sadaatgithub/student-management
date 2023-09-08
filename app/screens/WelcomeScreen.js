import { StyleSheet, Text, View, ImageBackground } from "react-native";
import React from "react";
import AppButton from "../components/AppButton";
import MainNavigator from "../navigation/MainNavigator";
import { StatusBar } from 'react-native';
const WelcomeScreen = ({navigation}) => {
  return (
    <>
    {/* <StatusBar
      backgroundColor="#333" // Set your desired dark background color here
      barStyle="light-content" // Set to 'light-content' for white text/icons
    /> */}
    <ImageBackground
      style={styles.background}
      blurRadius={20}
      source={require("../assets/welcome_2.jpg")}
      
    >
      <View style={styles.welcomeContainer}>
        <Text style={styles.text}>Welcome to Student Management</Text>
        
      </View>
      <View style={styles.btnContainer}>
            <AppButton title="Start" onPress={() => navigation.navigate("Main")} />

        </View>
    </ImageBackground>
    </>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  welcomeContainer: {
    justifyContent: "space-between",
    alignItems: "center",
    width:'100%',
    top:"50%"

  },
  text: {
    color: "#fff",
    fontSize: 35,
    fontWeight: "bold",
    textAlign: "center",
    alignSelf:"center",
    // textShadowColor:"gray"
  },
  btnContainer:{
    width:'100%',
    paddingHorizontal:10,
    marginTop:"auto",
    marginBottom:"10%"
  }
});
