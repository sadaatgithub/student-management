import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import DateTimePicker from "@react-native-community/datetimepicker";
import AppText from "../heading/AppText";
import { Controller } from "react-hook-form";
import colors from "../../config/colors";

const AppDatePicker = ({
  control,
  name,
  showPicker,
  // date,
  onPress,
  ...otherProps
}) => {
  return (
    <Controller
      control={control}
      name={name}
      render={({
        field: { value, onChange, onBlur },
        fieldState: { error },
      }) =>
      { 
        return(
        <View style={styles.container}>
          <AppText style={styles.text}>DOB</AppText>
          {!showPicker && (
            <Pressable onPress={onPress}>
              <TextInput placeholder="dd/mm/yyyy" editable={false} value={value} />
            </Pressable>
          )}
          {showPicker && <DateTimePicker textColor="black"  mode="date" {...otherProps} />}
        </View>
      )}
    }
    />
  );
};

export default AppDatePicker;

const styles = StyleSheet.create({
  container:{
    backgroundColor:colors.light,
    paddingHorizontal: 12,
    paddingVertical:10,
    flexDirection:"row",
    gap:10,
    borderRadius:8,
    alignItems:"center"
  },
  text:{
    fontSize:16
  }
});
