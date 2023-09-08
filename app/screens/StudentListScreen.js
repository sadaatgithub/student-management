import {
  StyleSheet,
  Text,
  FlatList,
  View,
  ActivityIndicator,
  Button,
} from "react-native";
import React, { useEffect, useState } from "react";
import Screen from "../components/Screen";
import Card from "../components/Card";
import useApi from "../api/useApi";
import studentApi from "../api/endPoints";
import AppText from "../components/heading/AppText";

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
  const getStudentsApi = useApi(studentApi.getStudents);
  const [refreshing, setRefreshing] = useState(false);
  useEffect(() => {
    getStudentsApi.request();
  }, []);
  return (
    <View style={styles.screen}>
      {getStudentsApi.error && (
        <>
          <AppText>Couldnt retrieve the strudent list</AppText>
          <Button title="Refresh" onPress={getStudentsApi.request}/>
        </>
      )}

      <ActivityIndicator animating={getStudentsApi.loading} size={40} style={{top:"50%", zIndex:1}}/>
      <FlatList
        data={getStudentsApi.data['data']}
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
        onRefresh={() => getStudentsApi.request()}
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
  }
});
