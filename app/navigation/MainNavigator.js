import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import {MaterialCommunityIcons} from "@expo/vector-icons"
import AddStudentScreen from "../screens/AddStudentScreen";
import StudentListScreen from "../screens/StudentListScreen";
import StudentNavigator from "./StudentNavigator";
const Tab = createBottomTabNavigator();

const MainNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={StudentNavigator}
        options={{ headerShown: false,
          tabBarLabelStyle:{
            fontSize:14
          },
        tabBarIcon:({size,color}) =>(
            <MaterialCommunityIcons name="home" size={35} color={color}/>
        ) }}
      />
      <Tab.Screen
        name="Add"
        component={AddStudentScreen}
        options={{ headerTitle:"Add Student",
        tabBarIcon:({size,color}) =>(
            <MaterialCommunityIcons name="plus-circle" size={35} color={color}/>
        ) }}
      />
    </Tab.Navigator>
  );
};

export default MainNavigator;
