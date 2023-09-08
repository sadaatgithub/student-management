import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ImageInput from '../ImageInput'
import { Controller } from "react-hook-form";


const AppFormImagePicker = ({control,name,imageUri,label}) => {
  return (
    <Controller
        control={control}
        name={name}
        render={({field:{value,onChange,onBlur},fieldState:{error}})=>
        
        { 
            // console.log(value)
            
            return(
          
        <View>
            <Text>{label}</Text>
          <View style={styles.container}>
            {value && <ImageInput imageUri={value} name={name}/>}
    
          <ImageInput onChangeImage={onChange} name={name}/>
          </View>
        </View>
        )}
    }/>
   
  )
}

export default AppFormImagePicker

const styles = StyleSheet.create({
    container:{
        flexDirection:"row",
        gap:8,
        // justifyContent:"center",
        // alignItems:"center"
    }
})