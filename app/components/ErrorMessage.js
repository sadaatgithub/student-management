import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AppText from './heading/AppText';

const ErrorMessage = ({error,visible,style}) => {
    if (!visible && !error) return null;
    return (
      <AppText style={[styles.error,style]}>{error}</AppText>
    )
  
}

export default ErrorMessage

const styles = StyleSheet.create({
    error:{
        color:"red",
        fontSize:16
    }
})