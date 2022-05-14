import React, { useState } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

import TabNavigation from './TabNavigation';
import { UserStackScreens, DoctContentStackScreens } from './StackNavigation'
import Gdata from '../globals/data/globalsData'

const RootStack = createNativeStackNavigator();

export default function RootNavigatior() {
    return (
        <NavigationContainer>
            <RootStack.Navigator initialRouteName={Gdata.user_logged_in() ? 'TabShown' : 'InitialUser'} screenOptions={{ headerShown: false }} >
                <RootStack.Screen name="InitialUser" component={UserStackScreens} />
                <RootStack.Screen name="TabShown" component={TabNavigation} />
                <RootStack.Screen name="Docter" component={DoctContentStackScreens} />
            </RootStack.Navigator>
        </NavigationContainer>
    )
}