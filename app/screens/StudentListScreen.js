import {
  StyleSheet,
  Text,
  FlatList,
  View,
  ActivityIndicator,
  Button,
} from "react-native";
import React, { useContext, useEffect, useState } from "react";
import Screen from "../components/Screen";
import Card from "../components/Card";
import useApi from "../api/useApi";
import studentApi from "../api/endPoints";
import AppText from "../components/heading/AppText";
import StoreContext from "../store/context";
import AppFormField from "../components/form/AppFormField";
import { TextInput } from "react-native-gesture-handler";
import AppTextInput from "../components/form/AppTextInput";
import colors from "../config/colors";

const students = [
  {
    id: 1,
    firstName: "John",
    lastName: "Doe",
    dateOfBirth: "1998-05-15",
    gender: "Male",
    nationality: "USA",
    contactNumber: "+1 (123) 456-7890",
    email: "john.doe@example.com",
    image: require("../assets/student_3.jpg"),
    address: {
      street: "123 Main Street",
      city: "New York",
      state: "NY",
      postalCode: "10001",
    },
    academicInfo: {
      studentId: "S001",
      enrollmentDate: "2020-09-01",
      graduationDate: "2024-06-30",
      program: "Computer Science",
      department: "Engineering",
      major: "Software Engineering",
      academicAdvisor: "Dr. Smith",
      gpa: 3.8,
    },
    extracurricularActivities: ["Chess Club", "Basketball Team"],
    healthInfo: {
      medicalHistory: "No major medical history",
      allergies: "None",
      prescriptions: "None",
      emergencyContact: {
        name: "Jane Doe",
        relationship: "Parent",
        phone: "+1 (987) 654-3210",
      },
    },
    // documents: {
    //   idCard: "https://example.com/id-card.jpg",
    //   passport: "https://example.com/passport.pdf",
    // },
    // libraryRecords: {
    //   checkedOutBooks: [
    //     "Introduction to Computer Science",
    //     "Linear Algebra",
    //   ],
    //   libraryFines: 0,
    // },
    notesAndComments:
      "Excellent student, active in extracurricular activities.",
  },
  {
    id: 2,
    firstName: "Smith",
    lastName: "Joe",
    dateOfBirth: "1998-05-15",
    gender: "Male",
    nationality: "USA",
    contactNumber: "+1 (123) 456-7890",
    email: "smith.doe@example.com",
    image: require("../assets/student_1.jpg"),
    address: {
      street: "123 Main Street",
      city: "New York",
      state: "NY",
      postalCode: "10001",
    },
    academicInfo: {
      studentId: "S001",
      enrollmentDate: "2020-09-01",
      graduationDate: "2024-06-30",
      program: "Computer Science",
      department: "Engineering",
      major: "Software Engineering",
      academicAdvisor: "Dr. Smith",
      gpa: 3.8,
    },
    extracurricularActivities: ["Chess Club", "Basketball Team"],
    healthInfo: {
      medicalHistory: "No major medical history",
      allergies: "None",
      prescriptions: "None",
      emergencyContact: {
        name: "Jane Doe",
        relationship: "Parent",
        phone: "+1 (987) 654-3210",
      },
    },
    // documents: {
    //   idCard: "https://example.com/id-card.jpg",
    //   passport: "https://example.com/passport.pdf",
    // },
    // libraryRecords: {
    //   checkedOutBooks: [
    //     "Introduction to Computer Science",
    //     "Linear Algebra",
    //   ],
    //   libraryFines: 0,
    // },
    notesAndComments:
      "Excellent student, active in extracurricular activities.",
  },
  {
    id: 3,
    firstName: "Jonny",
    lastName: "Lever",
    dateOfBirth: "1998-05-15",
    gender: "Male",
    nationality: "USA",
    contactNumber: "+1 (123) 456-7890",
    email: "jolley@example.com",
    image: require("../assets/student_2.jpeg"),
    address: {
      street: "123 Main Street",
      city: "New York",
      state: "NY",
      postalCode: "10001",
    },
    academicInfo: {
      studentId: "S001",
      enrollmentDate: "2020-09-01",
      graduationDate: "2024-06-30",
      program: "Computer Science",
      department: "Engineering",
      major: "Software Engineering",
      academicAdvisor: "Dr. Smith",
      gpa: 3.8,
    },
    extracurricularActivities: ["Chess Club", "Basketball Team"],
    healthInfo: {
      medicalHistory: "No major medical history",
      allergies: "None",
      prescriptions: "None",
      emergencyContact: {
        name: "Jane Doe",
        relationship: "Parent",
        phone: "+1 (987) 654-3210",
      },
    },
    // documents: {
    //   idCard: "https://example.com/id-card.jpg",
    //   passport: "https://example.com/passport.pdf",
    // },
    // libraryRecords: {
    //   checkedOutBooks: [
    //     "Introduction to Computer Science",
    //     "Linear Algebra",
    //   ],
    //   libraryFines: 0,
    // },
    notesAndComments:
      "Excellent student, active in extracurricular activities.",
  },
];

const StudentListScreen = ({ navigation }) => {
  const {students,getStudents} = useContext(StoreContext)
  const [refreshing, setRefreshing] = useState(false);
  const [filterText, setFilterBy] = useState('')

  useEffect(() =>{
    if(!students){
      getStudents()}

  },[])
  
  return (
    <View style={styles.screen}>
      {!students && (
        <View style={styles.refetchBtn}>
          <AppText>Couldnt retrieve the student list</AppText>
          <Button title="Refresh" onPress={getStudents}/>
        </View>
      )}
      {/* <AppFormField/> */}
      <View style={styles.searchContainer}>
      <AppTextInput icon="account-search" iconSize={30} placeholder="Student Search" onChangeText={(value) => setFilterBy(value)}/>
      </View>
      {/* <ActivityIndicator animating={getStudentsApi.loading} size={40} style={{top:"50%", zIndex:1}}/> */}
      <FlatList
        data={students?.filter(stu => stu.firstName.includes(filterText) || stu.academicInfo?.studentId?.includes(filterText) || stu.lastName.includes(filterText))}
        keyExtractor={(student) => student._id.toString()}
        
        renderItem={({ item }) => (
          <Card
            title={item.firstName + " " + item.lastName}
            subtitle={item.academicInfo?.studentId}
            imageUrl={require("../assets/student_3.jpg")}
            onPress={() => navigation.navigate("Student Detail", item)}
          />
        )}
        refreshing={refreshing}
        onRefresh={getStudents}
      />
    </View>
  );
};

export default StudentListScreen;

const styles = StyleSheet.create({
  screen:{
    paddingVertical:4,
    position:"relative",
    flex:1,
  },
  // refetchBtn:{
  //   alignSelf:"center",
  //   top:"50%",
  //   gap:10
  // },
  searchContainer:{
    paddingHorizontal:10,
    backgroundColor:colors.white,
    paddingVertical:12,
    shadowColor: "gray",
    shadowOffset: {
      width: 2,
      height: 8,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 2,

  }
});
