// import modules
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



// home screen
import HomeScreen from './screens/HomeScreen';

// schedule screen
import ScheduleScreen from './screens/ScheduleScreen';
import ScheduleGenScreen from './screens/ScheduleGenScreen'

// notes screen
import NotesScreen from './screens/NotesScreen';
import NotesByFolderScreen from './screens/NotesByFolderScreen'
import NotesGenScreen from './screens/NotesGenScreen'

// image screen
import ImageContainerScreen from './screens/ImageContainerScreen';
import ImageShelfScreen from './screens/ImageShelfScreen'
import ShowImageScreen from './screens/ShowImageScreen'

// doctor screen
import DoctorContactGenScreen from './screens/DoctorContactGenScreen'
import DoctorContactScreen from './screens/DoctorContactScreen'

// user screen
import DisplayAllUser from './screens/DisplayAllUser'
import UserGenScreen from './screens/UserGenScreen'

// otherapps, aboutus screen
import OtherAppsScreen from './screens/OtherAppsScreen'
import AboutUsScreen from './screens/AboutUsScreen';

// import styles


const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="DisplayAllUser">

          {/* homescreen */}
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{ title: 'Medicluster' }}
          />

          {/* Schedule screen */}
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

          {/* notes screen */}
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

          {/* image screen */}
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
            name="ShowImage"
            component={ShowImageScreen}
            options={{ title: 'Gallary' }}
          />

          {/* user screens */}
          <Stack.Screen
            name="DisplayAllUser"
            component={DisplayAllUser}
            options={{ title: 'happies' }}
          />
          <Stack.Screen
            name="UserGen"
            component={UserGenScreen}
            options={{ title: 'Create User' }}
          />

          {/* Doctor screen */}
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

          {/* about us and user screen */}
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


