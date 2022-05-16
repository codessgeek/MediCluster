import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import FeatherIcon from "react-native-vector-icons/Feather";

const userStatusCircle = ({ name }) => {
    return (
        <View style={styles.currentUserProfileComponent}>

            <FeatherIcon name="user" style={styles.icon}></FeatherIcon>

            <Text style={styles.username}> {name}</Text>

        </View>
    )
}

const styles = StyleSheet.create({
    currentUserProfileComponent: {
        padding: 3,
        flexDirection: 'column',
        justifyContent: 'center',
        margin: 5
    },
    icon: {
        backgroundColor: 'pink',
        borderRadius: 50,
        justifyContent: 'center',
        alignSelf: 'center',
        padding: 10,
        color: "rgba(128,128,128,1)",
        fontSize: 40
    },
    username: {
        fontFamily: "roboto-regular",
        color: "#121212",
        height: 16,
        width: 61,
        fontSize: 12,
        textAlign: "center"
    },
})

export default userStatusCircle