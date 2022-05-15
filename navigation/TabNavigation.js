import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { ImagesStackScreens, DoctContentStackScreens, ScheduleStackScreens, HomeScreenScreens } from "./StackNavigation";
import Icon from 'react-native-vector-icons/FontAwesome' //home, sticky-note
import Icon5 from 'react-native-vector-icons/FontAwesome5' // clock
import IconMtrls from 'react-native-vector-icons/MaterialIcons' // image

import Gdata from "../globals/data/globalsData";

const Tab = createBottomTabNavigator();

export default function BottomTabNav({ navigation }) {
    const rootnav = Gdata.root_navigation({ ...navigation });
    return (
        <Tab.Navigator initialRouteName="HomeStack"
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName = {
                        'HomeStack': <Icon name="home" size={focused ? 35 : 30} color={color} />,
                        'Schdule': <Icon5 name="clock" size={focused ? 35 : 30} color={color} />,
                        'Gallery': <IconMtrls name="image" size={focused ? 35 : 30} color={color} />,
                        'Care': <Icon5 name="plus" size={focused ? 35 : 30} color={color} />
                    };
                    return iconName[route.name]
                },
                tabBarActiveTintColor: 'black',
                tabBarInactiveTintColor: 'gray',
                headerShown: false,
                tabBarHideOnKeyboard: true,
                tabBarStyle: { height: 70, padding: 3 },
                tabBarLabelStyle: { fontSize: 15, paddingVertical: 5 }

            })} >
            <Tab.Screen name="HomeStack" component={HomeScreenScreens} options={{ title: 'Home' }} initialParams={{ id: 5 }} />
            <Tab.Screen name="Schdule" component={ScheduleStackScreens} />
            <Tab.Screen name="Gallery" component={ImagesStackScreens} />
            <Tab.Screen name="Care" component={DoctContentStackScreens} />
        </Tab.Navigator>
    )
}