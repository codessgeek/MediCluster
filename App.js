// import modules
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// import custom components

// import screens
import HomeScreen from './screens/HomeScreen';

import ScheduleScreen from './screens/ScheduleScreen';
import ScheduleGenScreen from './screens/ScheduleGenScreen'

import NotesScreen from './screens/NotesScreen';
import NotesByFolderScreen from './screens/NotesByFolderScreen'
import NotesGenScreen from './screens/NotesGenScreen'

import ImageContainerScreen from './screens/ImageContainerScreen';
import ImageShelfScreen from './screens/ImageShelfScreen'
import ShowImageScreen from './screens/ShowImageScreen'

import DoctorContactGenScreen from './screens/DoctorContactGenScreen'
import DoctorContactScreen from './screens/DoctorContactScreen'

import SelectUserScreen from './screens/SelectUserScreen'
import UserGenScreen from './screens/UserGenScreen'

import OtherAppsScreen from './screens/OtherAppsScreen'
import AboutUsScreen from './screens/AboutUsScreen';

// import styles


const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="DoctorContactGen">

          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{ title: 'Medicluster' }}
          />
          <Stack.Screen
            name="Schedule"
            component={ScheduleScreen}
            options={{ title: 'My Schedules' }}
          />
          <Stack.Screen
            name="ScheduleGen"
            component={ScheduleGenScreen}
            options={{ title: 'Add Schedules' }}
          />

          <Stack.Screen
            name="Notes"
            component={NotesScreen}
            options={{ title: 'My Notes' }}
          />
          <Stack.Screen
            name="NotesGen"
            component={NotesGenScreen}
            options={{ title: 'Add Notes' }}
          />
          <Stack.Screen
            name="NotesByFolder"
            component={NotesByFolderScreen}
            options={{ title: 'My Notes' }}
          />
          <Stack.Screen
            name="ImageContainer"
            component={ImageContainerScreen}
            options={{ title: 'Gallary' }}
          />
          <Stack.Screen
            name="ImageShelf"
            component={ImageShelfScreen}
            options={{ title: 'Gallary' }}
          />
          <Stack.Screen
            name="showImage"
            component={ShowImageScreen}
            options={{ title: 'Gallary' }}
          />
          <Stack.Screen
            name="SelectUser"
            component={SelectUserScreen}
            options={{ title: 'users' }}
          />
          <Stack.Screen
            name="UserGen"
            component={UserGenScreen}
            options={{ title: 'Create User' }}
          />
          <Stack.Screen
            name="DoctorContactGen"
            component={DoctorContactGenScreen}
            options={{ title: 'Add Contect' }}
          />
          <Stack.Screen
            name="DoctorContact"
            component={DoctorContactScreen}
            options={{ title: 'Doctor Contect' }}
          />
          <Stack.Screen
            name="AboutUs"
            component={AboutUsScreen}
            options={{ title: 'About us' }}
          />
          <Stack.Screen
            name="OtherApps"
            component={OtherAppsScreen}
            options={{ title: 'Over apps' }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;


