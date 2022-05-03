import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "../screens/HomeScreen";
import { ImagesStackScreens, NotesStackScreens, ScheduleStackScreens } from "./StackNavigation";

const Tab = createBottomTabNavigator();

export default function BottomTabNav() {
    return (
        <NavigationContainer>
            <Tab.Navigator initialRouteName="SchduleStack" screenOptions={{ headerShown: false, tabBarHideOnKeyboard: true }} >
                <Tab.Screen name="Home" component={HomeScreen} />
                <Tab.Screen name="Schdule" component={ScheduleStackScreens} />
                <Tab.Screen name="Gallery" component={ImagesStackScreens} />
                <Tab.Screen name="Notes" component={NotesStackScreens} />
            </Tab.Navigator>
        </NavigationContainer>
    )
}