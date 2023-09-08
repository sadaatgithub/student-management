import {
  Button,
  StyleSheet,
  Text,
  View,
  TextInput,
  Pressable,
  Platform,
} from "react-native";
import React, { useState } from "react";
import Screen from "../components/Screen";
import AppFormField from "../components/form/AppFormField";
import colors from "../config/colors";
import AppFormPicker from "../components/form/AppFormPicker";
import AppDatePicker from "../components/form/AppDatePicker";
import DateTimePicker from "@react-native-community/datetimepicker";
import AppFormImagePicker from "../components/form/AppFormImagePicker";
import { ScrollView } from "react-native-gesture-handler";
import AppText from "../components/heading/AppText";
import SubmitButton from "../components/form/SubmitButton";
import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import studentApi from "../api/endPoints";
import UploadScreen from "./UploadScreen";

const nationality = [
  {
    label: "India",
    value: "India",
  },
  {
    label: "Sri Lanka",
    value: "Sri Lanka",
  },
  {
    label: "Australia",
    value: "Australia",
  },
  {
    label: "England",
    value: "England",
  },
];
const gender = [
  {
    label: "Male",
    value: "Male",
  },
  {
    label: "Female",
    value: "Female",
  },
  {
    label: "Other",
    value: "Other",
  },
];

const AddStudentScreen = ({ route }) => {
  const student = route.params;
  //  console.log(student)

  const [dateOfBirth, setDateOfBirth] = useState("");
  const [date, setDate] = useState(new Date());
  const [showPicker, setShowPicker] = useState(false);
  const [imageUri, setImageUri] = useState();
  const [progress, setProgress] = useState(0);
  const [uploadVisible, setUploadVisible] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm({
    defaultValues: student,
  });
  const onSubmit = async (data) => {
    setProgress(0);
    setUploadVisible(true);
    let result;
    if (!student) {
      result = await studentApi.addStudent(data, (progress) =>
        setProgress(progress)
      );
      reset();
    } else {
      result = await studentApi.updateStudent(data, (progress) =>
        setProgress(progress)
      );
    }
    // const result = await studentApi.addStudent(data, (progress) =>
    //   setProgress(progress)
    // );
    if (!result.ok) {
      setUploadVisible(false);
      return alert("Could not save listing");
    }
  };
  const toggleDatePicker = () => {
    setShowPicker(!showPicker);
  };
  const onChange = ({ type }, selectedDate) => {
    // console.log(e.target.name)
    if (type == "set") {
      const currentDate = selectedDate;
      console.log(selectedDate);
      setDate(currentDate);

      if (Platform.OS === "android") {
        toggleDatePicker();
        setDateOfBirth(currentDate.toDateString());
        setValue("dateOfBirth", currentDate);
      }
    } else {
      toggleDatePicker();
    }
  };

  return (
    <Screen style={styles.screen}>
      <ScrollView>
        <UploadScreen
          onDone={() => setUploadVisible(false)}
          progress={progress}
          visible={uploadVisible}
        />
        <View style={styles.formContainer}>
          <AppFormImagePicker
            label="Profile Picture"
            name="image"
            // imageUri={imageUri}
            // onChange={(uri) => setImageUri(uri)}
            control={control}
          />
          <AppFormField
            name="firstName"
            placeholder="First Name"
            control={control}
          />

          <AppFormField
            name="lastName"
            placeholder="Last Name"
            control={control}
          />

          <AppDatePicker
            showPicker={showPicker}
            date={dateOfBirth}
            onPress={toggleDatePicker}
            value={date}
            display="spinner"
            onChange={onChange}
            control={control}
            name="dateOfBirth"
          />
          <AppFormField
            name="contactNumber"
            placeholder="Contact Number"
            keyboardType="numeric"
            control={control}
          />
          <AppFormField
            autoCorrect={false}
            name="email"
            placeholder="Email"
            keyboardType="email-address"
            autoCapitalize="none"
            control={control}
          />

          <AppFormPicker
            control={control}
            items={nationality}
            name="nationality"
            placeholder="Nationality"
            width="50%"
            // value={selectedNation}
            // onChange={(nation) => setSelectedNation(nation)}
          />
          <AppFormPicker
            items={gender}
            name="gender"
            placeholder="Gender"
            width="50%"
            control={control}
            // value={selectedGender}
            // onChange={(gender) => setSelectedGender(gender)}
          />
          <View style={styles.container}>
            <AppText>Address</AppText>
            <AppFormField
              name="address.street"
              placeholder="Street"
              control={control}
            />
            <AppFormField
              name="address.city"
              placeholder="City"
              control={control}
            />
            <AppFormField
              name="address.state"
              placeholder="State"
              control={control}
            />
            <AppFormField
              name="address.postalCode"
              placeholder="Postal Code"
              keyboardType="numeric"
              control={control}
            />
          </View>
          <View style={styles.container}>
            <AppText>Academic Info</AppText>
            <AppFormField
              control={control}
              name="enrollmentDate"
              placeholder="Enrollment Date"
            />
            <AppFormField
              control={control}
              name="graduationDate"
              placeholder="Graduation date"
            />
            <AppFormField
              control={control}
              name="program"
              placeholder="Program"
            />
            {/* <AppFormField
              name="postalCode"
              placeholder="Postal Code"
              keyboardType="numeric"
            /> */}
          </View>
          <SubmitButton title="Add" onPress={handleSubmit(onSubmit)} />
        </View>
      </ScrollView>
    </Screen>
  );
};

export default AddStudentScreen;

const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.white,
  },
  formContainer: {
    paddingHorizontal: 10,
    paddingBottom: 10,
  },
  container: {
    paddingTop: 16,
  },
});
