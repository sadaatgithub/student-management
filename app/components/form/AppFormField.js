import { StyleSheet, Text, View } from "react-native";
import React from "react";
import AppTextInput from "./AppTextInput";
import { Controller } from "react-hook-form";
import ErrorMessage from "../ErrorMessage";

const AppFormField = ({ control, name, width, ...otherProps }) => {
  return (
    <>
      <Controller
        control={control}
        name={name}
        render={({
          field: { value, onChange, onBlur },
          fieldState: { error },
        }) => (
          <View style={styles.container}>
            <AppTextInput
              value={value}
              onBlur={onBlur}
              onChangeText={onChange}
              width={width}
              error={error}
              {...otherProps}

            />
            {/* <ErrorMessage error={error?.message} visible={error} /> */}
            <ErrorMessage style={styles.error} error={error?.message} visible={error} />
          </View>
        )}
      />
    </>
  );
};

export default AppFormField;

const styles = StyleSheet.create({
  container:{
    // borderWidth:1
  },
  error:{
    marginLeft:6
  }
});
