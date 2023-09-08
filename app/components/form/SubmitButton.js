import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AppButton from '../AppButton'


const SubmitButton = ({title,color,onPress}) => {
  return <AppButton title={title} onPress={onPress} color={color}/>
    
}

export default SubmitButton

const styles = StyleSheet.create({})