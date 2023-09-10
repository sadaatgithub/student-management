import { Image, ScrollView, StyleSheet, Alert, View, Text } from "react-native";
import React, { useState } from "react";
import Screen from "../components/Screen";
import AppText from "../components/heading/AppText";
import AppButton from "../components/AppButton";
import colors from "../config/colors";
import StudentDetail from "../components/StudentDetail";
import studentApi from "../api/endPoints";
import DeleteScreen from "./DeleteScreen";

const StudentDetailScreen = ({ route, navigation }) => {
  const [deleteVisible, setDeleteVisible] = useState(false);
  const student = route.params;

  const handleDelete = async (id) => {
    setDeleteVisible(true);
    const result = await studentApi.deleteStudent(id);
    if (!result.ok) {
      setDeleteVisible(false);
      return alert("Could not Delete Student");
    }
    navigation.navigate("Students");
  };

  return (
    <Screen style={styles.screen}>
      <ScrollView style={styles.flexDiv}>
        <DeleteScreen
          onDone={() => setDeleteVisible(false)}
          visible={deleteVisible}
        />

        <View style={styles.detailContainer}>
          {/* profile banner */}
          <View style={styles.profileBack}>
            <Image style={styles.image} source={student.image} />
          </View>

          <View style={styles.nameContainer}>
            <AppText style={styles.title}>
              {student.firstName + " " + student.lastName}
            </AppText>
            <AppText>{student.academicInfo?.studentId}</AppText>
          </View>
          <View style={{ paddingHorizontal: 10 }}>
            <AppText style={{ fontSize: 20, marginBottom: 8 }}>
              Personal Info
            </AppText>
            <StudentDetail
              label="Student ID"
              value={student.academicInfo?.studentId}
            />
            <StudentDetail label="Gender" value={student.gender} />
            <StudentDetail label="Nationality" value={student.nationality} />
            <StudentDetail label="Mobile" value={student.contactNumber} />
            <StudentDetail label="Email" value={student.email} />
          </View>
          <View style={{ paddingHorizontal: 10 }}>
            <AppText style={{ fontSize: 20, marginBottom: 8 }}>Address</AppText>
            <StudentDetail label="Street" value={student.address?.street} />
            <StudentDetail label="City" value={student.address?.city} />
            <StudentDetail label="State" value={student.address?.state} />
            <StudentDetail
              label="Postal Code"
              value={student.address?.postalCode}
            />
            <StudentDetail label="Email" value={student.email} />
          </View>
          <View style={{ paddingHorizontal: 10 }}>
            <AppText style={{ fontSize: 20, marginBottom: 8 }}>
              Academic Info
            </AppText>
            <StudentDetail
              label="Enrollment Date"
              value={student.academicInfo?.enrollmentDate}
            />
            <StudentDetail
              label="Graduation Date"
              value={student.academicInfo?.graduationDate}
            />
            <StudentDetail
              label="Program"
              value={student.academicInfo?.program}
            />
            <StudentDetail
              label="Department"
              value={student.academicInfo?.department}
            />
            <StudentDetail label="Major" value={student.academicInfo?.major} />
            <StudentDetail
              label="academic Advisor"
              value={student.academicInfo?.academicAdvisor}
            />
            <StudentDetail label="GPA" value={student.academicInfo?.gpa} />
          </View>
          <View style={{ paddingHorizontal: 10 }}>
          <AppText style={{ fontSize: 20,marginBottom:8 }}>Extracurricular Activities</AppText>
            {student.extracurricularActivities?.map(item =><Text>{item}</Text>
            )}
          </View>
          <View style={{ paddingHorizontal: 10 }}>
            <AppText style={{ fontSize: 20, marginBottom: 8 }}>
              Health Info
            </AppText>
            <StudentDetail
              label="Medical History"
              value={student.healthInfo?.medicalHistory}
            />
            <StudentDetail
              label="Allergies"
              value={student.healthInfo?.allergies}
            />
            <StudentDetail
              label="Prescriptions"
              value={student.healthInfo?.prescriptions}
            />
            <AppText style={{ fontSize: 18, marginLeft: 8 }}>
              Emergency Contact
            </AppText>
            <StudentDetail
              label="Name"
              value={student.healthInfo?.emergencyContact?.name}
            />
            <StudentDetail
              label="Relationship"
              value={student.healthInfo?.emergencyContact?.relationship}
            />
            <StudentDetail
              label="Phone"
              value={student.healthInfo?.emergencyContact?.phone}
            />
          </View>
          <View style={{ paddingHorizontal: 10 }}>
            <AppText style={{ fontSize: 20, marginBottom: 8 }}>
              Notes and Comments
            </AppText>
            <AppText style={{ color: "gray" }}>
              {student.notesAndComments}
            </AppText>
          </View>
        </View>
      </ScrollView>
      <View style={styles.btnContainer}>
        <AppButton
          style={styles.btn}
          icon="pencil"
          color="secondary"
          onPress={() => navigation.navigate("Update", student)}
        />
        <AppButton
          style={styles.btn}
          icon="delete"
          color="primary"
          onPress={() =>
            Alert.alert("Delete", "Are you sure to delete?", [
              { text: "Yes", onPress: () => handleDelete(student._id) },
              { text: "No" },
            ])
          }
        />
      </View>
    </Screen>
  );
};

export default StudentDetailScreen;

const styles = StyleSheet.create({
  screen: {
    paddingTop: 0,
  },
  detailContainer: {
    flex: 1,
    backgroundColor: colors.white,
    justifyContent: "space-between",
    paddingBottom: 200,
    gap: 12,
  },

  profileBack: {
    width: "100%",
    height: 150,
    backgroundColor: colors.secondary,
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 150,
    overflow: "hidden",
    position: "absolute",
    left: "30%",
    top: "50%",
    borderWidth: 5,
    borderColor: colors.light,
    // shadowColor:'gray',
    // shadowOffset:5
  },
  nameContainer: {
    marginTop: 100,
    paddingHorizontal: 10,
    justifyContent: "center",
    alignItems: "center",
    gap: 6,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: colors.primary,
  },
  textDetailContainer: {
    flexDirection: "row",
    paddingHorizontal: 10,
    paddingVertical: 8,
  },
  btn: {
    width: 65,
    height: 65,
    borderRadius: 50,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  btnContainer: {
    position: "absolute",
    bottom: 0,
    right: 0,
    left: 0,
    gap: 10,
    paddingHorizontal: 10,
    alignItems: "flex-end",
    // flexDirection:"row"
  },
});
