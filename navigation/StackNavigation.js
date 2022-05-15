import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Gdata from '../globals/data/globalsData'
import SchduleGenScreen from "../screens/ScheduleGenScreen";
import Schduleshow from "../screens/ScheduleScreen";
import DoctorContentScreen from '../screens/DoctorContactScreen';
import DoctorContentgenscreen from "../screens/DoctorContactGenScreen";
import ImageContainerScreen from "../screens/ImageContainerScreen";
import ImageShelfScreen from "../screens/ImageShelfScreen";
import NotesByFolderScreen from "../screens/NotesByFolderScreen";
import NotesGenScreen from "../screens/NotesGenScreen";
import HomeScreen1 from "../screens/HomeScreen1";
import NewUser from "../screens/UserGenScreen";

const ScheduleStack = createNativeStackNavigator();

export function ScheduleStackScreens() {
    return (
        <ScheduleStack.Navigator initialRouteName="ShowSchdule" screenOptions={{ headerShown: false }}>
            <ScheduleStack.Screen name="ShowSchdule" component={Schduleshow} />
            <ScheduleStack.Screen name="addSchdule" component={SchduleGenScreen} />
        </ScheduleStack.Navigator>
    )
}

const ImagesStack = createNativeStackNavigator();

export function ImagesStackScreens() {
    return (
        <ImagesStack.Navigator initialRouteName="ShowImageContainer" screenOptions={{ headerShown: false }}>
            <ImagesStack.Screen name="ShowImageContainer" component={ImageContainerScreen} />
            <ImagesStack.Screen name="ShowImageShelf" component={ImageShelfScreen} />
        </ImagesStack.Navigator>
    )
}

const NotesStack = createNativeStackNavigator();

export function NotesStackScreens() {
    return (
        <NotesStack.Navigator initialRouteName="ShowNotes" screenOptions={{ headerShown: false }}>
            <NotesStack.Screen name="ShowNotes" component={NotesByFolderScreen} />
            <NotesStack.Screen name="AddNotes" component={NotesGenScreen} />
        </NotesStack.Navigator>
    )
}

const DoctContentStack = createNativeStackNavigator();

export function DoctContentStackScreens() {
    return (
        <DoctContentStack.Navigator initialRouteName="ShowDoctContent" screenOptions={{ headerShown: false }}>
            <DoctContentStack.Screen name="ShowDoctContent" component={DoctorContentScreen} />
            <DoctContentStack.Screen name="AddDoctContent" component={DoctorContentgenscreen} />
        </DoctContentStack.Navigator>
    )
}

const HomeStack = createNativeStackNavigator();

export function HomeScreenScreens({ navigation, route }) {
    console.log(route.params.id);
    const Tnav = Gdata.bottom_navigation({ ...navigation })
    return (
        <HomeStack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
            <HomeStack.Screen name="Home" component={HomeScreen1} />
            <HomeStack.Screen name="Doct" component={DoctContentStackScreens} />
            <HomeStack.Screen name="User" component={NewUser} />
        </HomeStack.Navigator>

    )
}