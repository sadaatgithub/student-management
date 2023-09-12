import { StyleSheet, Text, View, ImageBackground, Button } from "react-native";
import React, { useContext, useEffect } from "react";
import AppButton from "../components/AppButton";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../config/colors";
import StoreContext from "../store/context";

const WelcomeScreen = ({navigation}) => {
  const {students,getStudents} = useContext(StoreContext)
  // console.log(students)
  
 
  return (
    <>
    {/* <StatusBar
      backgroundColor="#333" // Set your desired dark background color here
      barStyle="light-content" // Set to 'light-content' for white text/icons
    /> */}
    <ImageBackground
      style={styles.background}
      blurRadius={20}
      source={require("../assets/welcome.jpg")}
      
    >
      <View style={styles.welcomeContainer}>
        <MaterialCommunityIcons name="school" size={120} color={colors.secondary}/>
        <Text style={styles.text}>Student Registry</Text>

        
      </View>
      <View style={styles.btnContainer}>
            <AppButton title="Start" onPress={() => navigation.navigate("Main")} />

        </View>
        {/* <Button title="Get Students" onPress={getStudents}/> */}
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
    top:"25%",
    gap:20

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
