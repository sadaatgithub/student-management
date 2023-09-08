import { StyleSheet, Text, View } from "react-native";
import React from "react";
import AppTextInput from "./AppTextInput";
import { Controller } from "react-hook-form";

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
          <>
            <AppTextInput
              value={value}
              onBlur={onBlur}
              onChangeText={onChange}
              width={width}
              {...otherProps}
            />
            {/* <ErrorMessage error={error?.message} visible={error} /> */}
          </>
        )}
      />
    </>
  );
};

export default AppFormField;

const styles = StyleSheet.create({});
