import {
  Button,
  StyleSheet,
  Text,
  View,
  TextInput,
  Pressable,
  Platform,
} from "react-native";
import React, { useContext, useState } from "react";
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
import CustomDatePicker from "../components/form/CustomDatePicker";
import StoreContext from "../store/context";
import { useNavigation } from "@react-navigation/native";

const nationality = [
  { label: 'Select', value:'' },
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
const program = [
  { label: 'Select', value:'' },
  { label: "B.Tech", value: "B.Tech" },
  { label: "B.E", value: "B.E" },
  { label: "M.A", value: "M.A" },
  { label: "Ph.D", value: "Ph.D" },
];
const department = [
  { label: 'Select', value:'' },
  { label: "Computer Science", value: "Computer Science" },
  { label: "Mathematics", value: "Mathematics" },
  { label: "History", value: "Chemistry" },
];
const major = [
  { label: 'Select', value:'' },
  { label: "Computer Engineering", value: "Computer Engineering" },
  { label: "Economics", value: "Economics" },
  { label: "English Literature", value: "English Literature" },
];

const validationSchema = Yup.object().shape({
  firstName:Yup.string().required("First Name is required").min(1),
  lastName:Yup.string().required().min(1).label("Last Name is required"),
  dateOfBirth:Yup.string().required().label("DOB"),
  contactNumber:Yup.string().required().min(10).max(10).label("Contact Number"),
  email:Yup.string().required().email().label("Email"),
  address:Yup.object().shape({
    city: Yup.string().required('This field is required'),
    postalCode: Yup.string().required('This field is required').min(6).max(6).label("Postal code"),
  })
})

const AddStudentScreen = ({ route }) => {
 const {students,getStudents} = useContext(StoreContext)
  const student = route.params;
  //  console.log(student)
  const navigation = useNavigation()

  const [imageUri, setImageUri] = useState();
  const [progress, setProgress] = useState(0);
  const [uploadVisible, setUploadVisible] = useState(false);
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: student,resolver:yupResolver(validationSchema)
  });
  // console.log(errors)
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
    getStudents()
    navigation.navigate("Students");
    
  };

  return (
    <Screen style={styles.screen}>
      <ScrollView style={{ paddingHorizontal: 10 }}>
        <UploadScreen
          onDone={() => setUploadVisible(false)}
          progress={progress}
          visible={uploadVisible}
        />
        <View style={styles.formContainer}>
        <View style={styles.container}>
          {/* <AppFormImagePicker
            label="Profile Picture"
            name="image"
            // imageUri={imageUri}
            // onChange={(uri) => setImageUri(uri)}
            control={control}
          /> */}
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

          <CustomDatePicker
            control={control}
            name="dateOfBirth"
            label="DOB"
            placeholder="date of birth"
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
          />
          <AppFormPicker
            items={gender}
            name="gender"
            placeholder="Gender"
            width="50%"
            control={control}
          />
        </View>

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
          <AppText style={{ marginBottom: 0 }}>Academic Info</AppText>

          <CustomDatePicker
            control={control}
            label="Enrollmemt Date"
            name="academicInfo.enrollmentDate"
            placeholder="Enrollment Date"
          />
          <CustomDatePicker
            control={control}
            label="Graduation Date"
            name="academicInfo.graduationDate"
            placeholder="Graduation date"
          />
          <AppFormPicker
            control={control}
            items={program}
            name="academicInfo.program"
            placeholder="Program"
            width="50%"
          />
          <AppFormPicker
            control={control}
            items={department}
            name="academicInfo.department"
            placeholder="Department"
            width="50%"
          />
          <AppFormPicker
            control={control}
            items={major}
            name="academicInfo.major"
            placeholder="Major"
            width="50%"
          />
        
        </View>

        <View style={styles.container}>
          <AppText>Health Info</AppText>
          <AppFormField
            name="healthInfo.medicalHistory"
            placeholder="Medical History"
            control={control}
          />
          <AppFormField
            name="healthInfo.allergies"
            placeholder="Allergies"
            control={control}
          />
          <AppFormField
            name="healthInfo.prescription"
            placeholder="Prescription"
            control={control}
          />
          <AppText>Emergency Contact</AppText>
          <AppFormField
            name="healthInfo.emergencyContact.name"
            placeholder="Name"
            control={control}
          />
          <AppFormField
            name="healthInfo.emergencyContact.relationship"
            placeholder="Relationship"
            control={control}
          />
          <AppFormField
            name="healthInfo.emergencyContact.phone"
            placeholder="Phone"
            control={control}
            keyboardType="numeric"
          />
        </View>
        <View style={styles.container}>
        <AppText>Notes & Comments</AppText>
        <AppFormField
            name="notesAndComments"
            placeholder="Notes & Comments"
            control={control}
            multiline
            numberOfLines={4}
          />

        </View>
        
        </View>
      </ScrollView>
      <View style={{paddingHorizontal:8,marginBottom:6}}>
      <SubmitButton
          title={`${!student ? "Add" : "Update"}`}
          onPress={handleSubmit(onSubmit)}
        /></View>
    </Screen>
  );
};

export default AddStudentScreen;

const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.white,
  },
  formContainer: {
    paddingBottom: 40,
  },
  container: {
    paddingBottom: 10,
    paddingTop: 16,
    gap: 16,
  },
});
