import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import DateTimePicker from "@react-native-community/datetimepicker";
import { Controller, useForm } from 'react-hook-form';
import colors from '../../config/colors';
import ErrorMessage from '../ErrorMessage';


const CustomDatePicker = ({control, name, label, mode = 'date', ...rest }) => {
    const [date, setDate] = useState(new Date());
    const [showPicker, setShowPicker] = useState(false);



    const toggleDatePicker = () => {
      setShowPicker(!showPicker);
    };
   
  return (
    <Controller
      control={control}
      name={name}
      // defaultValue={''} // Set a default value here if needed
      render={({ field: { onChange, value,onBlur },fieldState: { error }, }) => (
        <>
          {/* Display a label if provided */}
          
          {label && 
          <View style={[styles.inputLabel,{borderWidth:error? 1:0,borderColor:error? "red":"transparent"}]}>
          <Text style={styles.text}>{label}</Text>
          {!showPicker && (
            <Pressable onPress={()=>toggleDatePicker()}>
              <TextInput placeholder="dd/mm/yyyy" editable={false} value={value} />
            </Pressable>
          )}
          </View>
          }
          <ErrorMessage style={styles.error} error={error?.message} visible={error} />


          {/* Use the DatePicker component */}
         {showPicker &&  <DateTimePicker
            style={{ width: 200 }}
            value={date}
            mode={mode}
            onBlur={onBlur}
            onChange={({ type }, selectedDate) => {
              if (type == "set") {
                if (Platform.OS === "android") {
                  toggleDatePicker();
                  onChange(selectedDate.toDateString())
                }
              } else {
                toggleDatePicker();
              }
            }}
            {...rest}
          />}
        </>
      )}
    />
  )
}

export default CustomDatePicker

const styles = StyleSheet.create({
  inputLabel:{
    flexDirection:"row",
    gap:8,
    justifyContent:"space-between",
    alignItems:"center",
    paddingHorizontal:8,
    paddingVertical:10,
    borderRadius:8,
    backgroundColor:colors.light
  },
  text:{
    fontSize:16,
    color:colors.medium
  }
})