
import AppNavigator from './app/navigation/AppNavigator';
import { NavigationContainer } from '@react-navigation/native';
import navigationTheme from './app/navigation/navigationTheme';
import StoreContext from './app/store/context';
import { useEffect, useState } from 'react';
import useApi from './app/api/useApi';
import studentApi from "./app/api/endPoints";

export default function App() {
  const [students,setStudents] = useState({})
  const getStudentsApi = useApi(studentApi.getStudents);

const getStudents = async () =>{
    await getStudentsApi.request();
  setStudents(getStudentsApi.data['data'])
}

useEffect(() =>{
  getStudents()
},[])
  return (
<StoreContext.Provider value={{students,getStudents}}>
    <NavigationContainer theme={navigationTheme}>

      <AppNavigator/>
    </NavigationContainer>
    </StoreContext.Provider>
  );
}


