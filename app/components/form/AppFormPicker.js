import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AppPicker from './AppPicker'
import { Controller } from 'react-hook-form'


const AppFormPicker = ({control,items,name,placeholder,width}) => {
  return (
    <Controller
    control={control}
    name={name}
    render={({field:{value,onChange,onBlur},fieldState:{error},})=>(
      <>
    <AppPicker 
            items={items}
            placeholder={placeholder} 
            selectedValue={value}
            onValueChange={onChange}
            width={width}
            onBlur={onBlur}
            
            />
             </>  
        )}/>
  )
}

export default AppFormPicker

const styles = StyleSheet.create({})