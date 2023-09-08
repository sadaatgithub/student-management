import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import StudentListScreen from '../screens/StudentListScreen'
import StudentDetailScreen from '../screens/StudentDetailScreen'



const Stack = createStackNavigator()

const StudentNavigator = () => (
    <Stack.Navigator>
        <Stack.Screen 
                name="Students" 
                component={StudentListScreen} 
                options={{headerTitle:"All Students"}}
        />
        <Stack.Screen name="Student Detail"
         component={StudentDetailScreen}
         options={{headerTitle:"Details"}}/>
    </Stack.Navigator>
)

export default StudentNavigator
