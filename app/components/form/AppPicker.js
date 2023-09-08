import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Picker } from "@react-native-picker/picker";
import AppText from "../heading/AppText";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import defaultStyles from "../../config/styles";
import colors from "../../config/colors";

const AppPicker = ({ icon, placeholder, items, width, ...otherProps }) => {
  return (
    <View
      style={styles.container}
    >
      <View style={{ flexDirection: "row", alignItems: "center", gap: 6 }}>
        {icon && (
          <MaterialCommunityIcons
            name={icon}
            size={20}
            color={defaultStyles.colors.medium}
            stye={styles.icon}
          />
        )}
        <AppText>{placeholder}</AppText>
      </View>
      <Picker
        dropdownIconRippleColor="lightblue"
        prompt={`Choose ${placeholder}`}
        {...otherProps}
        style={{ width: 150 }}
      >
        {items.map((item) => (
          <Picker.Item key={item.value} label={item.label} value={item.value} />
        ))}
      </Picker>
    </View>
  );
};

export default AppPicker;

const styles = StyleSheet.create({
  container: {
    padding: 12,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor:colors.light,
    marginTop:10,
    borderRadius:8
  },
});
