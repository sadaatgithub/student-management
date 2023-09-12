import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Picker } from "@react-native-picker/picker";
import AppText from "../heading/AppText";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import defaultStyles from "../../config/styles";
import colors from "../../config/colors";

const AppPicker = ({ icon, placeholder, items, width,...otherProps }) => {
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
        <AppText style={styles.text}>{placeholder}</AppText>
      </View>
      <Picker
        dropdownIconRippleColor="lightblue"
        // prompt={`Choose ${placeholder}`}
        selectionColor={"blue"}
        // mode="dropdown"

        {...otherProps}
        style={{ width: 150 }}
      >
        {items.map((item,idx) => (
          <Picker.Item key={item.value} label={item.label} value={item.value} enabled={idx!==0}/>
        ))}
      </Picker>
    </View>
  );
};

export default AppPicker;

const styles = StyleSheet.create({
  container: {
    // padding: 12,
    paddingHorizontal:12,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor:colors.light,
    borderRadius:8
  },
  text:{
    fontSize:16,
    color:colors.medium
  }
});
