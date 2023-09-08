import { createStackNavigator } from "@react-navigation/stack";

import WelcomeScreen from "../screens/WelcomeScreen";
import MainNavigator from "./MainNavigator";
import AddStudentScreen from "../screens/AddStudentScreen";

const Stack = createStackNavigator()

const AppNavigator = () =>(
    <Stack.Navigator>
        <Stack.Screen 
                name="Welcome" component={WelcomeScreen}
                options={{headerShown:false,headerTintColor:"white"}}/>

        <Stack.Screen name="Main" 
        component={MainNavigator}
        options={{headerShown:false}}/>

        <Stack.Screen name="Update" 
        component={AddStudentScreen}

        />


        
    </Stack.Navigator>

)

export default AppNavigator