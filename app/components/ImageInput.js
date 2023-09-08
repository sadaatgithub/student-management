import {
  StyleSheet,
  Image,
  View,
  TouchableWithoutFeedback,
  Alert,
} from "react-native";
import React,{useEffect} from "react";
import * as ImagePicker from "expo-image-picker";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../config/colors";

const ImageInput = ({imageUri,onChangeImage}) => {
    // console.log(imageUri)
const requestPermission = async () =>{
    const {granted} = await ImagePicker.requestCameraPermissionsAsync()
    if(!granted){
        alert("You need to enable permission to access the library")
    }
}
const selectImage = async () =>{
    try {
        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            quality: 0.5,
          });
          if (!result.canceled) {
            onChangeImage(result.assets[0].uri);
          }
        
    } catch (error) {
        console.log("error");
    }
}

useEffect(() => {
  
requestPermission()
  
}, [])


  return (
    <TouchableWithoutFeedback onPress={selectImage}>
      <View style={styles.container}>
        {!imageUri && (
          <MaterialCommunityIcons
            name="camera"
            size={40}
            color={colors.medium}
          />
        )}
        {/* make changes in source while dealing with server images */}
        {imageUri && <Image source={{uri:imageUri}} style={styles.image}  />}
      </View>
    </TouchableWithoutFeedback>
  );
};

export default ImageInput;

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.light,
        borderRadius: 15,
        justifyContent: "center",
        alignItems: "center",
        height: 100,
        width: 100,
        overflow: "hidden",
      },
      image: {
        width: "100%",
        height: "100%",
      },
});
